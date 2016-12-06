var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.getConnection(function(err,connection){

       var query = connection.query('SELECT * FROM countries_by_rounds',function(err,rows)
       {
           if(err)
               console.log("Error Selecting : %s ",err );
        });
    });
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/getData', function(req, res, next) {
    var top_countries=[];
    var regions=[];
    req.getConnection(function(err,connection){
    var query = connection.query('SELECT Countries, Rounds FROM countries_by_rounds WHERE Year="2015"',function(err,rows)
       {
           if(err)
               console.log("Error Selecting : %s ",err );
           for (var i = 0; i < rows.length; i++) {
                top_countries.push({
                    name: rows[i].Countries,
                    y: rows[i].Rounds
                });
            }
            res.send(top_countries);
        });
    });
});

router.get('/getRegions', function(req, res, next) {
    console.log("Regions::::::::::::::");
    var regions=[];
    var angel=[];
    var seed=[];
    var venture=[];
    req.getConnection(function(err,connection){
    var query = connection.query('SELECT Regions, Angel, Venture, Seed from regions_by_investment where Year=2015 limit 10',function(err,rows)
       {
           if(err)
               console.log("Error Selecting : %s ",err );
           for (var i = 0; i < rows.length; i++) {
                regions.push(rows[i].Regions);
                angel.push(rows[i].Angel);
                seed.push(rows[i].Venture);
                venture.push(rows[i].Seed);
            }
            res.send({regions: regions, angel: angel, seed: seed, venture: venture});
        });
    });
});

router.get('/getRounds', function(req, res, next) {
    console.log("Regions::::::::::::::");
    var reg=[];
    var round=[];
    req.getConnection(function(err,connection){
    var query = connection.query('SELECT Regions, Rounds FROM regions_by_rounds WHERE Year=2015 ORDER BY Rounds DESC LIMIT 10;',function(err,rows)
       {
           if(err)
               console.log("Error Selecting : %s ",err );
           for (var i = 0; i < rows.length; i++) {
                reg.push(rows[i].Regions);
                round.push(rows[i].Rounds);
            }
            res.send({reg: reg, round: round});
        });
    });
});

<<<<<<< HEAD
router.get('/getInv', function(req, res, next) {
    console.log("Regions::::::::::::::");
    var inv=[];
    var y2015=[];
    var y2014=[];
    var y2013=[];
    var y2012=[];
    var y2011=[];
    var allYear=[];
    req.getConnection(function(err,connection){
    var query = connection.query('SELECT Investors, Y2015, Y2014, Y2013, Y2012, Y2011, AVG((Y2015+Y2014+Y2013+Y2012+Y2011)/5) as allYear FROM startup.investors_by_rounds group by Investors, Y2015, Y2014, Y2013, Y2012, Y2011;',function(err,rows)
=======
router.get('/getMapInfo', function(req, res, next) {
    var acquisition_info=[];
    req.getConnection(function(err,connection){
    var query = connection.query('SELECT COUNT(company_name) as count, company_state_code FROM startup.acquisitions WHERE company_country_code="USA" and acquired_year=2015 and company_state_code in ("NJ","RI","MA","CT","MD","NY","DE","FL","OH","PA","IL","CA","HI","VA","MI","IN","NC","GA","TN","NH","SC","LA","KY","WI","WA","AL","MO","TX","WV","VT","MN","MS","IA","AR","OK","AZ","CO","ME","OR","KS","UT","NE","NV","ID","NM","SD","ND","MT","WY","Ak") GROUP BY company_state_code',function(err,rows)
>>>>>>> master
       {
           if(err)
               console.log("Error Selecting : %s ",err );
           for (var i = 0; i < rows.length; i++) {
<<<<<<< HEAD
                inv.push(rows[i].Investors);
                y2015.push(rows[i].Y2015);
                y2014.push(rows[i].Y2014);
                y2013.push(rows[i].Y2013);
                y2012.push(rows[i].Y2012);
                y2011.push(rows[i].Y2011);
                allYear.push(rows[i].allYear);
            }
            res.send({inv: inv, y2015: y2015, y2014: y2014, y2013: y2013, y2012: y2012, y2011: y2011, allYear: allYear});
=======
                acquisition_info.push({
                    value: rows[i].count,
                    code: rows[i].company_state_code
                });
            }
            res.send(acquisition_info);
>>>>>>> master
        });
    });
});

<<<<<<< HEAD
=======
router.post('/postStateInfo', function(req, res) {
    if (req.body.stateCode) {
        var category_info=[];
        req.getConnection(function(err,connection){
        var query = connection.query('SELECT COUNT(company_category_list) as count, company_category_list FROM startup.acquisitions where company_state_code = ? and company_country_code="USA" and acquired_year=2015 group by company_category_list',[req.body.stateCode],function(err,rows)
           {
               if(err)
                   console.log("Error Selecting : %s ",err );
               for (var i = 0; i < rows.length; i++) {
                    category_info.push([rows[i].company_category_list,rows[i].count]);
                }
                console.log(category_info);
                res.send(category_info);
            });
        });
    }
});

>>>>>>> master
router.get('/dashboard',function(req,res){
    res.render("dashboard");
});

router.get('/acquisition',function(req,res){
    res.render("acquisition");
});
router.get('/prediction',function(req,res){
    res.render("prediction");
});
router.get('/investment',function(req,res){
    res.render("investment");
});

router.get('/funding',function(req,res){
    res.render("funding");
});

router.get('/people',function(req,res){
    res.render("people");
});
module.exports = router;

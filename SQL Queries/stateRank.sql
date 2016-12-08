#select name, category_list, funding_total_usd, status, country_code, state_code, state_density, funding_rounds
#from companies
#where state_code='CA';

update companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='AL')
union
update companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='AK')
union
update companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='AZ')
union
update companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='AR')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='CA')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='CO')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='CT')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='DE')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='FL')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='GA')
union
update companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='HI')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='ID')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='IL')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='IN')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='IA')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='KS')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='KY')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='LA')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='ME')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='MD')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='MA')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='MI')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='MN')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='MO')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='MT')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='NE')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='NV')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='NH')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='NJ')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='NM')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='NY')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='NC')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='OH')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='OR')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='PA')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='RI')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='SC')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='SD')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='TN')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='TX')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='UT')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='VT')
unionupdate companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='VA')
union
update companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='WA')
union
update companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='WI')
union
update companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='WY')
union
select * from Companies;

#select name, category_list, funding_total_usd, status, country_code, state_code, state_density, funding_rounds
#from companies
#where state_code='CA';

update companies
set companies.state_density = 
(select statecompanycount.stateRank
from statecompanycount 
where statecompanycount.state_code='AK');
select * from Companies where state_code='AK';

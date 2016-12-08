
#update companies_ set category_list='medical' where category_list like '%medical%';
#select * from companies_ where category_list like '%medical%';


select *
from companies_ 
where category_list like  '%medical%' and country_code='USA'
Union 
select *
from companies_
where category_list like  'software' and country_code='USA'
union
select *
from companies_
where category_list like  '%hardware%' and country_code='USA'
union
select *
from companies_
where category_list like  '%e-commerce%' and country_code='USA'
union
select *
from companies_
where category_list like  '%biotechnology%' and country_code='USA'
union
select *
from companies_
where category_list like  '%games%' and country_code='USA'
union
select *
from companies_
where category_list like  '%advertising%' and country_code='USA'
union
select *
from companies_
where category_list like  '%finance%' and country_code='USA'
union
select *
from companies_
where category_list like  '%social media%' and country_code='USA'
union
select *
from companies_
where category_list like  '%mobile%' and country_code='USA';


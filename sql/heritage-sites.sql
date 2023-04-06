/* @name FindNearestHeritageSites */
SELECT 
  id_no, name_en, category,
  'https://whc.unesco.org/en/list/' || id_no || '/' AS link,
location <-> st_makepoint(:longitude!, :latitude!) AS distance
FROM whc_sites_2021
ORDER BY distance
LIMIT :n!;

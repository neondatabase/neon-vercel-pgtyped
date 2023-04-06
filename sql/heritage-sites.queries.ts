/** Types generated for queries found in "sql/heritage-sites.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type category = 'Cultural' | 'Mixed' | 'Natural';

/** 'FindNearestHeritageSites' parameters type */
export interface IFindNearestHeritageSitesParams {
  latitude: number;
  longitude: number;
  n: number | string;
}

/** 'FindNearestHeritageSites' return type */
export interface IFindNearestHeritageSitesResult {
  category: category;
  distance: number | null;
  id_no: number;
  link: string | null;
  name_en: string;
}

/** 'FindNearestHeritageSites' query type */
export interface IFindNearestHeritageSitesQuery {
  params: IFindNearestHeritageSitesParams;
  result: IFindNearestHeritageSitesResult;
}

const findNearestHeritageSitesIR: any = {"usedParamSet":{"longitude":true,"latitude":true,"n":true},"params":[{"name":"longitude","required":true,"transform":{"type":"scalar"},"locs":[{"a":123,"b":133}]},{"name":"latitude","required":true,"transform":{"type":"scalar"},"locs":[{"a":136,"b":145}]},{"name":"n","required":true,"transform":{"type":"scalar"},"locs":[{"a":204,"b":206}]}],"statement":"SELECT \n  id_no, name_en, category,\n  'https://whc.unesco.org/en/list/' || id_no || '/' AS link,\nlocation <-> st_makepoint(:longitude!, :latitude!) AS distance\nFROM whc_sites_2021\nORDER BY distance\nLIMIT :n!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT 
 *   id_no, name_en, category,
 *   'https://whc.unesco.org/en/list/' || id_no || '/' AS link,
 * location <-> st_makepoint(:longitude!, :latitude!) AS distance
 * FROM whc_sites_2021
 * ORDER BY distance
 * LIMIT :n!
 * ```
 */
export const findNearestHeritageSites = new PreparedQuery<IFindNearestHeritageSitesParams,IFindNearestHeritageSitesResult>(findNearestHeritageSitesIR);



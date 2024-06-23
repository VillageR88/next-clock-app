export interface Location {
  data: {
    ip: string;
    hostname: null | string;
    type: string;
    range_type: {
      type: string;
      description: string;
    };
    connection: {
      asn: number;
      organization: string;
      isp: string;
      range: string;
    };
    location: {
      geonames_id: number;
      latitude: number;
      longitude: number;
      zip: string;
      continent: {
        code: string;
        name: string;
        name_translated: string;
        geonames_id: number;
        wikidata_id: string;
      };
      country: {
        alpha2: string;
        alpha3: string;
        calling_codes: string[];
        currencies: {
          symbol: string;
          name: string;
          symbol_native: string;
          decimal_digits: number;
          rounding: number;
          code: string;
          name_plural: string;
          type: string;
        }[];
        emoji: string;
        ioc: string;
        languages: {
          name: string;
          name_native: string;
        }[];
        name: string;
        name_translated: string;
        timezones: string[];
        is_in_european_union: boolean;
        fips: string;
        geonames_id: number;
        hasc_id: string;
        wikidata_id: string;
      };
      city: {
        fips: null | string;
        alpha2: null | string;
        geonames_id: number;
        hasc_id: null | string;
        wikidata_id: string;
        name: string;
        name_translated: string;
      };
      region: {
        fips: string;
        alpha2: string;
        geonames_id: number;
        hasc_id: string;
        wikidata_id: string;
        name: string;
        name_translated: string;
      };
    };
    tlds: string[];
    timezone: {
      id: string;
      current_time: string;
      code: string;
      is_daylight_saving: boolean;
      gmt_offset: number;
    };
    security: {
      is_anonymous: null | boolean;
      is_datacenter: null | boolean;
      is_vpn: null | boolean;
      is_bot: null | boolean;
      is_abuser: null | boolean;
      is_known_attacker: null | boolean;
      is_proxy: null | boolean;
      is_spam: null | boolean;
      is_tor: null | boolean;
      proxy_type: null | string;
      is_icloud_relay: null | boolean;
      threat_score: null | number;
    };
    domains: {
      count: null | number;
      domains: string[];
    };
  };
}

export interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

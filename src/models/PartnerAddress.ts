/* tslint:disable */
/* eslint-disable */
/**
 * Fingoti API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PartnerAddress
 */
export interface PartnerAddress {
    /**
     * 
     * @type {string}
     * @memberof PartnerAddress
     */
    line1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PartnerAddress
     */
    line2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PartnerAddress
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PartnerAddress
     */
    county?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PartnerAddress
     */
    postcode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PartnerAddress
     */
    country?: string | null;
}

/**
 * Check if a given object implements the PartnerAddress interface.
 */
export function instanceOfPartnerAddress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PartnerAddressFromJSON(json: any): PartnerAddress {
    return PartnerAddressFromJSONTyped(json, false);
}

export function PartnerAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'line1': !exists(json, 'line1') ? undefined : json['line1'],
        'line2': !exists(json, 'line2') ? undefined : json['line2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'county': !exists(json, 'county') ? undefined : json['county'],
        'postcode': !exists(json, 'postcode') ? undefined : json['postcode'],
        'country': !exists(json, 'country') ? undefined : json['country'],
    };
}

export function PartnerAddressToJSON(value?: PartnerAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'line1': value.line1,
        'line2': value.line2,
        'city': value.city,
        'county': value.county,
        'postcode': value.postcode,
        'country': value.country,
    };
}


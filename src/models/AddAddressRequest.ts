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
 * @interface AddAddressRequest
 */
export interface AddAddressRequest {
    /**
     * 
     * @type {string}
     * @memberof AddAddressRequest
     */
    line1: string;
    /**
     * 
     * @type {string}
     * @memberof AddAddressRequest
     */
    line2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddAddressRequest
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddAddressRequest
     */
    county?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddAddressRequest
     */
    postcode: string;
    /**
     * 
     * @type {string}
     * @memberof AddAddressRequest
     */
    country: string;
}

/**
 * Check if a given object implements the AddAddressRequest interface.
 */
export function instanceOfAddAddressRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "line1" in value;
    isInstance = isInstance && "postcode" in value;
    isInstance = isInstance && "country" in value;

    return isInstance;
}

export function AddAddressRequestFromJSON(json: any): AddAddressRequest {
    return AddAddressRequestFromJSONTyped(json, false);
}

export function AddAddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddAddressRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'line1': json['line1'],
        'line2': !exists(json, 'line2') ? undefined : json['line2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'county': !exists(json, 'county') ? undefined : json['county'],
        'postcode': json['postcode'],
        'country': json['country'],
    };
}

export function AddAddressRequestToJSON(value?: AddAddressRequest | null): any {
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

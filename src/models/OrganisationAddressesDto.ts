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
 * @interface OrganisationAddressesDto
 */
export interface OrganisationAddressesDto {
    /**
     * 
     * @type {string}
     * @memberof OrganisationAddressesDto
     */
    line1: string;
    /**
     * 
     * @type {string}
     * @memberof OrganisationAddressesDto
     */
    line2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrganisationAddressesDto
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrganisationAddressesDto
     */
    county?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrganisationAddressesDto
     */
    postcode: string;
    /**
     * 
     * @type {string}
     * @memberof OrganisationAddressesDto
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof OrganisationAddressesDto
     */
    id?: string;
}

/**
 * Check if a given object implements the OrganisationAddressesDto interface.
 */
export function instanceOfOrganisationAddressesDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "line1" in value;
    isInstance = isInstance && "postcode" in value;
    isInstance = isInstance && "country" in value;

    return isInstance;
}

export function OrganisationAddressesDtoFromJSON(json: any): OrganisationAddressesDto {
    return OrganisationAddressesDtoFromJSONTyped(json, false);
}

export function OrganisationAddressesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganisationAddressesDto {
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
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function OrganisationAddressesDtoToJSON(value?: OrganisationAddressesDto | null): any {
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
        'id': value.id,
    };
}


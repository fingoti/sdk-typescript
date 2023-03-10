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
 * @interface RegiserTenantDto
 */
export interface RegiserTenantDto {
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    organisationName: string;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    organisationHandle: string;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    addressLine1: string;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    addressLine2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    county?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    postcode: string;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    country?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    vatNumber?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RegiserTenantDto
     */
    isBusiness?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    partnerId: string;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    customerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    customerForename?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RegiserTenantDto
     */
    customerSurname?: string | null;
}

/**
 * Check if a given object implements the RegiserTenantDto interface.
 */
export function instanceOfRegiserTenantDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "organisationName" in value;
    isInstance = isInstance && "organisationHandle" in value;
    isInstance = isInstance && "addressLine1" in value;
    isInstance = isInstance && "postcode" in value;
    isInstance = isInstance && "partnerId" in value;

    return isInstance;
}

export function RegiserTenantDtoFromJSON(json: any): RegiserTenantDto {
    return RegiserTenantDtoFromJSONTyped(json, false);
}

export function RegiserTenantDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegiserTenantDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'organisationName': json['organisationName'],
        'organisationHandle': json['organisationHandle'],
        'addressLine1': json['addressLine1'],
        'addressLine2': !exists(json, 'addressLine2') ? undefined : json['addressLine2'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'county': !exists(json, 'county') ? undefined : json['county'],
        'postcode': json['postcode'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'vatNumber': !exists(json, 'vatNumber') ? undefined : json['vatNumber'],
        'isBusiness': !exists(json, 'isBusiness') ? undefined : json['isBusiness'],
        'partnerId': json['partnerId'],
        'customerEmail': !exists(json, 'customerEmail') ? undefined : json['customerEmail'],
        'customerForename': !exists(json, 'customerForename') ? undefined : json['customerForename'],
        'customerSurname': !exists(json, 'customerSurname') ? undefined : json['customerSurname'],
    };
}

export function RegiserTenantDtoToJSON(value?: RegiserTenantDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'organisationName': value.organisationName,
        'organisationHandle': value.organisationHandle,
        'addressLine1': value.addressLine1,
        'addressLine2': value.addressLine2,
        'city': value.city,
        'county': value.county,
        'postcode': value.postcode,
        'country': value.country,
        'vatNumber': value.vatNumber,
        'isBusiness': value.isBusiness,
        'partnerId': value.partnerId,
        'customerEmail': value.customerEmail,
        'customerForename': value.customerForename,
        'customerSurname': value.customerSurname,
    };
}


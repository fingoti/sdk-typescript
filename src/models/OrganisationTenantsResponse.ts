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
import type { OrganisationTenantDto } from './OrganisationTenantDto';
import {
    OrganisationTenantDtoFromJSON,
    OrganisationTenantDtoFromJSONTyped,
    OrganisationTenantDtoToJSON,
} from './OrganisationTenantDto';

/**
 * 
 * @export
 * @interface OrganisationTenantsResponse
 */
export interface OrganisationTenantsResponse {
    /**
     * 
     * @type {boolean}
     * @memberof OrganisationTenantsResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrganisationTenantsResponse
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof OrganisationTenantsResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<OrganisationTenantDto>}
     * @memberof OrganisationTenantsResponse
     */
    tenants?: Array<OrganisationTenantDto> | null;
}

/**
 * Check if a given object implements the OrganisationTenantsResponse interface.
 */
export function instanceOfOrganisationTenantsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganisationTenantsResponseFromJSON(json: any): OrganisationTenantsResponse {
    return OrganisationTenantsResponseFromJSONTyped(json, false);
}

export function OrganisationTenantsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganisationTenantsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'tenants': !exists(json, 'tenants') ? undefined : (json['tenants'] === null ? null : (json['tenants'] as Array<any>).map(OrganisationTenantDtoFromJSON)),
    };
}

export function OrganisationTenantsResponseToJSON(value?: OrganisationTenantsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'pageNumber': value.pageNumber,
        'count': value.count,
        'tenants': value.tenants === undefined ? undefined : (value.tenants === null ? null : (value.tenants as Array<any>).map(OrganisationTenantDtoToJSON)),
    };
}

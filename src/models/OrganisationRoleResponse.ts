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
import type { OrganisationRolesDto } from './OrganisationRolesDto';
import {
    OrganisationRolesDtoFromJSON,
    OrganisationRolesDtoFromJSONTyped,
    OrganisationRolesDtoToJSON,
} from './OrganisationRolesDto';

/**
 * 
 * @export
 * @interface OrganisationRoleResponse
 */
export interface OrganisationRoleResponse {
    /**
     * 
     * @type {boolean}
     * @memberof OrganisationRoleResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrganisationRoleResponse
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof OrganisationRoleResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<OrganisationRolesDto>}
     * @memberof OrganisationRoleResponse
     */
    roles?: Array<OrganisationRolesDto> | null;
}

/**
 * Check if a given object implements the OrganisationRoleResponse interface.
 */
export function instanceOfOrganisationRoleResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganisationRoleResponseFromJSON(json: any): OrganisationRoleResponse {
    return OrganisationRoleResponseFromJSONTyped(json, false);
}

export function OrganisationRoleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganisationRoleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'roles': !exists(json, 'roles') ? undefined : (json['roles'] === null ? null : (json['roles'] as Array<any>).map(OrganisationRolesDtoFromJSON)),
    };
}

export function OrganisationRoleResponseToJSON(value?: OrganisationRoleResponse | null): any {
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
        'roles': value.roles === undefined ? undefined : (value.roles === null ? null : (value.roles as Array<any>).map(OrganisationRolesDtoToJSON)),
    };
}


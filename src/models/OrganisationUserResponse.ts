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
import type { OrganisationUsersDto } from './OrganisationUsersDto';
import {
    OrganisationUsersDtoFromJSON,
    OrganisationUsersDtoFromJSONTyped,
    OrganisationUsersDtoToJSON,
} from './OrganisationUsersDto';

/**
 * 
 * @export
 * @interface OrganisationUserResponse
 */
export interface OrganisationUserResponse {
    /**
     * 
     * @type {boolean}
     * @memberof OrganisationUserResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrganisationUserResponse
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof OrganisationUserResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<OrganisationUsersDto>}
     * @memberof OrganisationUserResponse
     */
    users?: Array<OrganisationUsersDto> | null;
}

/**
 * Check if a given object implements the OrganisationUserResponse interface.
 */
export function instanceOfOrganisationUserResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganisationUserResponseFromJSON(json: any): OrganisationUserResponse {
    return OrganisationUserResponseFromJSONTyped(json, false);
}

export function OrganisationUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganisationUserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'users': !exists(json, 'users') ? undefined : (json['users'] === null ? null : (json['users'] as Array<any>).map(OrganisationUsersDtoFromJSON)),
    };
}

export function OrganisationUserResponseToJSON(value?: OrganisationUserResponse | null): any {
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
        'users': value.users === undefined ? undefined : (value.users === null ? null : (value.users as Array<any>).map(OrganisationUsersDtoToJSON)),
    };
}


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
import type { OrganisationFollowing } from './OrganisationFollowing';
import {
    OrganisationFollowingFromJSON,
    OrganisationFollowingFromJSONTyped,
    OrganisationFollowingToJSON,
} from './OrganisationFollowing';

/**
 * 
 * @export
 * @interface OrganisationFollowingResponse
 */
export interface OrganisationFollowingResponse {
    /**
     * 
     * @type {boolean}
     * @memberof OrganisationFollowingResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrganisationFollowingResponse
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof OrganisationFollowingResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<OrganisationFollowing>}
     * @memberof OrganisationFollowingResponse
     */
    followings?: Array<OrganisationFollowing> | null;
}

/**
 * Check if a given object implements the OrganisationFollowingResponse interface.
 */
export function instanceOfOrganisationFollowingResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganisationFollowingResponseFromJSON(json: any): OrganisationFollowingResponse {
    return OrganisationFollowingResponseFromJSONTyped(json, false);
}

export function OrganisationFollowingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganisationFollowingResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'followings': !exists(json, 'followings') ? undefined : (json['followings'] === null ? null : (json['followings'] as Array<any>).map(OrganisationFollowingFromJSON)),
    };
}

export function OrganisationFollowingResponseToJSON(value?: OrganisationFollowingResponse | null): any {
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
        'followings': value.followings === undefined ? undefined : (value.followings === null ? null : (value.followings as Array<any>).map(OrganisationFollowingToJSON)),
    };
}

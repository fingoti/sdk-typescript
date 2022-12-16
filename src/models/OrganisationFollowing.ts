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
 * @interface OrganisationFollowing
 */
export interface OrganisationFollowing {
    /**
     * 
     * @type {string}
     * @memberof OrganisationFollowing
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrganisationFollowing
     */
    disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrganisationFollowing
     */
    followName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OrganisationFollowing
     */
    sourceDevice?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrganisationFollowing
     */
    sourcePin?: number;
    /**
     * 
     * @type {string}
     * @memberof OrganisationFollowing
     */
    destinationDevice?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrganisationFollowing
     */
    destinationPin?: number;
    /**
     * 
     * @type {boolean}
     * @memberof OrganisationFollowing
     */
    mirror?: boolean;
}

/**
 * Check if a given object implements the OrganisationFollowing interface.
 */
export function instanceOfOrganisationFollowing(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganisationFollowingFromJSON(json: any): OrganisationFollowing {
    return OrganisationFollowingFromJSONTyped(json, false);
}

export function OrganisationFollowingFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganisationFollowing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'followName': !exists(json, 'followName') ? undefined : json['followName'],
        'sourceDevice': !exists(json, 'sourceDevice') ? undefined : json['sourceDevice'],
        'sourcePin': !exists(json, 'sourcePin') ? undefined : json['sourcePin'],
        'destinationDevice': !exists(json, 'destinationDevice') ? undefined : json['destinationDevice'],
        'destinationPin': !exists(json, 'destinationPin') ? undefined : json['destinationPin'],
        'mirror': !exists(json, 'mirror') ? undefined : json['mirror'],
    };
}

export function OrganisationFollowingToJSON(value?: OrganisationFollowing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'disabled': value.disabled,
        'followName': value.followName,
        'sourceDevice': value.sourceDevice,
        'sourcePin': value.sourcePin,
        'destinationDevice': value.destinationDevice,
        'destinationPin': value.destinationPin,
        'mirror': value.mirror,
    };
}

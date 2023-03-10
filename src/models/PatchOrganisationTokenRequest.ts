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
 * @interface PatchOrganisationTokenRequest
 */
export interface PatchOrganisationTokenRequest {
    /**
     * 
     * @type {boolean}
     * @memberof PatchOrganisationTokenRequest
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PatchOrganisationTokenRequest
     */
    tokenName?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchOrganisationTokenRequest
     */
    expiry?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PatchOrganisationTokenRequest
     */
    roleId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatchOrganisationTokenRequest
     */
    assignedUsers?: Array<string> | null;
}

/**
 * Check if a given object implements the PatchOrganisationTokenRequest interface.
 */
export function instanceOfPatchOrganisationTokenRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchOrganisationTokenRequestFromJSON(json: any): PatchOrganisationTokenRequest {
    return PatchOrganisationTokenRequestFromJSONTyped(json, false);
}

export function PatchOrganisationTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchOrganisationTokenRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'tokenName': !exists(json, 'tokenName') ? undefined : json['tokenName'],
        'expiry': !exists(json, 'expiry') ? undefined : (json['expiry'] === null ? null : new Date(json['expiry'])),
        'roleId': !exists(json, 'roleId') ? undefined : json['roleId'],
        'assignedUsers': !exists(json, 'assignedUsers') ? undefined : json['assignedUsers'],
    };
}

export function PatchOrganisationTokenRequestToJSON(value?: PatchOrganisationTokenRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'disabled': value.disabled,
        'tokenName': value.tokenName,
        'expiry': value.expiry === undefined ? undefined : (value.expiry === null ? null : value.expiry.toISOString()),
        'roleId': value.roleId,
        'assignedUsers': value.assignedUsers,
    };
}


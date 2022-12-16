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
 * @interface PatchUserTokenRequest
 */
export interface PatchUserTokenRequest {
    /**
     * 
     * @type {boolean}
     * @memberof PatchUserTokenRequest
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PatchUserTokenRequest
     */
    tokenName?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchUserTokenRequest
     */
    expiry?: Date | null;
}

/**
 * Check if a given object implements the PatchUserTokenRequest interface.
 */
export function instanceOfPatchUserTokenRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchUserTokenRequestFromJSON(json: any): PatchUserTokenRequest {
    return PatchUserTokenRequestFromJSONTyped(json, false);
}

export function PatchUserTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchUserTokenRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'tokenName': !exists(json, 'tokenName') ? undefined : json['tokenName'],
        'expiry': !exists(json, 'expiry') ? undefined : (json['expiry'] === null ? null : new Date(json['expiry'])),
    };
}

export function PatchUserTokenRequestToJSON(value?: PatchUserTokenRequest | null): any {
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
    };
}

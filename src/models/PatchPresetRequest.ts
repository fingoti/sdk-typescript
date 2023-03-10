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
 * @interface PatchPresetRequest
 */
export interface PatchPresetRequest {
    /**
     * 
     * @type {boolean}
     * @memberof PatchPresetRequest
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PatchPresetRequest
     */
    presetName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchPresetRequest
     */
    ssid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchPresetRequest
     */
    password?: string | null;
}

/**
 * Check if a given object implements the PatchPresetRequest interface.
 */
export function instanceOfPatchPresetRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchPresetRequestFromJSON(json: any): PatchPresetRequest {
    return PatchPresetRequestFromJSONTyped(json, false);
}

export function PatchPresetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchPresetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'presetName': !exists(json, 'presetName') ? undefined : json['presetName'],
        'ssid': !exists(json, 'ssid') ? undefined : json['ssid'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function PatchPresetRequestToJSON(value?: PatchPresetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'disabled': value.disabled,
        'presetName': value.presetName,
        'ssid': value.ssid,
        'password': value.password,
    };
}


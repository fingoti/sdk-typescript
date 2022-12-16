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
 * @interface AddPresetRequest
 */
export interface AddPresetRequest {
    /**
     * 
     * @type {string}
     * @memberof AddPresetRequest
     */
    presetName: string;
    /**
     * 
     * @type {boolean}
     * @memberof AddPresetRequest
     */
    disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AddPresetRequest
     */
    ssid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddPresetRequest
     */
    password?: string | null;
}

/**
 * Check if a given object implements the AddPresetRequest interface.
 */
export function instanceOfAddPresetRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "presetName" in value;

    return isInstance;
}

export function AddPresetRequestFromJSON(json: any): AddPresetRequest {
    return AddPresetRequestFromJSONTyped(json, false);
}

export function AddPresetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddPresetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'presetName': json['presetName'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'ssid': !exists(json, 'ssid') ? undefined : json['ssid'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function AddPresetRequestToJSON(value?: AddPresetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'presetName': value.presetName,
        'disabled': value.disabled,
        'ssid': value.ssid,
        'password': value.password,
    };
}


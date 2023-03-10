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
 * @interface WifiDetect
 */
export interface WifiDetect {
    /**
     * 
     * @type {string}
     * @memberof WifiDetect
     */
    ssid?: string | null;
    /**
     * 
     * @type {number}
     * @memberof WifiDetect
     */
    signal?: number;
}

/**
 * Check if a given object implements the WifiDetect interface.
 */
export function instanceOfWifiDetect(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WifiDetectFromJSON(json: any): WifiDetect {
    return WifiDetectFromJSONTyped(json, false);
}

export function WifiDetectFromJSONTyped(json: any, ignoreDiscriminator: boolean): WifiDetect {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ssid': !exists(json, 'ssid') ? undefined : json['ssid'],
        'signal': !exists(json, 'signal') ? undefined : json['signal'],
    };
}

export function WifiDetectToJSON(value?: WifiDetect | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ssid': value.ssid,
        'signal': value.signal,
    };
}


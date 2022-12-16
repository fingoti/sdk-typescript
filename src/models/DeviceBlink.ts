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
 * @interface DeviceBlink
 */
export interface DeviceBlink {
    /**
     * 
     * @type {number}
     * @memberof DeviceBlink
     */
    state?: number;
}

/**
 * Check if a given object implements the DeviceBlink interface.
 */
export function instanceOfDeviceBlink(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeviceBlinkFromJSON(json: any): DeviceBlink {
    return DeviceBlinkFromJSONTyped(json, false);
}

export function DeviceBlinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceBlink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function DeviceBlinkToJSON(value?: DeviceBlink | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': value.state,
    };
}

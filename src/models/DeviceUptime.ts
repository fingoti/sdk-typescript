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
 * @interface DeviceUptime
 */
export interface DeviceUptime {
    /**
     * 
     * @type {Date}
     * @memberof DeviceUptime
     */
    boot?: Date | null;
}

/**
 * Check if a given object implements the DeviceUptime interface.
 */
export function instanceOfDeviceUptime(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeviceUptimeFromJSON(json: any): DeviceUptime {
    return DeviceUptimeFromJSONTyped(json, false);
}

export function DeviceUptimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceUptime {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'boot': !exists(json, 'boot') ? undefined : (json['boot'] === null ? null : new Date(json['boot'])),
    };
}

export function DeviceUptimeToJSON(value?: DeviceUptime | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'boot': value.boot === undefined ? undefined : (value.boot === null ? null : value.boot.toISOString()),
    };
}


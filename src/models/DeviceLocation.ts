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
 * @interface DeviceLocation
 */
export interface DeviceLocation {
    /**
     * 
     * @type {string}
     * @memberof DeviceLocation
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceLocation
     */
    country?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceLocation
     */
    countryCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DeviceLocation
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof DeviceLocation
     */
    longitude?: number;
}

/**
 * Check if a given object implements the DeviceLocation interface.
 */
export function instanceOfDeviceLocation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeviceLocationFromJSON(json: any): DeviceLocation {
    return DeviceLocationFromJSONTyped(json, false);
}

export function DeviceLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceLocation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'city': !exists(json, 'city') ? undefined : json['city'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
    };
}

export function DeviceLocationToJSON(value?: DeviceLocation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'city': value.city,
        'country': value.country,
        'countryCode': value.countryCode,
        'latitude': value.latitude,
        'longitude': value.longitude,
    };
}


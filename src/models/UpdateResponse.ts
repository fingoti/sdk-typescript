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
 * @interface UpdateResponse
 */
export interface UpdateResponse {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateResponse
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateResponse
     */
    successfulDevices?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateResponse
     */
    failedDevices?: Array<string> | null;
}

/**
 * Check if a given object implements the UpdateResponse interface.
 */
export function instanceOfUpdateResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateResponseFromJSON(json: any): UpdateResponse {
    return UpdateResponseFromJSONTyped(json, false);
}

export function UpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'successfulDevices': !exists(json, 'successfulDevices') ? undefined : json['successfulDevices'],
        'failedDevices': !exists(json, 'failedDevices') ? undefined : json['failedDevices'],
    };
}

export function UpdateResponseToJSON(value?: UpdateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'message': value.message,
        'successfulDevices': value.successfulDevices,
        'failedDevices': value.failedDevices,
    };
}

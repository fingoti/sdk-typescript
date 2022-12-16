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
 * @interface Default
 */
export interface Default {
    /**
     * 
     * @type {boolean}
     * @memberof Default
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Default
     */
    message?: string | null;
}

/**
 * Check if a given object implements the Default interface.
 */
export function instanceOfDefault(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DefaultFromJSON(json: any): Default {
    return DefaultFromJSONTyped(json, false);
}

export function DefaultFromJSONTyped(json: any, ignoreDiscriminator: boolean): Default {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function DefaultToJSON(value?: Default | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'message': value.message,
    };
}

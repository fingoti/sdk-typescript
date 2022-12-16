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
 * @interface UartSetup
 */
export interface UartSetup {
    /**
     * 
     * @type {number}
     * @memberof UartSetup
     */
    baudrate?: number;
    /**
     * 
     * @type {number}
     * @memberof UartSetup
     */
    databits?: number;
    /**
     * 
     * @type {number}
     * @memberof UartSetup
     */
    parity?: number;
    /**
     * 
     * @type {number}
     * @memberof UartSetup
     */
    stopbits?: number;
}

/**
 * Check if a given object implements the UartSetup interface.
 */
export function instanceOfUartSetup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UartSetupFromJSON(json: any): UartSetup {
    return UartSetupFromJSONTyped(json, false);
}

export function UartSetupFromJSONTyped(json: any, ignoreDiscriminator: boolean): UartSetup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baudrate': !exists(json, 'baudrate') ? undefined : json['baudrate'],
        'databits': !exists(json, 'databits') ? undefined : json['databits'],
        'parity': !exists(json, 'parity') ? undefined : json['parity'],
        'stopbits': !exists(json, 'stopbits') ? undefined : json['stopbits'],
    };
}

export function UartSetupToJSON(value?: UartSetup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'baudrate': value.baudrate,
        'databits': value.databits,
        'parity': value.parity,
        'stopbits': value.stopbits,
    };
}


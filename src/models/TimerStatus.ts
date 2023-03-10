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
 * @interface TimerStatus
 */
export interface TimerStatus {
    /**
     * 
     * @type {boolean}
     * @memberof TimerStatus
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TimerStatus
     */
    repeat?: boolean;
}

/**
 * Check if a given object implements the TimerStatus interface.
 */
export function instanceOfTimerStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TimerStatusFromJSON(json: any): TimerStatus {
    return TimerStatusFromJSONTyped(json, false);
}

export function TimerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimerStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'repeat': !exists(json, 'repeat') ? undefined : json['repeat'],
    };
}

export function TimerStatusToJSON(value?: TimerStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'repeat': value.repeat,
    };
}


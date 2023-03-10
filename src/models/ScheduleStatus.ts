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
 * @interface ScheduleStatus
 */
export interface ScheduleStatus {
    /**
     * 
     * @type {boolean}
     * @memberof ScheduleStatus
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the ScheduleStatus interface.
 */
export function instanceOfScheduleStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScheduleStatusFromJSON(json: any): ScheduleStatus {
    return ScheduleStatusFromJSONTyped(json, false);
}

export function ScheduleStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function ScheduleStatusToJSON(value?: ScheduleStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
    };
}


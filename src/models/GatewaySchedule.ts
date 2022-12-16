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
import type { ScheduleSetup } from './ScheduleSetup';
import {
    ScheduleSetupFromJSON,
    ScheduleSetupFromJSONTyped,
    ScheduleSetupToJSON,
} from './ScheduleSetup';

/**
 * 
 * @export
 * @interface GatewaySchedule
 */
export interface GatewaySchedule {
    /**
     * 
     * @type {Array<ScheduleSetup>}
     * @memberof GatewaySchedule
     */
    setup?: Array<ScheduleSetup> | null;
}

/**
 * Check if a given object implements the GatewaySchedule interface.
 */
export function instanceOfGatewaySchedule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayScheduleFromJSON(json: any): GatewaySchedule {
    return GatewayScheduleFromJSONTyped(json, false);
}

export function GatewayScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewaySchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'setup': !exists(json, 'setup') ? undefined : (json['setup'] === null ? null : (json['setup'] as Array<any>).map(ScheduleSetupFromJSON)),
    };
}

export function GatewayScheduleToJSON(value?: GatewaySchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'setup': value.setup === undefined ? undefined : (value.setup === null ? null : (value.setup as Array<any>).map(ScheduleSetupToJSON)),
    };
}


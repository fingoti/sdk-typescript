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
import type { RequestOperation } from './RequestOperation';
import {
    RequestOperationFromJSON,
    RequestOperationFromJSONTyped,
    RequestOperationToJSON,
} from './RequestOperation';

/**
 * 
 * @export
 * @interface TimerRequest
 */
export interface TimerRequest {
    /**
     * 
     * @type {string}
     * @memberof TimerRequest
     */
    property?: string | null;
    /**
     * 
     * @type {RequestOperation}
     * @memberof TimerRequest
     */
    operation?: RequestOperation;
    /**
     * 
     * @type {any}
     * @memberof TimerRequest
     */
    payload?: any | null;
}

/**
 * Check if a given object implements the TimerRequest interface.
 */
export function instanceOfTimerRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TimerRequestFromJSON(json: any): TimerRequest {
    return TimerRequestFromJSONTyped(json, false);
}

export function TimerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'property': !exists(json, 'property') ? undefined : json['property'],
        'operation': !exists(json, 'operation') ? undefined : RequestOperationFromJSON(json['operation']),
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
    };
}

export function TimerRequestToJSON(value?: TimerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'property': value.property,
        'operation': RequestOperationToJSON(value.operation),
        'payload': value.payload,
    };
}


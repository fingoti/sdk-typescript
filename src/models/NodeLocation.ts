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
import type { LocationPort } from './LocationPort';
import {
    LocationPortFromJSON,
    LocationPortFromJSONTyped,
    LocationPortToJSON,
} from './LocationPort';

/**
 * 
 * @export
 * @interface NodeLocation
 */
export interface NodeLocation {
    /**
     * 
     * @type {LocationPort}
     * @memberof NodeLocation
     */
    port?: LocationPort;
    /**
     * 
     * @type {number}
     * @memberof NodeLocation
     */
    position?: number;
}

/**
 * Check if a given object implements the NodeLocation interface.
 */
export function instanceOfNodeLocation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NodeLocationFromJSON(json: any): NodeLocation {
    return NodeLocationFromJSONTyped(json, false);
}

export function NodeLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): NodeLocation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'port': !exists(json, 'port') ? undefined : LocationPortFromJSON(json['port']),
        'position': !exists(json, 'position') ? undefined : json['position'],
    };
}

export function NodeLocationToJSON(value?: NodeLocation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'port': LocationPortToJSON(value.port),
        'position': value.position,
    };
}


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
import type { VyneNode } from './VyneNode';
import {
    VyneNodeFromJSON,
    VyneNodeFromJSONTyped,
    VyneNodeToJSON,
} from './VyneNode';

/**
 * 
 * @export
 * @interface DeviceNodesResponse
 */
export interface DeviceNodesResponse {
    /**
     * 
     * @type {boolean}
     * @memberof DeviceNodesResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof DeviceNodesResponse
     */
    readonly count?: number;
    /**
     * 
     * @type {Array<VyneNode>}
     * @memberof DeviceNodesResponse
     */
    nodes?: Array<VyneNode> | null;
}

/**
 * Check if a given object implements the DeviceNodesResponse interface.
 */
export function instanceOfDeviceNodesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeviceNodesResponseFromJSON(json: any): DeviceNodesResponse {
    return DeviceNodesResponseFromJSONTyped(json, false);
}

export function DeviceNodesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceNodesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'nodes': !exists(json, 'nodes') ? undefined : (json['nodes'] === null ? null : (json['nodes'] as Array<any>).map(VyneNodeFromJSON)),
    };
}

export function DeviceNodesResponseToJSON(value?: DeviceNodesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'nodes': value.nodes === undefined ? undefined : (value.nodes === null ? null : (value.nodes as Array<any>).map(VyneNodeToJSON)),
    };
}


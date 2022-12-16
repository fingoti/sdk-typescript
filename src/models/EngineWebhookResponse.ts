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
import type { EngineWebhookDto } from './EngineWebhookDto';
import {
    EngineWebhookDtoFromJSON,
    EngineWebhookDtoFromJSONTyped,
    EngineWebhookDtoToJSON,
} from './EngineWebhookDto';

/**
 * 
 * @export
 * @interface EngineWebhookResponse
 */
export interface EngineWebhookResponse {
    /**
     * 
     * @type {boolean}
     * @memberof EngineWebhookResponse
     */
    success?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EngineWebhookResponse
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof EngineWebhookResponse
     */
    readonly count?: number;
    /**
     * 
     * @type {Array<EngineWebhookDto>}
     * @memberof EngineWebhookResponse
     */
    webhooks?: Array<EngineWebhookDto> | null;
}

/**
 * Check if a given object implements the EngineWebhookResponse interface.
 */
export function instanceOfEngineWebhookResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EngineWebhookResponseFromJSON(json: any): EngineWebhookResponse {
    return EngineWebhookResponseFromJSONTyped(json, false);
}

export function EngineWebhookResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EngineWebhookResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'webhooks': !exists(json, 'webhooks') ? undefined : (json['webhooks'] === null ? null : (json['webhooks'] as Array<any>).map(EngineWebhookDtoFromJSON)),
    };
}

export function EngineWebhookResponseToJSON(value?: EngineWebhookResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'pageNumber': value.pageNumber,
        'webhooks': value.webhooks === undefined ? undefined : (value.webhooks === null ? null : (value.webhooks as Array<any>).map(EngineWebhookDtoToJSON)),
    };
}

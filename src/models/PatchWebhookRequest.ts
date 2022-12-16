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
import type { WebhookHeaders } from './WebhookHeaders';
import {
    WebhookHeadersFromJSON,
    WebhookHeadersFromJSONTyped,
    WebhookHeadersToJSON,
} from './WebhookHeaders';

/**
 * 
 * @export
 * @interface PatchWebhookRequest
 */
export interface PatchWebhookRequest {
    /**
     * 
     * @type {boolean}
     * @memberof PatchWebhookRequest
     */
    disabled?: boolean | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatchWebhookRequest
     */
    properties?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof PatchWebhookRequest
     */
    webhookUrl?: string | null;
    /**
     * 
     * @type {Array<WebhookHeaders>}
     * @memberof PatchWebhookRequest
     */
    webhookHeaders?: Array<WebhookHeaders> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatchWebhookRequest
     */
    devices?: Array<string> | null;
}

/**
 * Check if a given object implements the PatchWebhookRequest interface.
 */
export function instanceOfPatchWebhookRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchWebhookRequestFromJSON(json: any): PatchWebhookRequest {
    return PatchWebhookRequestFromJSONTyped(json, false);
}

export function PatchWebhookRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchWebhookRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'webhookUrl': !exists(json, 'webhookUrl') ? undefined : json['webhookUrl'],
        'webhookHeaders': !exists(json, 'webhookHeaders') ? undefined : (json['webhookHeaders'] === null ? null : (json['webhookHeaders'] as Array<any>).map(WebhookHeadersFromJSON)),
        'devices': !exists(json, 'devices') ? undefined : json['devices'],
    };
}

export function PatchWebhookRequestToJSON(value?: PatchWebhookRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'disabled': value.disabled,
        'properties': value.properties,
        'webhookUrl': value.webhookUrl,
        'webhookHeaders': value.webhookHeaders === undefined ? undefined : (value.webhookHeaders === null ? null : (value.webhookHeaders as Array<any>).map(WebhookHeadersToJSON)),
        'devices': value.devices,
    };
}


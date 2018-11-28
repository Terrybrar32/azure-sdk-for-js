/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/expressRouteServiceProvidersMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ExpressRouteServiceProviders. */
export class ExpressRouteServiceProviders {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ExpressRouteServiceProviders.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the available express route service providers.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteServiceProvidersListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteServiceProvidersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>, callback?: msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>): Promise<Models.ExpressRouteServiceProvidersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ExpressRouteServiceProvidersListResponse>;
  }

  /**
   * Gets all the available express route service providers.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteServiceProvidersListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteServiceProvidersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>, callback?: msRest.ServiceCallback<Models.ExpressRouteServiceProviderListResult>): Promise<Models.ExpressRouteServiceProvidersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ExpressRouteServiceProvidersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteServiceProviders",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteServiceProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteServiceProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

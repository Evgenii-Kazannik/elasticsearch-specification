/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { RequestBase } from '@_types/Base'

/**
 * Enroll a node.
 *
 * Enroll a new node to allow it to join an existing cluster with security features enabled.
 *
 * The response contains all the necessary information for the joining node to bootstrap discovery and security related settings so that it can successfully join the cluster.
 * The response contains key and certificate material that allows the caller to generate valid signed certificates for the HTTP layer of all nodes in the cluster.
 * @rest_spec_name security.enroll_node
 * @availability stack since=8.0.0 stability=stable
 * @doc_id security-api-node-enrollment
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/enroll/node'
      methods: ['GET']
    }
  ]
}

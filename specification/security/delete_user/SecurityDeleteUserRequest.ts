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
import { Refresh, Username } from '@_types/common'

/**
 * Delete users.
 *
 * Delete users from the native realm.
 * @rest_spec_name security.delete_user
 * @availability stack stability=stable
 * @cluster_privileges manage_security
 * @doc_id security-api-delete-user
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/user/{username}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * An identifier for the user.
     */
    username: Username
  }
  query_parameters: {
    refresh?: Refresh
  }
}

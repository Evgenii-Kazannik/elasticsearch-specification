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
import { Name } from '@_types/common'

/**
 * Delete a behavioral analytics collection.
 * The associated data stream is also deleted.
 * @rest_spec_name search_application.delete_behavioral_analytics
 * @availability stack since=8.8.0 stability=experimental
 * @availability serverless stability=experimental visibility=public
 * @doc_tag analytics
 * @doc_id delete-analytics-collection
 * @deprecated 9.0.0
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_application/analytics/{name}'
      methods: ['DELETE']
    }
  ]
  path_parts: {
    /**
     * The name of the analytics collection to be deleted
     */
    name: Name
  }
}

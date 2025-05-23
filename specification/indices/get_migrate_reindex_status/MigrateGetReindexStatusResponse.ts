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

import { integer, long } from '@_types/Numeric'
import { DateTime, EpochTime, UnitMillis } from '@_types/Time'

export class Response {
  body: {
    start_time?: DateTime
    start_time_millis: EpochTime<UnitMillis>
    complete: boolean
    total_indices_in_data_stream: integer
    total_indices_requiring_upgrade: integer
    successes: integer
    in_progress: Array<StatusInProgress>
    pending: integer
    errors: Array<StatusError>
    exception?: string
  }
}

export class StatusInProgress {
  index: string
  total_doc_count: long
  reindexed_doc_count: long
}

export class StatusError {
  index: string
  message: string
}

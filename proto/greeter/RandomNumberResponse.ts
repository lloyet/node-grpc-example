// Original file: proto/greeter.proto

import type { Long } from '@grpc/proto-loader';

export interface RandomNumberResponse {
  'message'?: (number | string | Long);
}

export interface RandomNumberResponse__Output {
  'message'?: (Long);
}

// Original file: proto/greeter.proto

import type { Long } from "@grpc/proto-loader";

export interface RandomNumberRequest {
	size?: number | string | Long;
}

export interface RandomNumberRequest__Output {
	size?: Long;
}

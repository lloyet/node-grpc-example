// Original file: proto/greeter.proto

import type { Long } from "@grpc/proto-loader";

export interface RandomNumberReply {
	message?: number | string | Long;
}

export interface RandomNumberReply__Output {
	message?: Long;
}

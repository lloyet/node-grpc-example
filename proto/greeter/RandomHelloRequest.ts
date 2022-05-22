// Original file: proto/greeter.proto

import type { Long } from "@grpc/proto-loader";

export interface RandomHelloRequest {
	size?: number | string | Long;
}

export interface RandomHelloRequest__Output {
	size?: Long;
}

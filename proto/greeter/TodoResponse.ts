// Original file: proto/greeter.proto

import type {
	TodoRequest as _greeter_TodoRequest,
	TodoRequest__Output as _greeter_TodoRequest__Output
} from "../greeter/TodoRequest";

export interface TodoResponse {
	todos?: _greeter_TodoRequest[];
}

export interface TodoResponse__Output {
	todos?: _greeter_TodoRequest__Output[];
}

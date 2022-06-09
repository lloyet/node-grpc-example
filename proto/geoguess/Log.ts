// Original file: proto/geoguess.proto

import type {
	Point as _geoguess_Point,
	Point__Output as _geoguess_Point__Output
} from "../geoguess/Point";
import type {
	Capital as _geoguess_Capital,
	Capital__Output as _geoguess_Capital__Output
} from "../geoguess/Capital";

export interface Log {
	point?: _geoguess_Point | null;
	capitals?: _geoguess_Capital[];
}

export interface Log__Output {
	point?: _geoguess_Point__Output;
	capitals?: _geoguess_Capital__Output[];
}

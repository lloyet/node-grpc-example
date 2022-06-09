// Original file: proto/geoguess.proto

export interface Capital {
	name?: string;
	country?: string;
	lat?: number | string;
	long?: number | string;
}

export interface Capital__Output {
	name?: string;
	country?: string;
	lat?: number;
	long?: number;
}

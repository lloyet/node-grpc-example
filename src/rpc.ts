import * as grpc from "@grpc/grpc-js";

import type { Point__Output } from "$proto/geoguess/Point";
import type { Capital } from "$proto/geoguess/Capital";

import db from "./db";

const getCapitalByPoint = (lat: number, long: number) => {
	return db.find((capital) => capital.lat === lat && capital.long === long);
};

const getListCapitalByPoint = (lat: number, long: number, radius: number) => {
	return db.filter((capital) => !(lat * lat + long * long - radius * radius > 0));
};

export const getCapital = (
	call: grpc.ServerUnaryCall<Point__Output, Capital>,
	callback: grpc.sendUnaryData<Capital>
) => {
	const { lat = 0, long = 0 } = call.request;

	const capitalFound = getCapitalByPoint(lat, long);
	console.log(lat, long, capitalFound);

	callback(null, capitalFound);
};

export const guessCapital = (callback: grpc.ServerWritableStream<Point__Output, Capital>) => {
	const { lat = 0, long = 0 } = callback.request;

	const listCapital = getListCapitalByPoint(lat, long, 1);

	let count = 0;

	const interval = setInterval(() => {
		if (count < listCapital.length) {
			callback.write(listCapital[count]);
		} else {
			callback.end();
			clearInterval(interval);
		}
		count++;
	}, 500);
};

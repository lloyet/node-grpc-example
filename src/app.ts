import * as grpc from "@grpc/grpc-js";
import * as protoloader from "@grpc/proto-loader";

import type { ProtoGrpcType } from "$proto/geoguess";
import type { GeoguessHandlers } from "$proto/geoguess/Geoguess";

import { getCapital, guessCapital } from "./rpc";
import { HOST, PORT, PROTO_PATH } from "./env";

const packageDefinition = protoloader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
const geoguess = protoDescriptor.geoguess;

const app = new grpc.Server();

app.addService(geoguess.Geoguess.service, {
	getCapital,
	guessCapital
} as GeoguessHandlers);

const start = () =>
	app.bindAsync(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure(), (err) => {
		if (err) {
			console.error(err);
			process.exit(-1);
			return;
		}

		app.start();
		console.log(`Listening on ${HOST}:${PORT}`);
	});

export default {
	start
};

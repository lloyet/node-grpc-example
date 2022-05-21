import * as grpc from "@grpc/grpc-js";
import * as protoloader from "@grpc/proto-loader";

import type { ProtoGrpcType } from "$proto/greeter";
import type { GreeterHandlers } from "$proto/greeter/Greeter";
import type { TodoRequest } from "$proto/greeter/TodoRequest";
import type { TodoResponse } from "$proto/greeter/TodoResponse";

import { HOST, PORT, PROTO_PATH } from "./env";

const packageDefinition = protoloader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true
});

const greeterPackage = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
const greeterApp = greeterPackage.greeter;

const todoList: TodoResponse = { todos: [] };

const app = new grpc.Server();

app.addService(greeterApp.Greeter.service, {
	SayHello: (req, res) => {
		const { name } = req.request;
		console.log(name);

		res(null, { message: "hello world" });
	},
	RandomNumber: (req) => {
		const { size = 0 } = req.request;
		console.log(size);

		let count = 0;
		const interval = setInterval(() => {
			if (count >= size) {
				clearInterval(interval);
				req.end();
			}

			req.write({
				message: Math.random() * (size as number)
			});
			count++;
		}, 500);
	},
	TodoList: (req, res) => {
		req
			.on("data", (chunk: TodoRequest) => {
				const { status, todos } = chunk;
				console.log(status, todos);

				todoList.todos?.push(chunk);
			})
			.on("end", () => {
				res(null, { todos: todoList.todos });
			});
	}
} as GreeterHandlers);

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

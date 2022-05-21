import dotenv from "dotenv";

dotenv.config();

export const {
	HOST = "localhost",
	PORT = "3000",
	PROTO_PATH = "./proto/example.proto"
} = process.env;

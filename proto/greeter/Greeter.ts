// Original file: proto/greeter.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HelloRequest as _greeter_HelloRequest, HelloRequest__Output as _greeter_HelloRequest__Output } from '../greeter/HelloRequest';
import type { HelloResponse as _greeter_HelloResponse, HelloResponse__Output as _greeter_HelloResponse__Output } from '../greeter/HelloResponse';
import type { RandomNumberRequest as _greeter_RandomNumberRequest, RandomNumberRequest__Output as _greeter_RandomNumberRequest__Output } from '../greeter/RandomNumberRequest';
import type { RandomNumberResponse as _greeter_RandomNumberResponse, RandomNumberResponse__Output as _greeter_RandomNumberResponse__Output } from '../greeter/RandomNumberResponse';
import type { TodoRequest as _greeter_TodoRequest, TodoRequest__Output as _greeter_TodoRequest__Output } from '../greeter/TodoRequest';
import type { TodoResponse as _greeter_TodoResponse, TodoResponse__Output as _greeter_TodoResponse__Output } from '../greeter/TodoResponse';

export interface GreeterClient extends grpc.Client {
  ChatHello(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_greeter_HelloRequest, _greeter_HelloResponse__Output>;
  ChatHello(options?: grpc.CallOptions): grpc.ClientDuplexStream<_greeter_HelloRequest, _greeter_HelloResponse__Output>;
  chatHello(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_greeter_HelloRequest, _greeter_HelloResponse__Output>;
  chatHello(options?: grpc.CallOptions): grpc.ClientDuplexStream<_greeter_HelloRequest, _greeter_HelloResponse__Output>;
  
  RandomNumber(argument: _greeter_RandomNumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_greeter_RandomNumberResponse__Output>;
  RandomNumber(argument: _greeter_RandomNumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_greeter_RandomNumberResponse__Output>;
  randomNumber(argument: _greeter_RandomNumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_greeter_RandomNumberResponse__Output>;
  randomNumber(argument: _greeter_RandomNumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_greeter_RandomNumberResponse__Output>;
  
  SayHello(argument: _greeter_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_HelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _greeter_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_greeter_HelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _greeter_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_HelloResponse__Output>): grpc.ClientUnaryCall;
  SayHello(argument: _greeter_HelloRequest, callback: grpc.requestCallback<_greeter_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _greeter_HelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _greeter_HelloRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_greeter_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _greeter_HelloRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_HelloResponse__Output>): grpc.ClientUnaryCall;
  sayHello(argument: _greeter_HelloRequest, callback: grpc.requestCallback<_greeter_HelloResponse__Output>): grpc.ClientUnaryCall;
  
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_TodoResponse__Output>): grpc.ClientWritableStream<_greeter_TodoRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_greeter_TodoResponse__Output>): grpc.ClientWritableStream<_greeter_TodoRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_TodoResponse__Output>): grpc.ClientWritableStream<_greeter_TodoRequest>;
  TodoList(callback: grpc.requestCallback<_greeter_TodoResponse__Output>): grpc.ClientWritableStream<_greeter_TodoRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_TodoResponse__Output>): grpc.ClientWritableStream<_greeter_TodoRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_greeter_TodoResponse__Output>): grpc.ClientWritableStream<_greeter_TodoRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_greeter_TodoResponse__Output>): grpc.ClientWritableStream<_greeter_TodoRequest>;
  todoList(callback: grpc.requestCallback<_greeter_TodoResponse__Output>): grpc.ClientWritableStream<_greeter_TodoRequest>;
  
}

export interface GreeterHandlers extends grpc.UntypedServiceImplementation {
  ChatHello: grpc.handleBidiStreamingCall<_greeter_HelloRequest__Output, _greeter_HelloResponse>;
  
  RandomNumber: grpc.handleServerStreamingCall<_greeter_RandomNumberRequest__Output, _greeter_RandomNumberResponse>;
  
  SayHello: grpc.handleUnaryCall<_greeter_HelloRequest__Output, _greeter_HelloResponse>;
  
  TodoList: grpc.handleClientStreamingCall<_greeter_TodoRequest__Output, _greeter_TodoResponse>;
  
}

export interface GreeterDefinition extends grpc.ServiceDefinition {
  ChatHello: MethodDefinition<_greeter_HelloRequest, _greeter_HelloResponse, _greeter_HelloRequest__Output, _greeter_HelloResponse__Output>
  RandomNumber: MethodDefinition<_greeter_RandomNumberRequest, _greeter_RandomNumberResponse, _greeter_RandomNumberRequest__Output, _greeter_RandomNumberResponse__Output>
  SayHello: MethodDefinition<_greeter_HelloRequest, _greeter_HelloResponse, _greeter_HelloRequest__Output, _greeter_HelloResponse__Output>
  TodoList: MethodDefinition<_greeter_TodoRequest, _greeter_TodoResponse, _greeter_TodoRequest__Output, _greeter_TodoResponse__Output>
}

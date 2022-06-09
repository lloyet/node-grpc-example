// Original file: proto/geoguess.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Capital as _geoguess_Capital, Capital__Output as _geoguess_Capital__Output } from '../geoguess/Capital';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { Log as _geoguess_Log, Log__Output as _geoguess_Log__Output } from '../geoguess/Log';
import type { Point as _geoguess_Point, Point__Output as _geoguess_Point__Output } from '../geoguess/Point';

export interface GeoguessClient extends grpc.Client {
  createListCapital(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_geoguess_Capital>;
  createListCapital(metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_geoguess_Capital>;
  createListCapital(options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_geoguess_Capital>;
  createListCapital(callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_geoguess_Capital>;
  createListCapital(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_geoguess_Capital>;
  createListCapital(metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_geoguess_Capital>;
  createListCapital(options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_geoguess_Capital>;
  createListCapital(callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientWritableStream<_geoguess_Capital>;
  
  getCapital(argument: _geoguess_Point, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geoguess_Capital__Output>): grpc.ClientUnaryCall;
  getCapital(argument: _geoguess_Point, metadata: grpc.Metadata, callback: grpc.requestCallback<_geoguess_Capital__Output>): grpc.ClientUnaryCall;
  getCapital(argument: _geoguess_Point, options: grpc.CallOptions, callback: grpc.requestCallback<_geoguess_Capital__Output>): grpc.ClientUnaryCall;
  getCapital(argument: _geoguess_Point, callback: grpc.requestCallback<_geoguess_Capital__Output>): grpc.ClientUnaryCall;
  getCapital(argument: _geoguess_Point, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geoguess_Capital__Output>): grpc.ClientUnaryCall;
  getCapital(argument: _geoguess_Point, metadata: grpc.Metadata, callback: grpc.requestCallback<_geoguess_Capital__Output>): grpc.ClientUnaryCall;
  getCapital(argument: _geoguess_Point, options: grpc.CallOptions, callback: grpc.requestCallback<_geoguess_Capital__Output>): grpc.ClientUnaryCall;
  getCapital(argument: _geoguess_Point, callback: grpc.requestCallback<_geoguess_Capital__Output>): grpc.ClientUnaryCall;
  
  guessCapital(argument: _geoguess_Point, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_geoguess_Capital__Output>;
  guessCapital(argument: _geoguess_Point, options?: grpc.CallOptions): grpc.ClientReadableStream<_geoguess_Capital__Output>;
  guessCapital(argument: _geoguess_Point, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_geoguess_Capital__Output>;
  guessCapital(argument: _geoguess_Point, options?: grpc.CallOptions): grpc.ClientReadableStream<_geoguess_Capital__Output>;
  
  logGuess(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_geoguess_Point, _geoguess_Log__Output>;
  logGuess(options?: grpc.CallOptions): grpc.ClientDuplexStream<_geoguess_Point, _geoguess_Log__Output>;
  logGuess(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_geoguess_Point, _geoguess_Log__Output>;
  logGuess(options?: grpc.CallOptions): grpc.ClientDuplexStream<_geoguess_Point, _geoguess_Log__Output>;
  
}

export interface GeoguessHandlers extends grpc.UntypedServiceImplementation {
  createListCapital: grpc.handleClientStreamingCall<_geoguess_Capital__Output, _google_protobuf_Empty>;
  
  getCapital: grpc.handleUnaryCall<_geoguess_Point__Output, _geoguess_Capital>;
  
  guessCapital: grpc.handleServerStreamingCall<_geoguess_Point__Output, _geoguess_Capital>;
  
  logGuess: grpc.handleBidiStreamingCall<_geoguess_Point__Output, _geoguess_Log>;
  
}

export interface GeoguessDefinition extends grpc.ServiceDefinition {
  createListCapital: MethodDefinition<_geoguess_Capital, _google_protobuf_Empty, _geoguess_Capital__Output, _google_protobuf_Empty__Output>
  getCapital: MethodDefinition<_geoguess_Point, _geoguess_Capital, _geoguess_Point__Output, _geoguess_Capital__Output>
  guessCapital: MethodDefinition<_geoguess_Point, _geoguess_Capital, _geoguess_Point__Output, _geoguess_Capital__Output>
  logGuess: MethodDefinition<_geoguess_Point, _geoguess_Log, _geoguess_Point__Output, _geoguess_Log__Output>
}

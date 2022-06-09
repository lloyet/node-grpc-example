import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GeoguessClient as _geoguess_GeoguessClient, GeoguessDefinition as _geoguess_GeoguessDefinition } from './geoguess/Geoguess';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  geoguess: {
    Capital: MessageTypeDefinition
    Geoguess: SubtypeConstructor<typeof grpc.Client, _geoguess_GeoguessClient> & { service: _geoguess_GeoguessDefinition }
    Log: MessageTypeDefinition
    Point: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
}


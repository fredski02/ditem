import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type GenercError = { 'notFound' : null };
export interface Item { 'id' : bigint, 'name' : string, 'price' : number }
export type Result = { 'ok' : Item } |
  { 'err' : GenercError };
export interface _SERVICE {
  'createItem' : ActorMethod<[string, number], undefined>,
  'getAllItems' : ActorMethod<[], Array<Item>>,
  'getSingleItem' : ActorMethod<[string], Result>,
}

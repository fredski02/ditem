import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Item { 'id' : bigint, 'name' : string, 'price' : number }
export interface _SERVICE {
  'createItem' : ActorMethod<[string, number], undefined>,
  'getAllItems' : ActorMethod<[], Array<Item>>,
}

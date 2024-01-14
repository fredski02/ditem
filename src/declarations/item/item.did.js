export const idlFactory = ({ IDL }) => {
  const Item = IDL.Record({
    'id' : IDL.Nat,
    'name' : IDL.Text,
    'price' : IDL.Float64,
  });
  return IDL.Service({
    'createItem' : IDL.Func([IDL.Text, IDL.Float64], [], []),
    'getAllItems' : IDL.Func([], [IDL.Vec(Item)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };

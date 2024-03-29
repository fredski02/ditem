export const idlFactory = ({ IDL }) => {
  const Item = IDL.Record({
    'id' : IDL.Nat,
    'name' : IDL.Text,
    'price' : IDL.Float64,
  });
  const GenercError = IDL.Variant({ 'notFound' : IDL.Null });
  const Result = IDL.Variant({ 'ok' : Item, 'err' : GenercError });
  return IDL.Service({
    'createItem' : IDL.Func([IDL.Text, IDL.Float64], [], []),
    'getAllItems' : IDL.Func([], [IDL.Vec(Item)], ['query']),
    'getSingleItem' : IDL.Func([IDL.Text], [Result], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };

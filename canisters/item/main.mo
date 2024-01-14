import Map "mo:base/HashMap";
import Text "mo:base/Text";
import List "mo:base/List";
import Option "mo:base/Option";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Error "mo:base/Error";
import Result "mo:base/Result";
actor {

    public type Item = {
        name : Text;
        id : Nat;
        price : Float
    };

    public type GenercError = { #notFound };


    private stable var nextItemId : Nat = 1;

    private var items = Map.HashMap<Text, Item>(5, Text.equal, Text.hash);

    public func createItem(name : Text, price : Float) : async () {

        let newItem : Item = {
            id = nextItemId;
            name = name;
            price = price
        };
        items.put(Nat.toText(nextItemId), newItem);
        nextItemId += 1;

    };

    public shared query func getAllItems() : async [Item] {
        return Iter.toArray<Item>(items.vals())
    };

    public query func getSingleItem(id : Text) : async Result.Result<Item, GenercError> {
        switch (items.get(id)) {
            case null { 
                #err(#notFound)
            };
            case (?item) {
                #ok(item);
            }
        }
    }

}

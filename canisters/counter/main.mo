import Func "mo:base/Func";
import Debug "mo:base/Debug";
actor {
    stable var currentValue: Nat = 0;

    public func increment(): async () {
        currentValue += 1;
    };

    public query func getValue(): async Nat {
        currentValue;
    };
    
};

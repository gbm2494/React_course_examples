class Variants{
  function guessType(v : variant) : void {
    if (typeof v == "string") {
        log "param is string and the value is: " + v as string;
    } else {
        log "param is not string";
    }
  }
}

class _Main {
    static function main(args : string[]) : void {
        //test int type
        var n : int = 5;
        log("int value : " + n);

        //test string type
        var s : string;
        s = "Gaudy";
        log("String value : " + s);

        //test array object
        var a = new Array.<string>();
        a[0] = "value1";
        a[1] = "value2";
        a[2] = "value3";
        a.forEach(function(e){
          log("Position in vector : " + e);
        });

        //test map object
        var m = new Map.<number>();
        m = {"key": 5};
        log("Map value with key : " + m["key"]);

        //test variant type
        var variant = new Variants();
        log("Sending int n as param...");
        variant.guessType(n);
        log("Sending string s as param...");
        variant.guessType(s);
        log("Sending int n as param, casting to string with expression 'as'...");
        variant.guessType(n as string);

        //test nullable type
        var s2 : Nullable.<string>;
        s2 = "Blanco";
        log(s2);
        s2 = null;
        log(s2);
    }
}

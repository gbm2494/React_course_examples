import "timer.jsx";

class _Main {
    static function main(args : string[]) : void {
        Timer.setTimeout(function() : void {
            log "Hello, world!";
        }, 1000);
    }
}

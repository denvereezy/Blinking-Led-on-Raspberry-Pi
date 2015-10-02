var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
    io: new Raspi()
});

board.on("ready", function() {
    var led = new five.Led("P1-7");
    var motion = new five.Motion("P2-11");
    
    motion.on("calibrated", function(err, ts){
        console.log("calibrated", ts);
    });
    
    motion.on("motionstart", function(err, ts){
        console.log("motionstart", ts);
        led.on();
    });
    
    motion.off("motionend", function(err, ts){
        console.log("motionend", ts);
        led.off();s
    });
});

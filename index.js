var five = require("johnny-five"),
    board, lcd;

board = new five.Board();

board.on("ready", function() {

    lcd = new five.LCD({
        // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
        // Arduino pin # 7    8   9   10  11  12
        pins: [7, 8, 9, 10, 11, 12],
        backlight: 6,
        rows: 2,
        cols: 20


        // Options:
        // bitMode: 4 or 8, defaults to 4
        // lines: number of lines, defaults to 2
        // dots: matrix dimensions, defaults to "5x8"
    });

    // Tell the LCD you will use these characters:
    lcd.useChar("check");
    lcd.useChar("heart");
    lcd.useChar("duck");

    // Line 1:
    lcd.clear();
    lcd.cursor(1, 0);

    // Line 2: I <3 johnny-five
    lcd.print("God").write(7).print("bless you ;)");
    // can now be written as:
    //lcd.print("I :heart: JavaScript");

    this.wait(9000, function() {
        lcd.clear().cursor(0, 0).print(":check: Hi :duck:");
    });

    this.repl.inject({
        lcd: lcd
    });
});
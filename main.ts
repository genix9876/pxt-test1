basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);

//% color=#008000 icon="\uf556"
namespace test{
    //% blockId=printName weight=70 blockGap=30
    //% block="Enter a string to print %name"
    export function showname(name: string) {
        basic.showString(name);
    }
}
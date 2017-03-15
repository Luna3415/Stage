/**
 * Created by KimG on 14/03/2017.
 */
export class ChessBoardConstants {

    private static blockSize: number;

    static initialize(height:number) {
        this.blockSize = height/this.NUMBER_OF_ROWS;
    }

    public static get BLOCK_SIZE():number { return this.blockSize }
    public static get NUMBER_OF_ROWS():number { return 8; }
    public static get NUMBER_OF_COLS():number { return 8; }
    public static get BLOCK_COLOUR_1():string { return "#808080"; }
    public static get BLOCK_COLOUR_2():string { return "#ffffff"; }
}


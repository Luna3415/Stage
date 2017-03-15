/**
 * Created by KimG on 14/03/2017.
 */
export class ChessPieceConstants {

    private static black_pieces: Array<HTMLImageElement>;
    private static white_pieces: Array<HTMLImageElement>;

    private static rook_img_black: HTMLImageElement = new Image();
    private static knight_img_black: HTMLImageElement = new Image();
    private static bischop_img_black: HTMLImageElement = new Image();
    private static king_img_black: HTMLImageElement = new Image();
    private static queen_img_black: HTMLImageElement = new Image();
    private static pawn_img_black: HTMLImageElement = new Image();

    private static rook_img_white: HTMLImageElement = new Image();
    private static knight_img_white: HTMLImageElement = new Image();
    private static bischop_img_white: HTMLImageElement = new Image();
    private static king_img_white: HTMLImageElement = new Image();
    private static queen_img_white: HTMLImageElement = new Image();
    private static pawn_img_white: HTMLImageElement = new Image();

    static initialize() {
        this.setupSeparatePiecesBlack();
        this.setupSeparatePiecesWhite();
        this.setupBlackPieces();
        this.setupWhitePieces();
    }

    private static setupSeparatePiecesBlack() {
        this.rook_img_black.src = '../images/black/Rook.png';
        this.knight_img_black.src = '../images/black/Knight.png';
        this.bischop_img_black.src = '../images/black/Bischop.png';
        this.king_img_black.src = '../images/black/King.png';
        this.queen_img_black.src = '../images/black/Queen.png';
        this.pawn_img_black.src =  '../images/black/Pawn.png';
    }

    private static setupSeparatePiecesWhite() {
        this.rook_img_white.src = '../images/white/Rook.png';
        this.knight_img_white.src = '../images/white/Knight.png';
        this.bischop_img_white.src = '../images/white/Bischop.png';
        this.king_img_white.src = '../images/white/King.png';
        this.queen_img_white.src = '../images/white/Queen.png';
        this.pawn_img_white.src =  '../images/white/Pawn.png';
    }

    private static setupBlackPieces() {
        this.black_pieces = [];
        this.black_pieces.push(this.ROOK_IMG_BLACK);
        this.black_pieces.push(this.KNIGHT_IMG_BLACK);
        this.black_pieces.push(this.BISCHOP_IMG_BLACK);
        this.black_pieces.push(this.KING_IMG_BLACK);
        this.black_pieces.push(this.QUEEN_IMG_BLACK);
        this.black_pieces.push(this.PAWN_IMG_BLACK);
    }

    private static setupWhitePieces() {
        this.white_pieces = [];
        this.white_pieces.push(this.ROOK_IMG_WHITE);
        this.white_pieces.push(this.KNIGHT_IMG_WHITE);
        this.white_pieces.push(this.BISCHOP_IMG_WHITE);
        this.white_pieces.push(this.KING_IMG_WHITE);
        this.white_pieces.push(this.QUEEN_IMG_WHITE);
        this.white_pieces.push(this.PAWN_IMG_WHITE);
    }

    public static get ROOK_IMG_BLACK():HTMLImageElement {
        return this.rook_img_black;
    }

    public static get KNIGHT_IMG_BLACK():HTMLImageElement {
        return this.knight_img_black;
    }

    public static get BISCHOP_IMG_BLACK():HTMLImageElement {
        return this.bischop_img_black;
    }

    public static get KING_IMG_BLACK():HTMLImageElement {
        return this.king_img_black;
    }

    public static get QUEEN_IMG_BLACK():HTMLImageElement {
        return this.queen_img_black;
    }

    public static get PAWN_IMG_BLACK():HTMLImageElement {
        return this.pawn_img_black;
    }

    public static get ROOK_IMG_WHITE():HTMLImageElement {
        return this.rook_img_white;
    }

    public static get KNIGHT_IMG_WHITE():HTMLImageElement {
        return this.knight_img_white;
    }

    public static get BISCHOP_IMG_WHITE():HTMLImageElement {
        return this.bischop_img_white;
    }

    public static get KING_IMG_WHITE():HTMLImageElement {
        return this.king_img_white;
    }

    public static get QUEEN_IMG_WHITE():HTMLImageElement {
        return this.queen_img_white;
    }

    public static get PAWN_IMG_WHITE():HTMLImageElement {
        return this.pawn_img_white;
    }

    public static get BLACK_PIECES():Array<HTMLImageElement> {
        return this.black_pieces;
    }

    public static get WHITE_PIECES():Array<HTMLImageElement> {
        return this.white_pieces;
    }
}
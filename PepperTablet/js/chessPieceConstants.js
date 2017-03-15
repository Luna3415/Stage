define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by KimG on 14/03/2017.
     */
    var ChessPieceConstants = (function () {
        function ChessPieceConstants() {
        }
        ChessPieceConstants.initialize = function () {
            this.setupSeparatePiecesBlack();
            this.setupSeparatePiecesWhite();
            this.setupBlackPieces();
            this.setupWhitePieces();
        };
        ChessPieceConstants.setupSeparatePiecesBlack = function () {
            this.rook_img_black.src = '../images/black/Rook.png';
            this.knight_img_black.src = '../images/black/Knight.png';
            this.bischop_img_black.src = '../images/black/Bischop.png';
            this.king_img_black.src = '../images/black/King.png';
            this.queen_img_black.src = '../images/black/Queen.png';
            this.pawn_img_black.src = '../images/black/Pawn.png';
        };
        ChessPieceConstants.setupSeparatePiecesWhite = function () {
            this.rook_img_white.src = '../images/white/Rook.png';
            this.knight_img_white.src = '../images/white/Knight.png';
            this.bischop_img_white.src = '../images/white/Bischop.png';
            this.king_img_white.src = '../images/white/King.png';
            this.queen_img_white.src = '../images/white/Queen.png';
            this.pawn_img_white.src = '../images/white/Pawn.png';
        };
        ChessPieceConstants.setupBlackPieces = function () {
            this.black_pieces = [];
            this.black_pieces.push(this.ROOK_IMG_BLACK);
            this.black_pieces.push(this.KNIGHT_IMG_BLACK);
            this.black_pieces.push(this.BISCHOP_IMG_BLACK);
            this.black_pieces.push(this.KING_IMG_BLACK);
            this.black_pieces.push(this.QUEEN_IMG_BLACK);
            this.black_pieces.push(this.PAWN_IMG_BLACK);
        };
        ChessPieceConstants.setupWhitePieces = function () {
            this.white_pieces = [];
            this.white_pieces.push(this.ROOK_IMG_WHITE);
            this.white_pieces.push(this.KNIGHT_IMG_WHITE);
            this.white_pieces.push(this.BISCHOP_IMG_WHITE);
            this.white_pieces.push(this.KING_IMG_WHITE);
            this.white_pieces.push(this.QUEEN_IMG_WHITE);
            this.white_pieces.push(this.PAWN_IMG_WHITE);
        };
        Object.defineProperty(ChessPieceConstants, "ROOK_IMG_BLACK", {
            get: function () {
                return this.rook_img_black;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "KNIGHT_IMG_BLACK", {
            get: function () {
                return this.knight_img_black;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "BISCHOP_IMG_BLACK", {
            get: function () {
                return this.bischop_img_black;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "KING_IMG_BLACK", {
            get: function () {
                return this.king_img_black;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "QUEEN_IMG_BLACK", {
            get: function () {
                return this.queen_img_black;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "PAWN_IMG_BLACK", {
            get: function () {
                return this.pawn_img_black;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "ROOK_IMG_WHITE", {
            get: function () {
                return this.rook_img_white;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "KNIGHT_IMG_WHITE", {
            get: function () {
                return this.knight_img_white;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "BISCHOP_IMG_WHITE", {
            get: function () {
                return this.bischop_img_white;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "KING_IMG_WHITE", {
            get: function () {
                return this.king_img_white;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "QUEEN_IMG_WHITE", {
            get: function () {
                return this.queen_img_white;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "PAWN_IMG_WHITE", {
            get: function () {
                return this.pawn_img_white;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "BLACK_PIECES", {
            get: function () {
                return this.black_pieces;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChessPieceConstants, "WHITE_PIECES", {
            get: function () {
                return this.white_pieces;
            },
            enumerable: true,
            configurable: true
        });
        return ChessPieceConstants;
    }());
    ChessPieceConstants.rook_img_black = new Image();
    ChessPieceConstants.knight_img_black = new Image();
    ChessPieceConstants.bischop_img_black = new Image();
    ChessPieceConstants.king_img_black = new Image();
    ChessPieceConstants.queen_img_black = new Image();
    ChessPieceConstants.pawn_img_black = new Image();
    ChessPieceConstants.rook_img_white = new Image();
    ChessPieceConstants.knight_img_white = new Image();
    ChessPieceConstants.bischop_img_white = new Image();
    ChessPieceConstants.king_img_white = new Image();
    ChessPieceConstants.queen_img_white = new Image();
    ChessPieceConstants.pawn_img_white = new Image();
    exports.ChessPieceConstants = ChessPieceConstants;
});
//# sourceMappingURL=chessPieceConstants.js.map
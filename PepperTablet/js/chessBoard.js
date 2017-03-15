/**
 * Created by KimG on 14/03/2017.
 */
/**
 * Created by KimG on 13/03/2017.
 */
define(["require", "exports", "chessPieceConstants", "chessBoardConstants"], function (require, exports, chessPieceConstants_1, chessBoardConstants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function chessGameLoaded() {
        draw();
    }
    exports.chessGameLoaded = chessGameLoaded;
    function draw() {
        var board = document.getElementById("chessBoard");
        chessPieceConstants_1.ChessPieceConstants.initialize();
        chessBoardConstants_1.ChessBoardConstants.initialize(board.height);
        if (board.getContext) {
            var ctx = board.getContext('2d');
            drawBoard(ctx);
            defaultPositions(ctx);
        }
    }
    function drawBoard(ctx) {
        for (var i = 0; i < chessBoardConstants_1.ChessBoardConstants.NUMBER_OF_ROWS; i++) {
            drawRow(i, ctx);
        }
        ctx.lineWidth = 3;
        ctx.strokeRect(0, 0, chessBoardConstants_1.ChessBoardConstants.NUMBER_OF_ROWS * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.NUMBER_OF_COLS * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
    }
    function drawRow(rowIndex, ctx) {
        for (var i = 0; i < chessBoardConstants_1.ChessBoardConstants.NUMBER_OF_ROWS; i++) {
            drawBlock(rowIndex, i, ctx);
        }
    }
    function drawBlock(rowIndex, blockIndex, ctx) {
        ctx.fillStyle = getBlockColour(rowIndex, blockIndex);
        ctx.fillRect(rowIndex * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, blockIndex * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.stroke();
    }
    function getBlockColour(rowIndex, blockIndex) {
        var cStartColour;
        if (rowIndex % 2) {
            cStartColour = (blockIndex % 2 ? chessBoardConstants_1.ChessBoardConstants.BLOCK_COLOUR_1 : chessBoardConstants_1.ChessBoardConstants.BLOCK_COLOUR_2);
        }
        else {
            cStartColour = (blockIndex % 2 ? chessBoardConstants_1.ChessBoardConstants.BLOCK_COLOUR_2 : chessBoardConstants_1.ChessBoardConstants.BLOCK_COLOUR_1);
        }
        return cStartColour;
    }
    function defaultPositions(ctx) {
        var black_pieces = chessPieceConstants_1.ChessPieceConstants.BLACK_PIECES;
        var white_pieces = chessPieceConstants_1.ChessPieceConstants.WHITE_PIECES;
        if (canStartFirst(generateRandomNumber())) {
            defaultPositionsDown(ctx, white_pieces);
            defaultPositionsAbove(ctx, black_pieces);
        }
        else {
            defaultPositionsDown(ctx, black_pieces);
            defaultPositionsAbove(ctx, white_pieces);
        }
    }
    function generateRandomNumber() {
        return Math.random();
    }
    function canStartFirst(random) {
        var begin = true;
        if (random >= 0.5) {
            begin = false;
        }
        return begin;
    }
    function defaultPositionsDown(ctx, pieces) {
        ctx.drawImage(pieces[0], 0, 0, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[1], chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 0, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[2], 2 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 0, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[3], 3 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 0, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[4], 4 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 0, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[2], 5 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 0, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[1], 6 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 0, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[0], 7 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 0, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        for (var i = 0; i < chessBoardConstants_1.ChessBoardConstants.NUMBER_OF_COLS; i++) {
            ctx.drawImage(pieces[5], i * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        }
    }
    function defaultPositionsAbove(ctx, pieces) {
        ctx.drawImage(pieces[0], 0, 7 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[1], chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 7 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[2], 2 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 7 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[3], 3 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 7 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[4], 4 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 7 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[2], 5 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 7 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[1], 6 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 7 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        ctx.drawImage(pieces[0], 7 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 7 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        for (var i = 0; i < chessBoardConstants_1.ChessBoardConstants.NUMBER_OF_COLS; i++) {
            ctx.drawImage(pieces[5], i * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, 6 * chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE, chessBoardConstants_1.ChessBoardConstants.BLOCK_SIZE);
        }
    }
});
//# sourceMappingURL=chessBoard.js.map
/**
 * Created by KimG on 14/03/2017.
 */
/**
 * Created by KimG on 13/03/2017.
 */

import { ChessPieceConstants }  from "chessPieceConstants"
import { ChessBoardConstants } from "chessBoardConstants"

export function chessGameLoaded() {
    draw();
}

function draw() {
    let board:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("chessBoard");
    ChessPieceConstants.initialize();
    ChessBoardConstants.initialize(board.height);


    if (board.getContext) {
         let ctx = board.getContext('2d');

        drawBoard(ctx);
        defaultPositions(ctx);
    }
}

function drawBoard(ctx) {
    for (let i=0; i<ChessBoardConstants.NUMBER_OF_ROWS; i++) {
        drawRow(i, ctx);
    }

    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, ChessBoardConstants.NUMBER_OF_ROWS * ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.NUMBER_OF_COLS * ChessBoardConstants.BLOCK_SIZE);
}

function drawRow(rowIndex, ctx) {
    for (let i=0; i<ChessBoardConstants.NUMBER_OF_ROWS; i++) {
        drawBlock(rowIndex, i, ctx);
    }
}

function drawBlock(rowIndex, blockIndex, ctx) {
    ctx.fillStyle = getBlockColour(rowIndex, blockIndex);

    ctx.fillRect(rowIndex * ChessBoardConstants.BLOCK_SIZE,
        blockIndex * ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE);

    ctx.stroke();
}

function getBlockColour(rowIndex, blockIndex) {
    let cStartColour;

    if (rowIndex % 2) {
        cStartColour = (blockIndex % 2 ? ChessBoardConstants.BLOCK_COLOUR_1 : ChessBoardConstants.BLOCK_COLOUR_2);
    } else {
        cStartColour = (blockIndex % 2 ? ChessBoardConstants.BLOCK_COLOUR_2 : ChessBoardConstants.BLOCK_COLOUR_1);
    }
    return cStartColour;
}

function defaultPositions(ctx) {
    let black_pieces = ChessPieceConstants.BLACK_PIECES;
    let white_pieces = ChessPieceConstants.WHITE_PIECES;

    if (canStartFirst(generateRandomNumber())) {
        defaultPositionsDown(ctx, white_pieces);
        defaultPositionsAbove(ctx, black_pieces);
    } else {
        defaultPositionsDown(ctx, black_pieces);
        defaultPositionsAbove(ctx, white_pieces);
    }
}

function generateRandomNumber() {
    return Math.random();
}

function canStartFirst(random:number) {
    let begin = true;

    if (random >= 0.5) {
        begin = false;
    }
    return begin;
}

function defaultPositionsDown(ctx, pieces) {
    ctx.drawImage(pieces[0], 0, 0, ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[1], ChessBoardConstants.BLOCK_SIZE, 0,
        ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[2], 2*ChessBoardConstants.BLOCK_SIZE, 0, ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[3], 3*ChessBoardConstants.BLOCK_SIZE, 0, ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[4], 4*ChessBoardConstants.BLOCK_SIZE, 0, ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[2], 5*ChessBoardConstants.BLOCK_SIZE, 0, ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[1], 6*ChessBoardConstants.BLOCK_SIZE, 0, ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[0], 7*ChessBoardConstants.BLOCK_SIZE, 0, ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE);

    for (let i=0; i<ChessBoardConstants.NUMBER_OF_COLS; i++) {
        ctx.drawImage(pieces[5], i*ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE,
            ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE);
    }
}

function defaultPositionsAbove(ctx, pieces) {
    ctx.drawImage(pieces[0], 0, 7*ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[1], ChessBoardConstants.BLOCK_SIZE, 7*ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[2], 2*ChessBoardConstants.BLOCK_SIZE, 7*ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[3], 3*ChessBoardConstants.BLOCK_SIZE, 7*ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[4], 4*ChessBoardConstants.BLOCK_SIZE, 7*ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[2], 5*ChessBoardConstants.BLOCK_SIZE, 7*ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[1], 6*ChessBoardConstants.BLOCK_SIZE, 7*ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE);
    ctx.drawImage(pieces[0], 7*ChessBoardConstants.BLOCK_SIZE, 7*ChessBoardConstants.BLOCK_SIZE,
        ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE);

    for (let i=0; i<ChessBoardConstants.NUMBER_OF_COLS; i++) {
        ctx.drawImage(pieces[5], i*ChessBoardConstants.BLOCK_SIZE, 6*ChessBoardConstants.BLOCK_SIZE,
            ChessBoardConstants.BLOCK_SIZE, ChessBoardConstants.BLOCK_SIZE);
    }
}
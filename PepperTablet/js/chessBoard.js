/**
 * Created by KimG on 13/03/2017.
 */
NUMBER_OF_ROWS = 8;
NUMBER_OF_COLS = 8;
BLOCK_COLOUR_1 = "#808080";
BLOCK_COLOUR_2 = "#ffffff";

ROOK_IMG_BLACK = new Image();
ROOK_IMG_BLACK.src = '../images/black/Rook.png';

KNIGHT_IMG_BLACK = new Image();
KNIGHT_IMG_BLACK.src = '../images/black/Knight.png';

BISCHOP_IMG_BLACK = new Image();
BISCHOP_IMG_BLACK.src = '../images/black/Bischop.png';

KING_IMG_BLACK = new Image();
KING_IMG_BLACK.src = '../images/black/King.png';

QUEEN_IMG_BLACK = new Image();
QUEEN_IMG_BLACK.src = '../images/black/Queen.png';

PAWN_IMG_BLACK = new Image();
PAWN_IMG_BLACK.src = '../images/black/Pawn.png';

ROOK_IMG_WHITE = new Image();
ROOK_IMG_WHITE.src = '../images/white/Rook.png';

KNIGHT_IMG_WHITE = new Image();
KNIGHT_IMG_WHITE.src = '../images/white/Knight.png';

BISCHOP_IMG_WHITE = new Image();
BISCHOP_IMG_WHITE.src = '../images/white/Bischop.png';

KING_IMG_WHITE = new Image();
KING_IMG_WHITE.src = '../images/white/King.png';

QUEEN_IMG_WHITE = new Image();
QUEEN_IMG_WHITE.src = '../images/white/Queen.png';

PAWN_IMG_WHITE = new Image();
PAWN_IMG_WHITE.src = '../images/white/Pawn.png';


function chessGameLoaded() {
    draw();
}

function draw() {
    var board = document.getElementById("chessBoard");

    if (board.getContext) {
        ctx = board.getContext('2d');

        BLOCK_SIZE = board.height / NUMBER_OF_ROWS;

        drawBoard();

        defaultPositions();
    }
}

function drawBoard() {
    var i = 0;
    for(i=0; i<NUMBER_OF_ROWS; i++) {
        drawRow(i);
    }

    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, NUMBER_OF_ROWS * BLOCK_SIZE, NUMBER_OF_COLS * BLOCK_SIZE);
}

function drawRow(rowIndex) {
    var i = 0;
    for (i=0; i<NUMBER_OF_ROWS; i++) {
        drawBlock(rowIndex, i);
    }
}

function drawBlock(rowIndex, blockIndex) {
    ctx.fillStyle = getBlockColour(rowIndex, blockIndex);
    ctx.fillRect(rowIndex * BLOCK_SIZE, blockIndex * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.stroke();
}

function getBlockColour(rowIndex, blockIndex) {
    var cStartColour;

    if (rowIndex % 2) {
        cStartColour = (blockIndex % 2 ? BLOCK_COLOUR_1 : BLOCK_COLOUR_2);
    } else {
        cStartColour = (blockIndex % 2 ? BLOCK_COLOUR_2 : BLOCK_COLOUR_1);
    }
    return cStartColour;
}

function defaultPositions() {
    ctx.drawImage(ROOK_IMG_BLACK, 0, 0, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(KNIGHT_IMG_BLACK, BLOCK_SIZE, 0, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(BISCHOP_IMG_BLACK, 2*BLOCK_SIZE, 0, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(QUEEN_IMG_BLACK, 3*BLOCK_SIZE, 0, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(KING_IMG_BLACK, 4*BLOCK_SIZE, 0, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(BISCHOP_IMG_BLACK, 5*BLOCK_SIZE, 0, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(KNIGHT_IMG_BLACK, 6*BLOCK_SIZE, 0, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(ROOK_IMG_BLACK, 7*BLOCK_SIZE, 0, BLOCK_SIZE, BLOCK_SIZE);

    var i = 0;
    for (i=0; i<NUMBER_OF_COLS; i++) {
        ctx.drawImage(PAWN_IMG_BLACK, i*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }

    ctx.drawImage(ROOK_IMG_WHITE, 0, 7*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(KNIGHT_IMG_WHITE, BLOCK_SIZE, 7*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(BISCHOP_IMG_WHITE, 2*BLOCK_SIZE, 7*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(QUEEN_IMG_WHITE, 3*BLOCK_SIZE, 7*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(KING_IMG_WHITE, 4*BLOCK_SIZE, 7*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(BISCHOP_IMG_WHITE, 5*BLOCK_SIZE, 7*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(KNIGHT_IMG_WHITE, 6*BLOCK_SIZE, 7*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    ctx.drawImage(ROOK_IMG_WHITE, 7*BLOCK_SIZE, 7*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);

    var i = 0;
    for (i=0; i<NUMBER_OF_COLS; i++) {
        ctx.drawImage(PAWN_IMG_WHITE, i*BLOCK_SIZE, 6*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }
}
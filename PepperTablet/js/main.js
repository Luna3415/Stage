requirejs(['./chessBoard'], function (chessBoard) {
    requirejs(['./chessPieceConstants']);
    chessBoard.chessGameLoaded();
});
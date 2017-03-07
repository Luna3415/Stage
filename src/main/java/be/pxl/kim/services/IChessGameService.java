package be.pxl.kim.services;

import be.pxl.kim.models.ChessGame;

public interface IChessGameService {
	String calculateBestMove(ChessGame game);
}

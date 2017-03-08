package be.pxl.kim.serviceImpls;

import org.springframework.stereotype.Service;

import be.pxl.kim.chessengine.Stockfish;
import be.pxl.kim.models.ChessGame;
import be.pxl.kim.services.IChessGameService;

@Service
public class ChessGameService implements IChessGameService{

	public String calculateBestMove(ChessGame game) {
		Stockfish chessEngine = new Stockfish();
		
		if (chessEngine.startEngine()) {
			System.out.println("Engine has started..");
		} else {
			System.out.println("Oops! Something went wrong..");
		}
		String move = chessEngine.getBestMoveWithDepth(game.getFen(), game.getDepth());
		return move;
	}

}

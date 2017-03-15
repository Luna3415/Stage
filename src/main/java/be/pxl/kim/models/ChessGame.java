package be.pxl.kim.models;

import org.springframework.stereotype.Component;

@Component
public class ChessGame {

	private String fen;
	private int depth;
	
	public String getFen() {
		return fen;
	}
	
	public void setFen(String fen) {
		this.fen = fen;
	}
	
	public int getDepth() {
		return depth;
	}
	
	public void setDepth(int depth) {
		this.depth = depth;
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		ChessGame other = (ChessGame) obj;
		
		if (other == null) {
			return false;
		}
		
		if (!other.fen.equals(this.fen) || other.depth != this.depth){
			return false;
		}
		return true;
	}
}

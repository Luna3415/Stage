package be.pxl.kim.models;

import org.springframework.stereotype.Component;

@Component
public class ChessGame {

	String fen;
	int waitTime;
	
	public String getFen() {
		return fen;
	}
	
	public void setFen(String fen) {
		this.fen = fen;
	}
	
	public int getWaitTime() {
		return waitTime;
	}
	
	public void setWaitTime(int waitTime) {
		this.waitTime = waitTime;
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		ChessGame other = (ChessGame) obj;
		
		if (other == null) {
			return false;
		}
		
		if (!other.fen.equals(this.fen) || other.waitTime != this.waitTime){
			return false;
		}
		return true;
	}
}

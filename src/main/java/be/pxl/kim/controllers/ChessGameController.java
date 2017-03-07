package be.pxl.kim.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import be.pxl.kim.models.ChessGame;
import be.pxl.kim.services.IChessGameService;

@RestController
@RequestMapping("/chessgame")
public class ChessGameController {

	public final static String BASEURL = "/chessgame";
	
	@Autowired
	private IChessGameService service;
	
	public ChessGameController(IChessGameService service) {
		// TODO Auto-generated constructor stub
		this.service = service;
	}
	
	@RequestMapping(value = "/bestmove", method = RequestMethod.POST, consumes= "application/json; charset=utf-8", produces = "plain/text")
	public ResponseEntity<String> getBestMove(@RequestBody ChessGame game) {
		HttpStatus status = HttpStatus.NO_CONTENT;
		
		String bestmove = service.calculateBestMove(game);
		
		return new ResponseEntity<>(bestmove, status);
	}
}

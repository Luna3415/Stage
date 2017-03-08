package be.pxl.serviceTests;

import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import be.pxl.kim.AppConfig;
import be.pxl.kim.models.ChessGame;
import be.pxl.kim.services.IChessGameService;

@RunWith(SpringRunner.class)
@SpringBootTest
@ContextConfiguration(classes= AppConfig.class)
public class ChessGameServiceTest {

	@Autowired
	public IChessGameService service;
	
	@Test
	public void testChessServiceDepth5() {
		ChessGame game = new ChessGame();
		game.setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
		game.setDepth(5);
		
		String bestmove = service.calculateBestMove(game);
		
		Assert.assertEquals(bestmove, "g1f3");
	}
	
	@Test
	public void testChessServiceDepth10() {
		ChessGame game = new ChessGame();
		game.setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
		game.setDepth(10);
		
		String bestmove = service.calculateBestMove(game);
		
		Assert.assertEquals(bestmove, "e2e4");
	}
	
	@Test
	public void testChessServiceDepth20() {
		ChessGame game = new ChessGame();
		game.setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
		game.setDepth(20);
		
		String bestmove = service.calculateBestMove(game);
		
		Assert.assertEquals(bestmove, "e2e4");
	}
	
	@Test
	public void testChessServiceDifferentFENDepth5() {
		ChessGame game = new ChessGame();
		game.setFen("r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R");
		game.setDepth(5);
		
		String bestmove = service.calculateBestMove(game);
		
		Assert.assertEquals(bestmove, "g8f6");
	}
	
	@Test
	public void testChessServiceDifferentFENDepth25() {
		ChessGame game = new ChessGame();
		game.setFen("r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R");
		game.setDepth(25);
		
		String bestmove = service.calculateBestMove(game);
		
		Assert.assertEquals(bestmove, "a7a6");
	}
}


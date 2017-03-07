package be.pxl.serviceTests;

import org.junit.Assert;
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
	public void testChessServiceWaitTime10() {
		ChessGame game = new ChessGame();
		game.setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
		game.setWaitTime(10);
		
		String bestmove = service.calculateBestMove(game);
		
		Assert.assertEquals(bestmove, "d2d4");
	}
	
	@Test
	public void testChessServiceWaitTime100() {
		ChessGame game = new ChessGame();
		game.setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
		game.setWaitTime(100);
		
		String bestmove = service.calculateBestMove(game);
		
		Assert.assertEquals(bestmove, "e2e4");
	}
}


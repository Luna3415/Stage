package be.pxl.kim.controllerTests;

import org.apache.el.parser.AstListData;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.mock.http.MockHttpOutputMessage;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.IOException;

import static java.util.Arrays.asList;
import static org.assertj.core.api.Assertions.assertThat;

import be.pxl.kim.AppConfig;
import be.pxl.kim.controllers.ChessGameController;
import be.pxl.kim.models.ChessGame;
import be.pxl.kim.services.IChessGameService;

@RunWith(SpringRunner.class)
@SpringBootTest
@ContextConfiguration(classes= AppConfig.class)
public class ChessGameControllerTest {

	private MockMvc mockMvc;
	
	private HttpMessageConverter mappingJackson2HttpMessageConverter;
	
	@Mock
	IChessGameService serviceMock;
	
	@InjectMocks
	private ChessGameController chessController;
	
	@Autowired
	void setConverters(HttpMessageConverter<?>[] converters) {
		mappingJackson2HttpMessageConverter = asList(converters)
				.stream()
				.filter(hmc -> hmc instanceof MappingJackson2HttpMessageConverter)
				.findAny()
				.get();
		
		assertThat(mappingJackson2HttpMessageConverter)
		.isNotNull()
		.describedAs("The JSON message converter must not be null");
	}
	
	@Before
	public void setUp() throws Exception {
		//chessController = new ChessGameController(serviceMock);
		mockMvc = MockMvcBuilders.standaloneSetup(chessController)
				.build();
	}
	
	@Test
	public void getBestMoveTest() throws Exception {
		ChessGame game = new ChessGame();
		game.setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
		game.setDepth(10);
		
		Mockito.when(serviceMock.calculateBestMove(game)).thenReturn("It works!");
		
		mockMvc.perform(post(ChessGameController.BASEURL+"/bestmove")
				.content(asJson(game))
				.contentType(MediaType.APPLICATION_JSON_UTF8))
				.andExpect(status().isNoContent())
				.andExpect(content().string("It works!"));
	}
	
	protected String asJson(Object o) throws IOException {
		MockHttpOutputMessage mockHttpOutputMessage = new MockHttpOutputMessage();
		this.mappingJackson2HttpMessageConverter.write(o, MediaType.APPLICATION_JSON, mockHttpOutputMessage);
		return mockHttpOutputMessage.getBodyAsString();
	}
}

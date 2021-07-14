import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {
    //injeção de dependencia
    constructor(private readonly jogaresService: JogadoresService) {

    }

    @Post()
    async criarAtualizarJogador(
        @Body() criaJogadorDto: CriarJogadorDto) {
        this.jogaresService.criarAtualizarJogador(criaJogadorDto)
    }
    
}

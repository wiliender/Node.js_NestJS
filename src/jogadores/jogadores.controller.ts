import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';

@Controller('api/v1/jogadores')
export class JogadoresController {
    //injeção de dependencia baseada no construtor
    constructor(private readonly jogaresService: JogadoresService) {

    }

    @Post()
    async criarAtualizarJogador(
        @Body() criaJogadorDto: CriarJogadorDto) {
        this.jogaresService.criarAtualizarJogador(criaJogadorDto)
    }
    
    @Get()
    async consultarJogadores(
        @Query('email') email: string): Promise<Jogador[] | Jogador> {
            if(email){
                return await this.jogaresService.consultarJogadorPeloEmail(email);
            }else{
                return await this.jogaresService.consultarTodosJogadores();
            } 
    }
}

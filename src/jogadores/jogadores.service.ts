import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JogadoresService {

    private Jogador: Jogador[] = [];

    private readonly logger = new Logger(JogadoresService.name)

    async criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void> {
        
     this.criar(criaJogadorDto);
    

    }

    private criar(criaJogadorDto: CriarJogadorDto): void{
        const { name, telephoneCell, email } = criaJogadorDto 

        const jogador: Jogador = {
            _id: uuidv4(),
            name,
            telephoneCell,
            email,
            ranking: 'A',
            posicaoRanking: 1,
            urlFotoJogador:'www.google.com.br/foto123.jpg'
        };
        this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`)
        this.Jogador.push(jogador);
    }
}

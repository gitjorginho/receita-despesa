import { IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateProductDto {
  
  @IsString({ message: 'O nome deve ser um texto válido.' })
  @IsNotEmpty({ message: 'O nome do produto é obrigatório.' })
  @Length(3, 100, { message: 'O nome deve ter entre 3 e 100 caracteres.' })
  nome!: string;
  
  @IsNotEmpty({ message: 'O preço do produto é obrigatório.' })
  preco!: number;
  
  @IsString({ message: 'A descrição deve ser um texto válido.' })
  descricao!: string;
}

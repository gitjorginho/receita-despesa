import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.produto.create({
      data: createProductDto
    })
  }

  findAll() {
    return this.prisma.produto.findMany();
  }

  findOne(id: number) {
    return this.prisma.produto.findUnique({
      where: { id }
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.produto.update({
      where: { id },
      data: updateProductDto
    }); 
  }

  remove(id: number) {
    return this.prisma.produto.delete({
      where: { id }
    });
  }
}

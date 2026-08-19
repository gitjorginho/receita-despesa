import { Controller, Get ,Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('as')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('azul')
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post('ff')
  getgave(): string {
    return 'dfsgfdsgdfgdfgfd'
  }
}

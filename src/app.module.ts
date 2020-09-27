import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToolsModule } from './features/tools/tools.module';

@Module({
  imports: [ToolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

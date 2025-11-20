import { Module } from '@nestjs/common';
import { ContextsModule } from './contexts/contexts.module';

@Module({
  imports: [ContextsModule],
})
export class AppModule {}

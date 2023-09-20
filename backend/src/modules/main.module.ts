import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { Module } from '@nestjs/common'
import { AppModule } from 'modules/app/app.module'
import { DatabaseModule } from 'modules/database/Database.module'
import { TopicsModule } from 'modules/topics'

@Module({
	imports: [
		ScheduleModule.forRoot(),
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['.development.env', '.env'],
		}),
		AppModule,
		DatabaseModule,
		TopicsModule,
	],
	providers: [],
})
export class MainModule {}

import { Module } from '@nestjs/common'
import { TopicsController } from 'infra/http/topics/topics.controller'
import { TopicsService } from 'application/topics/topics.service'
import { TopicsDtb } from 'infra/adapters/topics/dtb.adapters'
import { DatabaseModule } from 'modules/database/database.module'

@Module({
	imports: [DatabaseModule],
	providers: [
		{ provide: 'ITopicsService', useClass: TopicsService },
		{
			provide: 'ITopicsRepository',
			useClass: TopicsDtb,
		},
	],
	controllers: [TopicsController],
})
export class TopicsModule {}

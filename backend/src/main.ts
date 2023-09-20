import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { MainModule } from 'modules/main.module'
import { config } from 'aws-sdk'

async function bootstrap() {
	const app = await NestFactory.create(MainModule)
	app.enableCors({ origin: '*', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' })

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			stopAtFirstError: true,
		})
	)
	config.update({
		region: String(process.env.AWS_S3_REGION),
	})
	await app.listen(process.env.PORT || 8000)
}
bootstrap()

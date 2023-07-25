
import { Config, NestConfigModule } from "@nestify/server/util/config";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { FastJwtModule } from "nestjs-fastjwt";

import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";

@Module({
	imports: [
		FastJwtModule.registerAsync({
			imports: [NestConfigModule],
			useFactory: async (configService: ConfigService<Config, true>) => ({
				isGlobal: true,
				secret: configService.get("jwt.secret", { infer: true }),
				signOptions: {
					expiresIn: configService.get("jwt.accessExpiry", { infer: true }),
				},
			}),
			inject: [ConfigService],
		}),
	],
	controllers: [CategoryController],
	providers: [CategoryService],
})
export class CategoryModule {}

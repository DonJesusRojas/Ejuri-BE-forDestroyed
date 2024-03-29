import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory{
    @Inject(ConfigService)
    private readonly configService: ConfigService;

    public createTypeOrmOptions(): TypeOrmModuleOptions{
        return {
            type: "postgres",
            host: this.configService.get<string>("DATABASE_HOST"),
            port: this.configService.get<number>("DATABASE_PORT"),
            database: this.configService.get<string>("DATABASE_NAME"),
            username: this.configService.get<string>("DATABASE_USER"),
            password: this.configService.get<string>("DATABASE_PASSWORD"),
            entities: ['dist/**/*.entity.{ts,js}'],
            migrations: ['dist/migrations/*.{ts,js}'],
            migrationsTableName: 'typeorm_migrations',
            logger: 'file',
            synchronize: this.configService.get<boolean>("DATABASE_SYNCHRONIZE"),
        };
    }
}
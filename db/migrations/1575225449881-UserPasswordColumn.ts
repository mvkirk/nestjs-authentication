import {MigrationInterface, QueryRunner} from "typeorm";

export class UserPasswordColumn1575225449881 implements MigrationInterface {
    name = 'UserPasswordColumn1575225449881'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(50) NOT NULL", undefined);
    }

}

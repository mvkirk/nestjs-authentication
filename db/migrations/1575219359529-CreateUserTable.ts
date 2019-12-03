import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTable1575219359529 implements MigrationInterface {
    name = 'CreateUserTable1575219359529'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(50) NOT NULL, `password` varchar(50) NOT NULL, `firstname` varchar(80) NOT NULL, `lastname` varchar(80) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}

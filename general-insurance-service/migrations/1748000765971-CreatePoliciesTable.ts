import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePoliciesTable1748000765971 implements MigrationInterface {
    name = 'CreatePoliciesTable1748000765971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`policy\` (\`id\` int NOT NULL AUTO_INCREMENT, \`clientNumber\` varchar(255) NOT NULL, \`polcyNumber\` varchar(255) NOT NULL, \`expiryDate\` datetime NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`policy\``);
    }

}

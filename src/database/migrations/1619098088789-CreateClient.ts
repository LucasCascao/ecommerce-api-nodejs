import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClient1619098088789 implements MigrationInterface {

    TABLE_NAME = "client"

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.TABLE_NAME,
                columns: [
                    {
                        name: "cli_id",
                        type: "number"
                    },
                    {
                        name: "cli_name",
                        type: "varchar"
                    },
                    {
                        name: "cli_last_name",
                        type: "varchar"
                    },
                    {
                        name: "cli_birthdate",
                        type: "date"
                    },
                    {
                        name: "cli_sex",
                        type: "varchar"
                    }
                ]
            });
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.TABLE_NAME);
    }

}

import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id');
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
        })
}

export async function down(knex: Knex) {
    return knex.schema
        .dropTable("products")
        .dropTable("users");
}
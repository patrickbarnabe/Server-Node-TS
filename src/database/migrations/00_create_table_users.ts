import Knex from 'knex'

exports.up = (knex: Knex) => knex.schema
        .createTable('users',  table => {
            table.increments('id');
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
        })

exports.down = (knex: Knex) => knex.schema
        .dropTable("users")
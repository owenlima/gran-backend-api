import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'filmes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 50).notNullable()
      table.string('classificacao', 5).notNullable()
      table.string('sinopse', 2000).notNullable()
      table.string('duracao', 5).notNullable()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

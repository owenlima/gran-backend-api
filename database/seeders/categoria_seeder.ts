import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Categoria.createMany([
      { nome: 'Ação' },
      { nome: 'Aventura' },
      { nome: 'Comédia' },
      { nome: 'Drama' },
      { nome: 'Terror' },
      { nome: 'Ficção Científica' },
      { nome: 'Romance' },
      { nome: 'Animação' },
      { nome: 'Suspense' },
      { nome: 'Fantasia' },
      { nome: 'Policial' },
      { nome: 'Documentário' },
      { nome: 'Musical' },
      { nome: 'Guerra' },
      { nome: 'Faroeste' },
    ])
  }
}

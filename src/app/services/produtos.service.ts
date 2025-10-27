import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Produto {
  id: number;
  name: string;
  price: string;
  type?: 'Troca' | 'Venda';
  category: 'roupas' | 'eletronicos' | 'livros';
  rating?: number;
  condition?: string;
  image?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private produtos: Produto[] = [
    // Roupas (17 produtos)
    { id: 1, name: 'Camiseta Básica', price: 'R$ 25,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado', image: '/assets/placeholder.jpg' },
    { id: 2, name: 'Jeans Skinny', price: 'R$ 80,00', type: 'Venda', category: 'roupas', condition: 'Usado - Ótimo estado', image: '/assets/placeholder.jpg' },
    { id: 3, name: 'Vestido Floral', price: 'R$ 60,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado', image: '/assets/placeholder.jpg' },
    { id: 4, name: 'Blusa de Frio', price: 'R$ 45,00', type: 'Venda', category: 'roupas', condition: 'Novo', image: '/assets/placeholder.jpg' },
    { id: 5, name: 'Shorts Jeans', price: 'R$ 35,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado', image: '/assets/placeholder.jpg' },
    { id: 6, name: 'Camisa Social', price: 'R$ 70,00', type: 'Venda', category: 'roupas', condition: 'Usado - Ótimo estado', image: '/assets/placeholder.jpg' },
    { id: 7, name: 'Saia Midi', price: 'R$ 40,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado', image: '/assets/placeholder.jpg' },
    { id: 8, name: 'Jaqueta Jeans', price: 'R$ 90,00', type: 'Venda', category: 'roupas', condition: 'Usado - Ótimo estado', image: '/assets/placeholder.jpg' },
    { id: 9, name: 'Top Cropped', price: 'R$ 20,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado', image: '/assets/placeholder.jpg' },
    { id: 10, name: 'Calça Legging', price: 'R$ 30,00', type: 'Venda', category: 'roupas', condition: 'Novo', image: '/assets/placeholder.jpg' },
    { id: 11, name: 'Blazer Feminino', price: 'R$ 85,00', type: 'Troca', category: 'roupas', condition: 'Usado - Ótimo estado', image: '/assets/placeholder.jpg' },
    { id: 12, name: 'Regata Masculina', price: 'R$ 18,00', type: 'Venda', category: 'roupas', condition: 'Usado - Bom estado', image: '/assets/placeholder.jpg' },
    { id: 13, name: 'Vestido Longo', price: 'R$ 75,00', type: 'Troca', category: 'roupas', condition: 'Usado - Ótimo estado', image: '/assets/placeholder.jpg' },
    { id: 14, name: 'Bermuda Cargo', price: 'R$ 42,00', type: 'Venda', category: 'roupas', condition: 'Usado - Bom estado', image: '/assets/placeholder.jpg' },
    { id: 15, name: 'Cropped Tricot', price: 'R$ 38,00', type: 'Troca', category: 'roupas', condition: 'Novo', image: '/assets/placeholder.jpg' },
    { id: 16, name: 'Calça Social', price: 'R$ 65,00', type: 'Venda', category: 'roupas', condition: 'Usado - Ótimo estado', image: '/assets/placeholder.jpg' },
    { id: 17, name: 'Moletom Básico', price: 'R$ 55,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado', image: '/assets/placeholder.jpg' },

    // Eletrônicos (17 produtos)
    { id: 18, name: 'Smartphone Samsung', price: 'R$ 800,00', type: 'Venda', category: 'eletronicos' },
    { id: 19, name: 'Fone Bluetooth', price: 'R$ 120,00', type: 'Troca', category: 'eletronicos' },
    { id: 20, name: 'Notebook Dell', price: 'R$ 2500,00', type: 'Venda', category: 'eletronicos' },
    { id: 21, name: 'Tablet iPad', price: 'R$ 1800,00', type: 'Troca', category: 'eletronicos' },
    { id: 22, name: 'Smart TV 43"', price: 'R$ 1200,00', type: 'Venda', category: 'eletronicos' },
    { id: 23, name: 'Console PS5', price: 'R$ 3500,00', type: 'Troca', category: 'eletronicos' },
    { id: 24, name: 'Câmera Canon', price: 'R$ 2200,00', type: 'Venda', category: 'eletronicos' },
    { id: 25, name: 'Smartwatch', price: 'R$ 350,00', type: 'Troca', category: 'eletronicos' },
    { id: 26, name: 'Caixa de Som JBL', price: 'R$ 180,00', type: 'Venda', category: 'eletronicos' },
    { id: 27, name: 'Kindle E-reader', price: 'R$ 400,00', type: 'Troca', category: 'eletronicos' },
    { id: 28, name: 'Mouse Gamer', price: 'R$ 85,00', type: 'Venda', category: 'eletronicos' },
    { id: 29, name: 'Teclado Mecânico', price: 'R$ 250,00', type: 'Troca', category: 'eletronicos' },
    { id: 30, name: 'Monitor 24"', price: 'R$ 650,00', type: 'Venda', category: 'eletronicos' },
    { id: 31, name: 'Drone DJI', price: 'R$ 1500,00', type: 'Troca', category: 'eletronicos' },
    { id: 32, name: 'Carregador Portátil', price: 'R$ 45,00', type: 'Venda', category: 'eletronicos' },
    { id: 33, name: 'Webcam HD', price: 'R$ 120,00', type: 'Troca', category: 'eletronicos' },
    { id: 34, name: 'SSD 1TB', price: 'R$ 300,00', type: 'Venda', category: 'eletronicos' },

    // Livros (16 produtos)
    { id: 35, name: 'Dom Casmurro', price: 'R$ 15,00', type: 'Troca', category: 'livros' },
    { id: 36, name: 'O Cortiço', price: 'R$ 18,00', type: 'Venda', category: 'livros' },
    { id: 37, name: 'Harry Potter', price: 'R$ 35,00', type: 'Troca', category: 'livros' },
    { id: 38, name: 'Senhor dos Anéis', price: 'R$ 45,00', type: 'Venda', category: 'livros' },
    { id: 39, name: 'Código Limpo', price: 'R$ 80,00', type: 'Troca', category: 'livros' },
    { id: 40, name: '1984 - Orwell', price: 'R$ 25,00', type: 'Venda', category: 'livros' },
    { id: 41, name: 'O Alquimista', price: 'R$ 20,00', type: 'Troca', category: 'livros' },
    { id: 42, name: 'Sapiens', price: 'R$ 40,00', type: 'Venda', category: 'livros' },
    { id: 43, name: 'Mindset', price: 'R$ 30,00', type: 'Troca', category: 'livros' },
    { id: 44, name: 'Atomic Habits', price: 'R$ 35,00', type: 'Venda', category: 'livros' },
    { id: 45, name: 'Clean Architecture', price: 'R$ 75,00', type: 'Troca', category: 'livros' },
    { id: 46, name: 'O Pequeno Príncipe', price: 'R$ 12,00', type: 'Venda', category: 'livros' },
    { id: 47, name: 'Cem Anos de Solidão', price: 'R$ 28,00', type: 'Troca', category: 'livros' },
    { id: 48, name: 'A Revolução dos Bichos', price: 'R$ 22,00', type: 'Venda', category: 'livros' },
    { id: 49, name: 'O Nome do Vento', price: 'R$ 38,00', type: 'Troca', category: 'livros' },
    { id: 50, name: 'Neuromancer', price: 'R$ 32,00', type: 'Venda', category: 'livros' }
  ];

  private bestsellers: Produto[] = [
    { id: 2, name: 'Jeans Skinny', price: 'R$ 80,00', type: 'Venda', category: 'roupas', rating: 4.8 },
    { id: 18, name: 'Smartphone Samsung', price: 'R$ 800,00', type: 'Venda', category: 'eletronicos', rating: 4.7 },
    { id: 38, name: 'Senhor dos Anéis', price: 'R$ 45,00', type: 'Venda', category: 'livros', rating: 4.9 },
    { id: 20, name: 'Notebook Dell', price: 'R$ 2500,00', type: 'Venda', category: 'eletronicos', rating: 4.6 },
    { id: 6, name: 'Camisa Social', price: 'R$ 70,00', type: 'Venda', category: 'roupas', rating: 4.5 },
    { id: 42, name: 'Sapiens', price: 'R$ 40,00', type: 'Venda', category: 'livros', rating: 4.8 }
  ];

  private topRated: Produto[] = [
    { id: 38, name: 'Senhor dos Anéis', price: 'R$ 45,00', type: 'Venda', category: 'livros', rating: 4.9 },
    { id: 2, name: 'Jeans Skinny', price: 'R$ 80,00', type: 'Venda', category: 'roupas', rating: 4.8 },
    { id: 42, name: 'Sapiens', price: 'R$ 40,00', type: 'Venda', category: 'livros', rating: 4.8 },
    { id: 18, name: 'Smartphone Samsung', price: 'R$ 800,00', type: 'Venda', category: 'eletronicos', rating: 4.7 },
    { id: 20, name: 'Notebook Dell', price: 'R$ 2500,00', type: 'Venda', category: 'eletronicos', rating: 4.6 },
    { id: 6, name: 'Camisa Social', price: 'R$ 70,00', type: 'Venda', category: 'roupas', rating: 4.5 }
  ];

  private produtosSubject = new BehaviorSubject<Produto[]>(this.produtos);
  public produtos$ = this.produtosSubject.asObservable();

  constructor() { }

  // Obter todos os produtos
  getProdutos(): Produto[] {
    return this.produtos;
  }

  // Obter produto por ID
  getProdutoPorId(id: number): Produto | undefined {
    return this.produtos.find(produto => produto.id === id);
  }

  // Obter produtos por categoria
  getProdutosPorCategoria(category: string): Produto[] {
    if (category === 'all') {
      return this.produtos;
    }
    return this.produtos.filter(produto => produto.category === category);
  }

  // Obter produtos mais vendidos
  getBestsellers(): Produto[] {
    return this.bestsellers;
  }

  // Obter produtos melhores avaliados
  getTopRated(): Produto[] {
    return this.topRated;
  }

  // Buscar produtos
  buscarProdutos(query: string): Produto[] {
    const searchTerm = query.toLowerCase();
    return this.produtos.filter(produto => 
      produto.name.toLowerCase().includes(searchTerm) ||
      produto.category.toLowerCase().includes(searchTerm) ||
      (produto.type && produto.type.toLowerCase().includes(searchTerm))
    );
  }

  // Obter produtos similares
  getProdutosSimilares(produto: Produto): Produto[] {
    return this.produtos
      .filter(p => p.category === produto.category && p.id !== produto.id)
      .slice(0, 2);
  }

  // Adicionar novo produto
  adicionarProduto(produto: any): void {
    const novoProduto: Produto = {
      id: produto.id,
      name: produto.name,
      price: produto.price,
      category: produto.category,
      condition: produto.condition,
      image: produto.image,
      description: produto.description,
      type: produto.condition?.includes('troca') ? 'Troca' : 'Venda'
    };

    this.produtos.unshift(novoProduto); // Adicionar no início da lista
    this.produtosSubject.next([...this.produtos]);
  }
}


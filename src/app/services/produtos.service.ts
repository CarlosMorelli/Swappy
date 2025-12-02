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

    // ---------------------
    // ROUPAS
    // ---------------------
    { id: 1, name: 'Camiseta Básica', price: 'R$ 25,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=80' },

    { id: 2, name: 'Jeans Skinny', price: 'R$ 80,00', type: 'Venda', category: 'roupas', condition: 'Usado - Ótimo estado',
      image: 'https://images.unsplash.com/photo-1583002190095-9c857ae976f1?w=500&auto=format&fit=crop&q=80' },

    { id: 3, name: 'Vestido Floral', price: 'R$ 60,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado',
      image: 'https://unsplash.com/pt-br/fotografias/textil-floral-vermelho-e-branco-ZVKcrrsAAvA' },

    { id: 4, name: 'Blusa de Frio', price: 'R$ 45,00', type: 'Venda', category: 'roupas', condition: 'Novo',
      image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=500&auto=format&fit=crop&q=80' },

    { id: 5, name: 'Shorts Jeans', price: 'R$ 35,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80' },

    { id: 6, name: 'Camisa Social', price: 'R$ 70,00', type: 'Venda', category: 'roupas', condition: 'Usado - Ótimo estado',
      image: 'https://images.unsplash.com/photo-1602810319585-894cbb60338b?w=500&auto=format&fit=crop&q=80' },

    { id: 7, name: 'Saia Midi', price: 'R$ 40,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&auto=format&fit=crop&q=80' },

    { id: 8, name: 'Jaqueta Jeans', price: 'R$ 90,00', type: 'Venda', category: 'roupas', condition: 'Usado - Ótimo estado',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80' },

    { id: 9, name: 'Top Cropped', price: 'R$ 20,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=80' },

    { id: 10, name: 'Calça Legging', price: 'R$ 30,00', type: 'Venda', category: 'roupas', condition: 'Novo',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=80' },

    { id: 11, name: 'Blazer Feminino', price: 'R$ 85,00', type: 'Troca', category: 'roupas', condition: 'Usado - Ótimo estado',
      image: 'https://images.unsplash.com/photo-1520975898318-7c54b05eb7a3?w=500&auto=format&fit=crop&q=80' },

    { id: 12, name: 'Regata Masculina', price: 'R$ 18,00', type: 'Venda', category: 'roupas', condition: 'Usado - Bom estado',
      image: 'https://images.unsplash.com/photo-1520975898318-7c54b05eb7a3?w=500&auto=format&fit=crop&q=80' },

    { id: 13, name: 'Vestido Longo', price: 'R$ 75,00', type: 'Troca', category: 'roupas', condition: 'Usado - Ótimo estado',
      image: 'https://images.unsplash.com/photo-1520975898318-7c54b05eb7a3?w=500&auto=format&fit=crop&q=80' },

    { id: 14, name: 'Bermuda Cargo', price: 'R$ 42,00', type: 'Venda', category: 'roupas', condition: 'Usado - Bom estado',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80' },

    { id: 15, name: 'Cropped Tricot', price: 'R$ 38,00', type: 'Troca', category: 'roupas', condition: 'Novo',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&auto=format&fit=crop&q=80' },

    { id: 16, name: 'Calça Social', price: 'R$ 65,00', type: 'Venda', category: 'roupas', condition: 'Usado - Ótimo estado',
      image: 'https://images.unsplash.com/photo-1602810319585-894cbb60338b?w=500&auto=format&fit=crop&q=80' },

    { id: 17, name: 'Moletom Básico', price: 'R$ 55,00', type: 'Troca', category: 'roupas', condition: 'Usado - Bom estado',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&auto=format&fit=crop&q=80' },


    // ---------------------
    // ELETRÔNICOS
    // ---------------------
    { id: 18, name: 'Smartphone Samsung', price: 'R$ 800,00', type: 'Venda', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80' },

    { id: 19, name: 'Fone Bluetooth', price: 'R$ 120,00', type: 'Troca', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1585386959984-a4155229e1e0?w=500&auto=format&fit=crop&q=80' },

    { id: 20, name: 'Notebook Dell', price: 'R$ 2500,00', type: 'Venda', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80' },

    { id: 21, name: 'Tablet iPad', price: 'R$ 1800,00', type: 'Troca', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&auto=format&fit=crop&q=80' },

    { id: 22, name: 'Smart TV 43"', price: 'R$ 1200,00', type: 'Venda', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80' },

    { id: 23, name: 'Console PS5', price: 'R$ 3500,00', type: 'Troca', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1606813904194-2f72550adb29?w=500&auto=format&fit=crop&q=80' },

    { id: 24, name: 'Câmera Canon', price: 'R$ 2200,00', type: 'Venda', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=500&auto=format&fit=crop&q=80' },

    { id: 25, name: 'Smartwatch', price: 'R$ 350,00', type: 'Troca', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=80' },

    { id: 26, name: 'Caixa de Som JBL', price: 'R$ 180,00', type: 'Venda', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1585386959984-a4155229e1e0?w=500&auto=format&fit=crop&q=80' },

    { id: 27, name: 'Kindle E-reader', price: 'R$ 400,00', type: 'Troca', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1523473827532-5aebd3b1c54c?w=500&auto=format&fit=crop&q=80' },

    { id: 28, name: 'Mouse Gamer', price: 'R$ 85,00', type: 'Venda', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1615751072497-8245f906d16d?w=500&auto=format&fit=crop&q=80' },

    { id: 29, name: 'Teclado Mecânico', price: 'R$ 250,00', type: 'Troca', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1611078489935-c1c27881bb67?w=500&auto=format&fit=crop&q=80' },

    { id: 30, name: 'Monitor 24"', price: 'R$ 650,00', type: 'Venda', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1587202372775-df5c0dbc1413?w=500&auto=format&fit=crop&q=80' },

    { id: 31, name: 'Drone DJI', price: 'R$ 1500,00', type: 'Troca', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1508615070450-295b0a76e52c?w=500&auto=format&fit=crop&q=80' },

    { id: 32, name: 'Carregador Portátil', price: 'R$ 45,00', type: 'Venda', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1585386959984-a4155229e1e0?w=500&auto=format&fit=crop&q=80' },

    { id: 33, name: 'Webcam HD', price: 'R$ 120,00', type: 'Troca', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=500&auto=format&fit=crop&q=80' },

    { id: 34, name: 'SSD 1TB', price: 'R$ 300,00', type: 'Venda', category: 'eletronicos',
      image: 'https://images.unsplash.com/photo-1605640226388-4a59c6fef568?w=500&auto=format&fit=crop&q=80' },


    // ---------------------
    // LIVROS
    // ---------------------
    { id: 35, name: 'Dom Casmurro', price: 'R$ 15,00', type: 'Troca', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/6955031-M.jpg' },

    { id: 36, name: 'O Cortiço', price: 'R$ 18,00', type: 'Venda', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/8226196-M.jpg' },

    { id: 37, name: 'Harry Potter', price: 'R$ 35,00', type: 'Troca', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/7984916-M.jpg' },

    { id: 38, name: 'Senhor dos Anéis', price: 'R$ 45,00', type: 'Venda', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/8231996-M.jpg' },

    { id: 39, name: 'Código Limpo', price: 'R$ 80,00', type: 'Troca', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/7984918-M.jpg' },

    { id: 40, name: '1984 - Orwell', price: 'R$ 25,00', type: 'Venda', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/7222246-M.jpg' },

    { id: 41, name: 'O Alquimista', price: 'R$ 20,00', type: 'Troca', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/8101281-M.jpg' },

    { id: 42, name: 'Sapiens', price: 'R$ 40,00', type: 'Venda', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/8379612-M.jpg' },

    { id: 43, name: 'Mindset', price: 'R$ 30,00', type: 'Troca', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/8281990-M.jpg' },

    { id: 44, name: 'Atomic Habits', price: 'R$ 35,00', type: 'Venda', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/8235405-M.jpg' },

    { id: 45, name: 'Clean Architecture', price: 'R$ 75,00', type: 'Troca', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/8101265-M.jpg' },

    { id: 46, name: 'O Pequeno Príncipe', price: 'R$ 12,00', type: 'Venda', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/8228691-M.jpg' },

    { id: 47, name: 'Cem Anos de Solidão', price: 'R$ 28,00', type: 'Troca', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/8282154-M.jpg' },

    { id: 48, name: 'A Revolução dos Bichos', price: 'R$ 22,00', type: 'Venda', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/7222246-M.jpg' },

    { id: 49, name: 'O Nome do Vento', price: 'R$ 38,00', type: 'Troca', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/8235363-M.jpg' },

    { id: 50, name: 'Neuromancer', price: 'R$ 32,00', type: 'Venda', category: 'livros',
      image: 'https://covers.openlibrary.org/b/id/8101283-M.jpg' },

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

  constructor() {}

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getProdutoPorId(id: number): Produto | undefined {
    return this.produtos.find(produto => produto.id === id);
  }

  getProdutosPorCategoria(category: string): Produto[] {
    if (category === 'all') {
      return this.produtos;
    }
    return this.produtos.filter(produto => produto.category === category);
  }

  getBestsellers(): Produto[] {
    return this.bestsellers;
  }

  getTopRated(): Produto[] {
    return this.topRated;
  }

  buscarProdutos(query: string): Produto[] {
    const searchTerm = query.toLowerCase();
    return this.produtos.filter(produto =>
      produto.name.toLowerCase().includes(searchTerm) ||
      produto.category.toLowerCase().includes(searchTerm) ||
      (produto.type && produto.type.toLowerCase().includes(searchTerm))
    );
  }

  getProdutosSimilares(produto: Produto): Produto[] {
    return this.produtos
      .filter(p => p.category === produto.category && p.id !== produto.id)
      .slice(0, 2);
  }

  adicionarProduto(produto: any): void {
    const novoProduto: Produto = {
      id: produto.id,
      name: produto.name,
      price: produto.price,
      category: produto.category,
      condition: produto.condition,
      image: produto.image,
      description: produto.description,
      type: produto.condition?.toLowerCase().includes('troca') ? 'Troca' : 'Venda'
    };

    this.produtos.unshift(novoProduto);
    this.produtosSubject.next([...this.produtos]);
  }

}

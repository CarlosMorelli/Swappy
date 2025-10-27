import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from './produtos.service';

export interface ItemCarrinho {
  produto: Produto;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: ItemCarrinho[] = [];
  private itensSubject = new BehaviorSubject<ItemCarrinho[]>([]);
  public itens$ = this.itensSubject.asObservable();

  private contadorSubject = new BehaviorSubject<number>(0);
  public contador$ = this.contadorSubject.asObservable();

  constructor() {
    this.carregarCarrinho();
  }

  // Adicionar produto ao carrinho
  adicionarProduto(produto: Produto): void {
    const itemExistente = this.itens.find(item => item.produto.id === produto.id);
    
    if (itemExistente) {
      itemExistente.quantity += 1;
    } else {
      this.itens.push({
        produto: produto,
        quantity: 1
      });
    }
    
    this.salvarCarrinho();
    this.atualizarObservables();
  }

  // Remover produto do carrinho
  removerProduto(produtoId: number): void {
    this.itens = this.itens.filter(item => item.produto.id !== produtoId);
    this.salvarCarrinho();
    this.atualizarObservables();
  }

  // Atualizar quantidade de um produto
  atualizarQuantidade(produtoId: number, quantity: number): void {
    const item = this.itens.find(item => item.produto.id === produtoId);
    if (item) {
      if (quantity <= 0) {
        this.removerProduto(produtoId);
      } else {
        item.quantity = quantity;
        this.salvarCarrinho();
        this.atualizarObservables();
      }
    }
  }

  // Obter itens do carrinho
  getItens(): ItemCarrinho[] {
    return this.itens;
  }

  // Obter total de itens
  getTotalItens(): number {
    return this.itens.reduce((total, item) => total + item.quantity, 0);
  }

  // Obter total do carrinho
  getTotal(): number {
    return this.itens.reduce((total, item) => {
      const preco = this.extrairPreco(item.produto.price);
      return total + (preco * item.quantity);
    }, 0);
  }

  // Limpar carrinho
  limparCarrinho(): void {
    this.itens = [];
    this.salvarCarrinho();
    this.atualizarObservables();
  }

  // Verificar se produto está no carrinho
  produtoNoCarrinho(produtoId: number): boolean {
    return this.itens.some(item => item.produto.id === produtoId);
  }

  // Salvar carrinho no localStorage
  private salvarCarrinho(): void {
    localStorage.setItem('cart', JSON.stringify(this.itens));
  }

  // Carregar carrinho do localStorage
  private carregarCarrinho(): void {
    const carrinhoSalvo = localStorage.getItem('cart');
    if (carrinhoSalvo) {
      this.itens = JSON.parse(carrinhoSalvo);
      this.atualizarObservables();
    }
  }

  // Atualizar observables
  private atualizarObservables(): void {
    this.itensSubject.next([...this.itens]);
    this.contadorSubject.next(this.getTotalItens());
  }

  // Extrair preço numérico da string
  private extrairPreco(priceString: string): number {
    return parseFloat(priceString.replace('R$ ', '').replace(',', '.'));
  }

  // Formatar preço para exibição
  formatarPreco(valor: number): string {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
  }
}


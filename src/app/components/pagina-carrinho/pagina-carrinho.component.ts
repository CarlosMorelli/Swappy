import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarrinhoService, ItemCarrinho } from '../../services/carrinho.service';
import { Produto } from '../../services/produtos.service';
import { DockComponent } from '../dock/dock.component';

@Component({
  selector: 'app-pagina-carrinho',
  standalone: true,
  imports: [CommonModule, DockComponent],
  templateUrl: './pagina-carrinho.component.html',
  styleUrls: ['./pagina-carrinho.component.css']
})
export class PaginaCarrinhoComponent implements OnInit {
  itensCarrinho: ItemCarrinho[] = [];
  produtoSelecionado: Produto | null = null;
  mostrarModal: boolean = false;
  totalCarrinho: number = 0;
  freteGratis: boolean = false;
  valorFrete: number = 15.90;

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.carregarItens();
    this.carrinhoService.itens$.subscribe(itens => {
      this.itensCarrinho = itens;
      this.calcularTotal();
    });
  }

  carregarItens() {
    this.itensCarrinho = this.carrinhoService.getItens();
    this.calcularTotal();
  }

  calcularTotal() {
    this.totalCarrinho = this.carrinhoService.getTotal();
    this.freteGratis = this.totalCarrinho >= 100;
  }

  atualizarQuantidade(produtoId: number, novaQuantidade: number) {
    this.carrinhoService.atualizarQuantidade(produtoId, novaQuantidade);
  }

  removerItem(produtoId: number) {
    this.carrinhoService.removerProduto(produtoId);
  }

  abrirDetalhes(produto: Produto) {
    this.produtoSelecionado = produto;
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
    this.produtoSelecionado = null;
  }

  finalizarCompra() {
    if (this.itensCarrinho.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }

    const total = this.freteGratis ? this.totalCarrinho : this.totalCarrinho + this.valorFrete;
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2).replace('.', ',')}`);
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['/']);
  }

  continuarComprando() {
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  extrairPreco(priceString: string): number {
    return parseFloat(priceString.replace('R$ ', '').replace(',', '.'));
  }

  formatarPreco(valor: number): string {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
  }

  getTotalComFrete(): number {
    return this.freteGratis ? this.totalCarrinho : this.totalCarrinho + this.valorFrete;
  }
}


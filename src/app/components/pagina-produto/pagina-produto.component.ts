import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService, Produto } from '../../services/produtos.service';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-pagina-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {
  product: Produto | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.product = this.produtosService.getProdutoPorId(productId);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  addToCart() {
    if (!this.product) return;
    
    this.carrinhoService.adicionarProduto(this.product);
    alert('Produto adicionado ao carrinho!');
  }

  goToChat() {
    this.router.navigate(['/chat']);
  }

  get showAddToCartButton() {
    return this.product && this.product.type === 'Venda';
  }

  get showTradeButton() {
    return this.product && this.product.type === 'Troca';
  }

  get similarProducts() {
    if (!this.product) return [];
    
    return this.produtosService.getProdutosSimilares(this.product);
  }

  openProduct(product: Produto) {
    this.router.navigate(['/produto', product.id]);
  }
}


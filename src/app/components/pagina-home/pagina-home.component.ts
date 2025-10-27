import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutosService, Produto } from '../../services/produtos.service';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-pagina-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.css']
})
export class PaginaHomeComponent implements OnInit {
  currentPageIndex = 0;
  currentCategory = 'all';
  productsPerPage = 6;
  bestsellersPageIndex = 0;
  topRatedPageIndex = 0;
  searchQuery = '';

  products: Produto[] = [];
  bestsellers: Produto[] = [];
  topRated: Produto[] = [];

  constructor(
    private router: Router,
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.loadBestsellers();
    this.loadTopRated();
  }

  get filteredProducts() {
    let filtered = this.produtosService.getProdutosPorCategoria(this.currentCategory);

    // Aplicar filtro de busca se houver
    if (this.searchQuery.trim()) {
      filtered = this.produtosService.buscarProdutos(this.searchQuery);
      // Se há busca, filtrar também por categoria se não for 'all'
      if (this.currentCategory !== 'all') {
        filtered = filtered.filter(produto => produto.category === this.currentCategory);
      }
    }

    const startIndex = this.currentPageIndex * this.productsPerPage;
    return filtered.slice(startIndex, startIndex + this.productsPerPage);
  }

  get currentProducts() {
    return this.filteredProducts;
  }

  get currentBestsellers() {
    const startIndex = this.bestsellersPageIndex * this.productsPerPage;
    return this.bestsellers.slice(startIndex, startIndex + this.productsPerPage);
  }

  get currentTopRated() {
    const startIndex = this.topRatedPageIndex * this.productsPerPage;
    return this.topRated.slice(startIndex, startIndex + this.productsPerPage);
  }

  loadProducts() {
    this.products = this.produtosService.getProdutos();
  }

  loadBestsellers() {
    this.bestsellers = this.produtosService.getBestsellers();
  }

  loadTopRated() {
    this.topRated = this.produtosService.getTopRated();
  }

  filterByCategory(category: string) {
    this.currentCategory = category;
    this.currentPageIndex = 0;
    // Limpar busca ao selecionar categoria
    this.searchQuery = '';
    // Limpar o campo de busca na interface
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    if (searchInput) {
      searchInput.value = '';
    }
  }

  nextPage() {
    let filteredProducts = this.produtosService.getProdutosPorCategoria(this.currentCategory);
    const totalPages = Math.ceil(filteredProducts.length / this.productsPerPage);
    if (this.currentPageIndex < totalPages - 1) {
      this.currentPageIndex++;
    }
  }

  previousPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
  }

  nextBestsellersPage() {
    const totalPages = Math.ceil(this.bestsellers.length / this.productsPerPage);
    if (this.bestsellersPageIndex < totalPages - 1) {
      this.bestsellersPageIndex++;
    }
  }

  previousBestsellersPage() {
    if (this.bestsellersPageIndex > 0) {
      this.bestsellersPageIndex--;
    }
  }

  nextTopRatedPage() {
    const totalPages = Math.ceil(this.topRated.length / this.productsPerPage);
    if (this.topRatedPageIndex < totalPages - 1) {
      this.topRatedPageIndex++;
    }
  }

  previousTopRatedPage() {
    if (this.topRatedPageIndex > 0) {
      this.topRatedPageIndex--;
    }
  }

  openProduct(product: Produto) {
    this.router.navigate(['/produto', product.id]);
  }

  searchProducts(event: any) {
    this.searchQuery = event.target.value;
    this.currentPageIndex = 0; // Resetar para primeira página ao buscar
  }

  navigateToAnunciar() {
    this.router.navigate(['/anunciar']);
  }

  get totalPages() {
    let filteredProducts = this.produtosService.getProdutosPorCategoria(this.currentCategory);

    // Aplicar filtro de busca se houver
    if (this.searchQuery.trim()) {
      filteredProducts = this.produtosService.buscarProdutos(this.searchQuery);
      // Se há busca, filtrar também por categoria se não for 'all'
      if (this.currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(produto => produto.category === this.currentCategory);
      }
    }

    return Math.ceil(filteredProducts.length / this.productsPerPage);
  }

  get bestsellersTotal() {
    return Math.ceil(this.bestsellers.length / this.productsPerPage);
  }

  get topRatedTotal() {
    return Math.ceil(this.topRated.length / this.productsPerPage);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}


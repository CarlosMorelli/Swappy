import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.css']
})
export class DockComponent {
  cartCount = 0;

  constructor(private router: Router) {
    // Carregar contador do carrinho do localStorage
    this.loadCartCount();
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToCarrinho() {
    this.router.navigate(['/carrinho']);
  }

  navigateToChat() {
    this.router.navigate(['/chat']);
  }

  navigateToPontos() {
  this.router.navigate(['/pontos']);
}

  private loadCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartCount = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
  }

  // Método para atualizar contador (será chamado por outros componentes)
  updateCartCount() {
    this.loadCartCount();
  }
}


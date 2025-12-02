import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ProdutoParceiro {
  nome: string;
  preco: number;
  pontos: number;
}

export interface LojaParceira {
  id: string;
  nome: string;
  logo: string;
  produtos: ProdutoParceiro[];
}

@Component({
  selector: 'app-pagina-parceiros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-parceiros.html',
  styleUrl: './pagina-parceiros.css',
})
export class PaginaParceiros {

  lojas: LojaParceira[] = [
    {
      id: 'starbucks',
      nome: 'Starbucks',
      logo: 'https://upload.wikimedia.org/wikipedia/sv/thumb/d/d3/Starbucks_Coffee_Logo.svg/1200px-Starbucks_Coffee_Logo.svg.png',
      produtos: [
        { nome: 'Frappuccino Chocolate', preco: 28, pontos: 220 },
        { nome: 'Latte de Baunilha', preco: 22, pontos: 180 },
        { nome: 'Cookie Chocolate', preco: 10, pontos: 90 }
      ]
    },
    { id: 'adidas', nome: 'Adidas', logo: 'https://seeklogo.com/images/A/adidas-logo-107B082DA0-seeklogo.com.png', produtos: [ { nome: 'Boné Adidas Originals', preco: 140, pontos: 980 }, { nome: 'Meias Performance', preco: 45, pontos: 320 }, { nome: 'Garrafa Térmica', preco: 120, pontos: 860 } ] }, { id: 'cacaushow', nome: 'Cacau Show', logo: 'https://logodownload.org/wp-content/uploads/2017/11/cacau-show-logo-0.png', produtos: [ { nome: 'Caixa Trufas 12 un', preco: 32, pontos: 210 }, { nome: 'Coração Bendito', preco: 59, pontos: 390 }, { nome: '4 Trufas Sortidas', preco: 12, pontos: 80 } ] }, { id: 'amazon', nome: 'Amazon', logo: 'https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png', produtos: [ { nome: 'Echo Dot 5', preco: 349, pontos: 2500 }, { nome: 'Cabo USB-C', preco: 29, pontos: 190 }, { nome: 'Suporte de Celular', preco: 45, pontos: 300 } ] }, { id: 'iplace', nome: 'iPlace', logo: 'https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png', produtos: [ { nome: 'Capa Silicone iPhone', preco: 249, pontos: 1600 }, { nome: 'Película Blindada', preco: 120, pontos: 780 }, { nome: 'Cabo Lightning Original', preco: 199, pontos: 1300 } ] }, { id: 'cinemax', nome: 'CineMax', logo: 'https://cdn-icons-png.flaticon.com/512/3202/3202926.png', produtos: [ { nome: 'Ingresso 2D', preco: 27, pontos: 190 }, { nome: 'Combo Pipoca + Refri', preco: 45, pontos: 340 }, { nome: 'Ingresso 3D', preco: 32, pontos: 230 } ] }, { id: 'mc', nome: 'McDonald’s', logo: 'https://logodownload.org/wp-content/uploads/2014/04/mcdonalds-logo-1.png', produtos: [ { nome: 'Big Mac', preco: 22, pontos: 160 }, { nome: 'McFlurry', preco: 14, pontos: 110 }, { nome: 'Batata Grande', preco: 11, pontos: 90 } ] }, { id: 'bk', nome: 'Burger King', logo: 'https://logodownload.org/wp-content/uploads/2014/04/burger-king-logo-1.png', produtos: [ { nome: 'Whopper', preco: 24, pontos: 170 }, { nome: 'Onion Rings', preco: 12, pontos: 85 }, { nome: 'Milk Shake Ovomaltine', preco: 16, pontos: 120 } ] }, { id: 'renner', nome: 'Renner', logo: 'https://logodownload.org/wp-content/uploads/2020/08/renner-logo-0.png', produtos: [ { nome: 'Camiseta Básica', preco: 39, pontos: 260 }, { nome: 'Calça Jeans', preco: 139, pontos: 950 }, { nome: 'Carteira Masculina', preco: 69, pontos: 480 } ] }, { id: 'rihappy', nome: 'Ri Happy', logo: 'https://logodownload.org/wp-content/uploads/2014/05/ri-happy-logo-1.png', produtos: [ { nome: 'Lego Classic', preco: 119, pontos: 820 }, { nome: 'Hot Wheels Pack 5', preco: 39, pontos: 250 }, { nome: 'Jogo da Vida', preco: 99, pontos: 680 } ] }, { id: 'shell', nome: 'Shell', logo: 'https://logodownload.org/wp-content/uploads/2014/04/shell-logo-0.png', produtos: [ { nome: 'Cupom R$ 20 Combustível', preco: 20, pontos: 160 }, { nome: 'Cupom R$ 50 Combustível', preco: 50, pontos: 380 }, { nome: 'Cupom R$ 100 Combustível', preco: 100, pontos: 700 } ] }, { id: 'rappi', nome: 'Rappi', logo: 'https://logodownload.org/wp-content/uploads/2019/08/rappi-logo.png', produtos: [ { nome: 'Cupom R$ 15', preco: 15, pontos: 110 }, { nome: 'Cupom R$ 30', preco: 30, pontos: 210 }, { nome: 'Frete Grátis', preco: 12, pontos: 90 } ] }, { id: 'spotify', nome: 'Spotify', logo: 'https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo.png', produtos: [ { nome: '1 Mês Premium', preco: 19.90, pontos: 150 }, { nome: 'Gift Card R$ 30', preco: 30, pontos: 220 }, { nome: 'Gift Card R$ 60', preco: 60, pontos: 430 } ] }, { id: 'netflix', nome: 'Netflix', logo: 'https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png', produtos: [ { nome: 'Gift Card R$ 30', preco: 30, pontos: 230 }, { nome: 'Gift Card R$ 50', preco: 50, pontos: 380 }, { nome: 'Gift Card R$ 100', preco: 100, pontos: 720 } ] }, { id: 'puma', nome: 'Puma', logo: 'https://logodownload.org/wp-content/uploads/2014/04/puma-logo.png', produtos: [ { nome: 'Boné Puma', preco: 119, pontos: 820 }, { nome: 'Camiseta DryFit', preco: 89, pontos: 620 }, { nome: 'Meias Esportivas', preco: 39, pontos: 260 } ] }, { id: 'ifood', nome: 'iFood', logo: 'https://logodownload.org/wp-content/uploads/2019/05/ifood-logo.png', produtos: [ { nome: 'Cupom R$ 10', preco: 10, pontos: 80 }, { nome: 'Cupom R$ 25', preco: 25, pontos: 180 }, { nome: 'Cupom R$ 50', preco: 50, pontos: 360 } ] }, { id: 'nubank', nome: 'Nubank', logo: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo.png', produtos: [ { nome: 'Gift R$ 20', preco: 20, pontos: 170 }, { nome: 'Gift R$ 50', preco: 50, pontos: 390 }, { nome: 'Gift R$ 100', preco: 100, pontos: 720 } ] }, { id: 'havainas', nome: 'Havaianas', logo: 'https://logodownload.org/wp-content/uploads/2016/10/havaianas-logo.png', produtos: [ { nome: 'Havaianas Tradicional', preco: 32, pontos: 230 }, { nome: 'Havaianas Estampada', preco: 42, pontos: 300 }, { nome: 'Chaveiro Oficial', preco: 19, pontos: 140 } ] }, { id: 'cvc', nome: 'CVC Viagens', logo: 'https://logodownload.org/wp-content/uploads/2014/05/cvc-logo.png', produtos: [ { nome: 'Cupom R$ 100', preco: 100, pontos: 700 }, { nome: 'Cupom R$ 200', preco: 200, pontos: 1300 }, { nome: 'Cupom R$ 500', preco: 500, pontos: 3100 } ] }, { id: 'marisa', nome: 'Marisa', logo: 'https://logodownload.org/wp-content/uploads/2014/06/lojas-marisa-logo.png', produtos: [ { nome: 'Vestido Feminino', preco: 89, pontos: 620 }, { nome: 'Camiseta Feminina', preco: 39, pontos: 260 }, { nome: 'Bolsa Casual', preco: 119, pontos: 820 } ] }, { id: 'shoee', nome: 'Shopee', logo: 'https://logodownload.org/wp-content/uploads/2021/06/shopee-logo-1.png', produtos: [ { nome: 'Cupom R$ 20', preco: 20, pontos: 150 }, { nome: 'Cupom R$ 50', preco: 50, pontos: 370 }, { nome: 'Cupom R$ 80', preco: 80, pontos: 570 } ] }, { id: 'samsung', nome: 'Samsung', logo: 'https://logodownload.org/wp-content/uploads/2014/04/samsung-logo-4.png', produtos: [ { nome: 'Fone Bluetooth', preco: 199, pontos: 1400 }, { nome: 'Carregador Turbo', preco: 149, pontos: 990 }, { nome: 'Cabo USB-C Original', preco: 79, pontos: 540 } ] }, { id: 'petz', nome: 'Petz', logo: 'https://logodownload.org/wp-content/uploads/2019/04/petz-logo.png', produtos: [ { nome: 'Ração Premium 1kg', preco: 25, pontos: 180 }, { nome: 'Brinquedo para Cachorro', preco: 19, pontos: 140 }, { nome: 'Areia Sanitária', preco: 29, pontos: 210 } ] }, { id: 'kalunga', nome: 'Kalunga', logo: 'https://logodownload.org/wp-content/uploads/2014/05/kalunga-logo.png', produtos: [ { nome: 'Caderno 10 matérias', preco: 34, pontos: 240 }, { nome: 'Kit Canetas', preco: 19, pontos: 130 }, { nome: 'Mousepad Gamer', preco: 45, pontos: 310 } ] }, { id: 'dell', nome: 'Dell', logo: 'https://logodownload.org/wp-content/uploads/2014/04/dell-logo.png', produtos: [ { nome: 'Mouse Wireless', preco: 79, pontos: 560 }, { nome: 'Teclado ABNT2', preco: 139, pontos: 960 }, { nome: 'Mochila Dell Pro', preco: 199, pontos: 1400 } ] }
  ];

  lojaSelecionada: LojaParceira | null = null;

  selecionarLoja(loja: LojaParceira) {
    this.lojaSelecionada = loja;
  }

  voltar() {
    this.lojaSelecionada = null;
  }
}

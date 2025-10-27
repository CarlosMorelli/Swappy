import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';
import { DockComponent } from '../dock/dock.component';

@Component({
  selector: 'app-pagina-anunciar',
  standalone: true,
  imports: [CommonModule, FormsModule, DockComponent],
  templateUrl: './pagina-anunciar.component.html',
  styleUrls: ['./pagina-anunciar.component.css']
})
export class PaginaAnunciarComponent {
  produto = {
    nome: '',
    preco: '',
    categoria: '',
    descricao: '',
    aceitaTrocas: false,
    imagem: ''
  };

  imagemSelecionada: File | null = null;
  imagemPreview: string | null = null;
  categorias = ['Roupas', 'Eletrônicos', 'Livros'];

  constructor(
    private router: Router,
    private produtosService: ProdutosService
  ) {}

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagemSelecionada = file;
      
      // Criar preview da imagem
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagemPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  triggerImageUpload() {
    const fileInput = document.getElementById('image-upload') as HTMLInputElement;
    fileInput.click();
  }

  removerImagem() {
    this.imagemSelecionada = null;
    this.imagemPreview = null;
    const fileInput = document.getElementById('image-upload') as HTMLInputElement;
    fileInput.value = '';
  }

  formatarPreco() {
    // Remover caracteres não numéricos exceto vírgula e ponto
    let valor = this.produto.preco.replace(/[^\d,\.]/g, '');
    
    // Substituir vírgula por ponto para cálculos
    valor = valor.replace(',', '.');
    
    // Converter para número e formatar
    const numero = parseFloat(valor);
    if (!isNaN(numero)) {
      this.produto.preco = `R$ ${numero.toFixed(2).replace('.', ',')}`;
    }
  }

  validarFormulario(): boolean {
    if (!this.produto.nome.trim()) {
      alert('Por favor, informe o nome do produto.');
      return false;
    }

    if (!this.produto.preco.trim()) {
      alert('Por favor, informe o preço do produto.');
      return false;
    }

    if (!this.produto.categoria) {
      alert('Por favor, selecione uma categoria.');
      return false;
    }

    if (!this.produto.descricao.trim()) {
      alert('Por favor, adicione uma descrição do produto.');
      return false;
    }

    if (!this.imagemPreview) {
      alert('Por favor, adicione uma imagem do produto.');
      return false;
    }

    return true;
  }

  anunciarProduto() {
    if (!this.validarFormulario()) {
      return;
    }

    // Simular criação do produto
    const novoProduto = {
      id: Date.now(), // ID temporário
      name: this.produto.nome,
      price: this.produto.preco,
      category: this.produto.categoria.toLowerCase(),
      condition: this.produto.aceitaTrocas ? 'Aceita trocas' : 'Apenas venda',
      image: this.imagemPreview || '/assets/placeholder.jpg',
      description: this.produto.descricao
    };

    // Adicionar produto ao serviço (simulado)
    this.produtosService.adicionarProduto(novoProduto);

    alert('Produto anunciado com sucesso!');
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}


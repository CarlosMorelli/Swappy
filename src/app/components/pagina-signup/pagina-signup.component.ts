import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DockComponent } from '../dock/dock.component';

@Component({
  selector: 'app-pagina-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, DockComponent],
  templateUrl: './pagina-signup.component.html',
  styleUrls: ['./pagina-signup.component.css']
})
export class PaginaSignupComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    if (this.senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Simular cadastro
    localStorage.setItem('user', JSON.stringify({
      nome: this.nome,
      email: this.email
    }));

    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}


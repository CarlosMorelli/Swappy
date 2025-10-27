import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DockComponent } from '../dock/dock.component';

@Component({
  selector: 'app-pagina-login',
  standalone: true,
  imports: [CommonModule, FormsModule, DockComponent],
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email && this.senha) {
      // Simular login
      localStorage.setItem('user', JSON.stringify({
        email: this.email,
        nome: 'Usuário'
      }));

      alert('Login realizado com sucesso!');
      this.router.navigate(['/']);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}


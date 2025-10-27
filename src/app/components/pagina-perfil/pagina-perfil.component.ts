import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-container">
      <header class="page-header">
        <button class="back-btn" routerLink="/">←</button>
        <h1>Perfil do Usuário</h1>
      </header>
      <main class="main-content">
        <h2>Página de Perfil</h2>
        <p>Esta é a página de perfil do usuário.</p>
      </main>
    </div>
  `,
  styles: [`
    .page-container {
      min-height: 100vh;
      background: var(--cream);
      padding-bottom: 100px;
    }
    .page-header {
      background: var(--white);
      padding: var(--spacing-md);
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }
    .back-btn {
      background: var(--accent-orange);
      color: white;
      border: none;
      padding: var(--spacing-sm) var(--spacing-md);
      border-radius: var(--border-radius-small);
      cursor: pointer;
    }
    .main-content {
      padding: var(--spacing-lg);
    }
  `]
})
export class PaginaPerfilComponent {
}


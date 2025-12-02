import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { DockComponent } from './components/dock/dock.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, DockComponent, CommonModule] // <-- IMPORTAR AQUI
})
export class AppComponent {
  mostrarDock = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const caminho = event.urlAfterRedirects;
        this.mostrarDock = !caminho.startsWith('/pagina-chat');
      }
    });
  }
}

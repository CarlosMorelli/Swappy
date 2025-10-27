import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-pontos',
  imports: [],
  templateUrl: './pagina-pontos.html',
  styleUrl: './pagina-pontos.css'
})
export class PontosComponent {
  pontos: number = 500; // Valor atual (de 0 até 1000)

  constructor(private router: Router) {}

  verParceiros() {
    this.router.navigate(['/parceiros']);
  }

  getProgressGradient(): string {
    const percent = Math.min(this.pontos / 1000, 1); // garante 0–1
    const angle = percent * 180;

    return `conic-gradient(#ffc107 ${angle}deg, #eee ${angle}deg 180deg)`;
  }
}

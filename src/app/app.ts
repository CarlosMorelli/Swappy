import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DockComponent } from './components/dock/dock.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DockComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('troca-site-angular');
}

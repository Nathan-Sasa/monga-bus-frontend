import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MongaLogoComponent } from './shared/components/monga-logo/monga-logo.component';
import { HeaderComponent } from './shared/layout/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Yann-ndani');
}

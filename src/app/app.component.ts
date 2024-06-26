import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from "./componentes/inicio/inicio.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <main>
      <a [routerLink]="['/']">
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </a>
  </div>
</header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, InicioComponent,RouterLink]
})
export class AppComponent {
  title = 'SistemaGuiaAngularEspanol';
}


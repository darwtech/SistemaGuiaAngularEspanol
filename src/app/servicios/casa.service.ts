import { Injectable } from '@angular/core';
import { casa } from '../entidades/casa';

@Injectable({
  providedIn: 'root'
})
export class CasaService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  protected ListaCasas: casa[] = [
    {
      id: 0,
      nombre: 'Acme Fresh Start Housing',
      ciudad: 'Salinas',
      provincia: 'Santa elena',
      foto: [
        `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
        `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
        `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`
      ],
      unidades: 2,
      wifi: true,
      lavanderia: true,
    },
    {
      id: 1,
      nombre: 'A113 Transitional Housing',
      ciudad: 'Guayaquil',
      provincia: 'Guayas',
      foto: [
        `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
        `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
        `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`
      ],
      unidades: 3,
      wifi: false,
      lavanderia: true,
    },
    {
      id: 2,
      nombre: 'Warm Beds Housing Support',
      ciudad: 'Salinas',
      provincia: 'Santa elena',
      foto: [
        `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
        `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
        `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`
      ],
      unidades: 2,
      wifi: false,
      lavanderia: true,
    },
    {
      id: 3,
      nombre: 'Homesteady Housing',
      ciudad: 'Machala',
      provincia: 'El oro',
      foto: [
        `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
        `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
        `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`
      ],
      unidades: 1,
      wifi: true,
      lavanderia: false,
    },
    {
      id: 4,
      nombre: 'Happy Homes Group',
      ciudad: 'Manta',
      provincia: 'Manabi',
      foto: [
        `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
        `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
        `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`
      ],
      unidades: 1,
      wifi: true,
      lavanderia: false,
    },
    {
      id: 5,
      nombre: 'Hopeful Apartment Group',
      ciudad: 'Crucitas',
      provincia: 'Manabi',
      foto: [
        `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
        `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
        `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`
      ],
      unidades: 1,
      wifi: true,
      lavanderia: false,
    },
    {
      id: 6,
      nombre: 'Seriously Safe Towns',
      ciudad: 'Canoas',
      provincia: 'Manabi',
      foto: [
        `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
        `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
        `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`
      ],
      unidades: 2,
      wifi: true,
      lavanderia: false,
    }
  ];

  getLista(): casa[] {
    return this.ListaCasas;
  }

  getCasaId(id: number): casa | undefined {
    return this.ListaCasas.find(c => c.id === id);
  }

  addCasa(Casa: casa): void {
    this.ListaCasas.push(Casa);
    console.log(this.ListaCasas);
  }

  updateCasa(updateCasa: casa): boolean {
    const index = this.ListaCasas.findIndex(c => c.id === updateCasa.id);
    if (index >= 0) {
      this.ListaCasas[index] = updateCasa;
      return true;
    }
    return false;
  }

  deleteCasa(id: number): boolean {
    const index = this.ListaCasas.findIndex(c => c.id === id);
    if (index !== -1) {
      this.ListaCasas.splice(index, 1);
      return true;
    }
    return false;
  }

  submitApplication(nombre: string, apellido: string, mail: string) {
    console.log(`Aplicación de casa recibida: Nombre: ${nombre}, Apellido: ${apellido}, Email: ${mail}.`);
  }

  constructor() { }
}

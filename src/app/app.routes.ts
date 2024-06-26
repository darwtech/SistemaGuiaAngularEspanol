import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';

export const routes: Routes = [
    {
    path:'',
    component:InicioComponent,
    title:'Pagina Inicio',
    },
    {
      path:'detalles/:id',
      component:DetallesComponent,
      title:'Pagina detalle',
    }

];
export default routes;

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaComponentComponent } from './componentes/cuenta-component/cuenta-component.component';
import { CrearTransaccionComponentComponent } from './componentes/crear-transaccion-component/crear-transaccion-component.component';

const routes: Routes = [
  { path: '', component: CuentaComponentComponent },
  { path: 'transaccion', component: CrearTransaccionComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

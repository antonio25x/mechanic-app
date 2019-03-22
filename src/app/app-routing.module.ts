import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { FacturaComponent } from './factura/factura.component';
import { InventarioComponent } from './inventario/inventario.component';
import { HistorialComponent } from './historial/historial.component';
import { DocsComponent } from './documentacion/docs.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cliente', component: ClienteComponent},
    { path: 'vehiculo', component: VehiculoComponent},
    { path: 'cotizacion', component: CotizacionComponent},
    { path: 'ordenes', component: OrdenesComponent},
    { path: 'factura', component: FacturaComponent},
    { path: 'inventario', component: InventarioComponent},
    { path: 'historial', component: HistorialComponent},
    { path: 'docs', component: DocsComponent},
    { path: 'not-found', component: NotFoundComponent},
    { path: '**', redirectTo: 'not-found'}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

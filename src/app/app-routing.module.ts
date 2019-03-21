import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { FacturaComponent } from './factura/factura.component';
import { InventarioComponent } from './inventario/inventario.component';
import { HistorialComponent } from './historial/historial.component';
import { DocsComponent } from './docs/docs.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'client', component: ClientComponent},
    { path: 'vehiculo', component: VehiculoComponent},
    { path: 'cotizacion', component: CotizacionComponent},
    { path: 'ordenes', component: OrdenesComponent},
    { path: 'factura', component: FacturaComponent},
    { path: 'inventario', component: InventarioComponent},
    { path: 'historial', component: HistorialComponent},
    { path: 'docs', component: DocsComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

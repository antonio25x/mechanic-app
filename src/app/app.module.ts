import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { DocsComponent } from './documentacion/docs.component';
import { FacturaComponent } from './factura/factura.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { HistorialComponent } from './historial/historial.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    HomeComponent,
    CotizacionComponent,
    DocsComponent,
    FacturaComponent,
    InventarioComponent,
    VehiculoComponent,
    OrdenesComponent,
    HistorialComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

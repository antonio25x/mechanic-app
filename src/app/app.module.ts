import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { EditarModalComponent } from './cliente/editar-modal/editar-modal.component';
import { AgregarModalComponent } from './cliente/agregar-modal/agregar-modal.component';
import { AgregarLineItemComponent } from './cotizacion/agregar-line-item/agregar-line-item.component';

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
    NotFoundComponent,
    EditarModalComponent,
    AgregarModalComponent,
    AgregarLineItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [AgregarModalComponent, EditarModalComponent, AgregarLineItemComponent],
  providers: [NgModel],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { LineItem } from './line-item.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgregarLineItemComponent } from './agregar-line-item/agregar-line-item.component';

@Component({
    selector: 'app-cotizacion',
    templateUrl: './cotizacion.component.html',
    styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

    lineItems: Array<LineItem>;

    constructor(public modalService: NgbModal) { }

    ngOnInit(): void {
        this.lineItems = new Array<LineItem>();

        this.lineItems.push(new LineItem('Cambiar Frenos traseros', 'Frenos Traseros', 2, 150));
        this.lineItems.push(new LineItem('Cambiar aceite', 'Aceite 50W', 4, 50));
        this.lineItems.push(new LineItem('Cambiar Parabrisas', 'Parabrisas', 1, 350));
    }

    abrirLineItem() {
        this.modalService.open(AgregarLineItemComponent,  { size: 'lg' }).result.then(
            (result) => {
                if (result instanceof LineItem) {
                    this.lineItems.push(result);
                }
            },
            (dismiss) => {}
        );
    }

    editarLineItem(index: number) {
        // TODO editar line item here
    }

    removerLineItem (index: number) {
        this.lineItems.splice(index, 1);
    }

}

import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo.model';

@Component({
    selector: 'app-vehiculo',
    templateUrl: './vehiculo.component.html',
    styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

    vehiculos: Array<Vehiculo>;

    constructor() { }

    ngOnInit(): void {
        this.vehiculos = new Array<Vehiculo>();
        this.vehiculos.push(new Vehiculo('Ford Focus', 2011, 10000, '../../assets/images/cars/2011_focus.png'));
        this.vehiculos.push(new Vehiculo('Lexus', 2017, 1520, '../../assets/images/cars/2017_lexus.jpg'));
        this.vehiculos.push(new Vehiculo('Genesis', 2019, 164200, '../../assets/images/cars/2019_genesis.jpg'));
    }
}

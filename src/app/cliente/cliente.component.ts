import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-client',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Array<Cliente>;
  nombre: string;
  direccion: string;

  ngOnInit(): void {
    this.clientes = new Array();
    this.clientes.push(new Cliente('Luis A', 'USA'));
    this.clientes.push(new Cliente('Billy', 'Peru'));
    this.clientes.push(new Cliente('Billy', 'Peru'));
    this.clientes.push(new Cliente('Billy', 'Peru'));
    this.clientes.push(new Cliente('Billy', 'Peru'));
    this.clientes.push(new Cliente('Billy', 'Peru'));
    this.clientes.push(new Cliente('Billy', 'Peru'));
    this.clientes.push(new Cliente('Billy', 'Peru'));
  }

  agregarCliente() {
    this.clientes.push(new Cliente(this.nombre, this.direccion));
    this.nombre = '';
    this.direccion = '';
  }
}

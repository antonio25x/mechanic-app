import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-editar-modal',
  templateUrl: './editar-modal.component.html',
  styleUrls: ['./editar-modal.component.css']
})
export class EditarModalComponent implements OnInit {

  cliente: Cliente;

  constructor(public activeModal: NgbActiveModal) {
   }

  ngOnInit() {
  }

  guardarCliente() {
    this.activeModal.close(new Cliente(this.cliente.nombre, this.cliente.direccion));
  }
}

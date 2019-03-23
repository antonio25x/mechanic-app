import { Component, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-agregar-modal',
  templateUrl: './agregar-modal.component.html',
  styleUrls: ['./agregar-modal.component.css']
})
export class AgregarModalComponent implements OnInit {

  nombre: string;
  direccion: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  agregarCliente() {
    // TODO: podemos validar las variables antes de enviarlas al cliente-component
    this.activeModal.close(new Cliente(this.nombre, this.direccion));
  }

}

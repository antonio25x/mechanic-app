import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AgregarModalComponent } from './agregar-modal/agregar-modal.component';
import { EditarModalComponent } from './editar-modal/editar-modal.component';

@Component({
  selector: 'app-client',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Array<Cliente>;
  closeResult: string;

  constructor(private modalService: NgbModal) { }

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

  removerCliente(index: number) {
    this.clientes.splice(index, 1);
  }

  abrirAgregarModal() {
    this.modalService.open(AgregarModalComponent).result.then((result) => {
      if (result instanceof Cliente) {
        this.clientes.push(result);
      }
    }, (reason) => {});
  }

  editarCliente(index: number) {
    const clienteAEditar = {...this.clientes[index]};
    const modalRef = this.modalService.open(EditarModalComponent);
    modalRef.result.then(
      (result) => {
        if (result instanceof Cliente) {
          const cliente = this.clientes[index];
          cliente.nombre = result.nombre;
          cliente.direccion = result.direccion;
        }
      },
      (reason) => {}
    );

    modalRef.componentInstance.cliente = clienteAEditar;
  }
}

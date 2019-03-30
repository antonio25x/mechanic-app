import { Component, OnInit } from '@angular/core';
import { LineItem } from '../line-item.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agregar-line-item',
  templateUrl: './agregar-line-item.component.html',
  styleUrls: ['./agregar-line-item.component.css']
})
export class AgregarLineItemComponent implements OnInit {

  lineItem: LineItem;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.lineItem = new LineItem('', '', 0, 0);
  }

  agregarLineItem() {
    this.activeModal.close(this.lineItem);
  }

}

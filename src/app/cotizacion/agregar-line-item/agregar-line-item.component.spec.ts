import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarLineItemComponent } from './agregar-line-item.component';

describe('AgregarLineItemComponent', () => {
  let component: AgregarLineItemComponent;
  let fixture: ComponentFixture<AgregarLineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarLineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

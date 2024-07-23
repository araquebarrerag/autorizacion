import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTransaccionComponentComponent } from './crear-transaccion-component.component';

describe('CrearTransaccionComponentComponent', () => {
  let component: CrearTransaccionComponentComponent;
  let fixture: ComponentFixture<CrearTransaccionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTransaccionComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTransaccionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

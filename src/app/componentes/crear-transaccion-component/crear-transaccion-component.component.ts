import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-crear-transaccion-component',
  templateUrl: './crear-transaccion-component.component.html',
  styleUrls: ['./crear-transaccion-component.component.css']
})
export class CrearTransaccionComponentComponent {

  transaccionForm = new FormGroup({
    id: new FormControl(''),
    comerciante: new FormControl(''),
    cantidad: new FormControl(''),
    tiempo: new FormControl('')
  });

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) { }

  cargarForm() {
    this.transaccionForm = new FormGroup({
      id: new FormControl(''),
      comerciante: new FormControl(''),
      cantidad: new FormControl(''),
      tiempo: new FormControl('')
    });
  }

  guardar() {
    const dia = new Date();
    this.transaccionForm.value.tiempo = dia.toISOString();
    console.log(this.transaccionForm.value);
  }

  material() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('select');
      var elems2 = document.querySelectorAll('.modal');
      var instances = M.FormSelect.init(elems);
      var instances2 = M.Modal.init(elems2);
    })
  }

}

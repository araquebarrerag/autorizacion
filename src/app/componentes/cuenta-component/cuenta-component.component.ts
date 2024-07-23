import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CuentaServiceService } from '../../services/cuenta-service/cuenta-service.service';

declare var M: any;

@Component({
  selector: 'app-cuenta-component',
  templateUrl: './cuenta-component.component.html',
  styleUrls: ['./cuenta-component.component.css']
})
export class CuentaComponentComponent {

  cuentaForm = new FormGroup({
    id: new FormControl(''),
    tarjeta_activa: new FormControl(''),
    limite_disponible: new FormControl('')
  });


  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public cuentaService: CuentaServiceService
  ) {
    this.cargarForm();
    this.material();
    this.cargarCuentas();
  }

  cargarForm() {
    this.cuentaForm = new FormGroup({
      id: new FormControl(''),
      tarjeta_activa: new FormControl(''),
      limite_disponible: new FormControl('')
    })
  }

  cargarCuentas() {

  }

  guardar() {
    var tarjeta_activa;
    var array = {};

    if (this.cuentaForm.value.id != '' && this.cuentaForm.value.tarjeta_activa != '' && this.cuentaForm.value.limite_disponible != ''
      && this.cuentaForm.value.id != null && this.cuentaForm.value.tarjeta_activa != null && this.cuentaForm.value.limite_disponible != null
      && this.cuentaForm.value.id != undefined && this.cuentaForm.value.tarjeta_activa != undefined && this.cuentaForm.value.limite_disponible != undefined
    ) {
      if (this.cuentaForm.value.tarjeta_activa == '0') {
        tarjeta_activa = true;
      } else {
        tarjeta_activa = false;
      }
      array = {
        cuenta: {
          "id": this.cuentaForm.value.id,
          "tarjeta_activa": tarjeta_activa,
          "límite_disponible": this.cuentaForm.value.limite_disponible
        }
      }
      this.cuentaService.cargarCuenta(this.cuentaForm.value.id).subscribe(cuenta => {
        if (cuenta == null || cuenta == undefined) {
          this.cuentaService.crearCuenta(array).subscribe(crearCuenta => {
            array = {
              cuenta,
              "violaciones": []
            }
            console.log(array);
          });
        }
        else {
          array = {
            cuenta,
            "violaciones": ["Cuenta ya esta inicializada"]
          }
          console.log(array);
        }
      })
    } else if (this.cuentaForm.value.id == '' || this.cuentaForm.value.id == null || this.cuentaForm.value.id == undefined) {
      alert("Ingrese un id");
    } else if (this.cuentaForm.value.tarjeta_activa == '' || this.cuentaForm.value.tarjeta_activa == null || this.cuentaForm.value.tarjeta_activa == undefined) {
      alert("Seleccione si la cuenta se encuentra activa o no");
    } else if (this.cuentaForm.value.limite_disponible == '' || this.cuentaForm.value.limite_disponible == null || this.cuentaForm.value.limite_disponible == undefined) {
      alert("Ingrese un limite disponible");
    }


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

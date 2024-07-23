import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CuentaServiceService } from '../../services/cuenta-service/cuenta-service.service';
import { TransaccionServiceService } from '../../services/transaccion-service/transaccion-service.service';

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
    public route: ActivatedRoute,
    public cuentaService: CuentaServiceService,
    public transaccionService: TransaccionServiceService
  ) {
    this.cargarForm();
    this.material();
  }

  cargarForm() {
    this.transaccionForm = new FormGroup({
      id: new FormControl(''),
      comerciante: new FormControl(''),
      cantidad: new FormControl(''),
      tiempo: new FormControl('')
    });
  }

  guardar() {
    var tarjeta_activa;
    var array = {};
    const dia = new Date();
    this.transaccionForm.value.tiempo = dia.toISOString();
    console.log(this.transaccionForm.value);

    if (this.transaccionForm.value.id != '' && this.transaccionForm.value.comerciante != '' && this.transaccionForm.value.cantidad != '' && this.transaccionForm.value.tiempo != ''
      && this.transaccionForm.value.id != null && this.transaccionForm.value.comerciante != null && this.transaccionForm.value.cantidad != null && this.transaccionForm.value.tiempo != null
      && this.transaccionForm.value.id != undefined && this.transaccionForm.value.comerciante != undefined && this.transaccionForm.value.cantidad != undefined && this.transaccionForm.value.tiempo != undefined
    ) {

      this.cuentaService.cargarCuenta(this.transaccionForm.value.id).subscribe(cuenta => {
        if (cuenta == null || cuenta == undefined) {
          array = {
            "violaciones": ["Cuenta no esta inicializada"]
          }
          console.log(array);
        } else {
          var cuenta2: any;
          cuenta2 = cuenta;
          if (cuenta2.cuenta.tarjeta_activa == true) {
            var limite_disponible = parseInt(cuenta2.cuenta.limite_disponible || "");
            var cantidad = parseInt(this.transaccionForm.value.cantidad || "");
            if (limite_disponible - cantidad > 0) {
              array = {
                "cuenta": {
                  "tarjeta_activa": cuenta2.cuenta.tarjeta_activa,
                  "limite_disponible": limite_disponible - cantidad
                },
                "violaciones": []
              }
            } else {
              array = {
                "cuenta": {
                  "tarjeta_activa": cuenta2.cuenta.tarjeta_activa,
                  "limite_disponible": cuenta2.cuenta.limite_disponible
                },
                "violaciones": ["Limite Insuficiente"]
              }
            }
          } else {
            array = {
              cuenta,
              "violaciones": ["Cuenta ya esta inicializada"]
            }
          }
        }
      })

    } else if (this.transaccionForm.value.id == '' || this.transaccionForm.value.id == null || this.transaccionForm.value.id == undefined) {
      alert("Ingrese el id de la cuenta");
    } else if (this.transaccionForm.value.comerciante == '' || this.transaccionForm.value.comerciante == null || this.transaccionForm.value.comerciante == undefined) {
      alert("Ingrese el nombre del comerciante");
    } else if (this.transaccionForm.value.cantidad == '' || this.transaccionForm.value.cantidad == null || this.transaccionForm.value.cantidad == undefined) {
      alert("Ingrese el monto de la transaccion");
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

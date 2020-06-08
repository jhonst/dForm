import { Component } from '@angular/core';

import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //simula la respuesta de la base de datos
  respuestaBD = [
    {
      key: 'nombre',
      type: 'input',
      templateOptions: {
        label: 'Nombre',
        placeholder: 'Ingresa el nombre',
      }
    },
    {
      key: 'cedula',
      type: 'input',
      templateOptions: {
              type: 'number',
        label: 'Cedula',
        placeholder: 'Ingresa el numero de cedula',
      }
    },
    {
      key: 'edad',
      type: 'input',
      templateOptions: {
              type: 'number',
        label: 'Edad',
        placeholder: 'Ingresa la edad',
      }
    },
    {
      key: 'direccion',
      type: 'input',
      templateOptions: {
        label: 'Direccion',
        placeholder: 'Ingresa la direccion',
      }
    },
  ]



  title = 'dFormsB';

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = this.respuestaBD;

  onSubmit() {
    console.log(this.model);
  }

  
}

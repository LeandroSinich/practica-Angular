import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formularioContacto: FormGroup;
  usuarioRegistrado: any = {
    nombre: 'Leandro',
    apellido: 'Sinich',
    dni: 33096612
  }


  constructor(private _form: FormBuilder){
    this.formularioContacto = this._form.group({
      nombre:['', [Validators.required, Validators.minLength(3)]],
      apellido:['', [Validators.required, Validators.minLength(3)]],
      dni:['', [Validators.required, Validators.minLength(3)]],
      email:['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.patchValue({
      nombre: this.usuarioRegistrado.nombre,
      apellido: this.usuarioRegistrado.apellido,
      dni: this.usuarioRegistrado.dni
    });
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('apellido')?.disable();
    this.formularioContacto.get('dni')?.disable();
    
  }

  enviar(){
    console.log(this.formularioContacto);
  }
  hasErrors(controlName: string, errorType:string):boolean | undefined{
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
  }
}

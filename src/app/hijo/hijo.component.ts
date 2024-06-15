import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  
 @Input() mensageDelPadre?: string;
 @Output() mensageEmitido = new EventEmitter<string>();
 @Output() incrementarHijo = new EventEmitter<void>();
 @Output() decrementarHijo = new EventEmitter<void>();
 @Output() likeHijo = new EventEmitter<void>();
  constructor(private _serviceFamiliar: ServicioFamiliarService){}
 mascota: string = '';
 mensage:string = '';
 like: boolean = false;


 enviarMascota(){
  this._serviceFamiliar.mascotear(this.mascota)
 }
 likear(){
  this.like = !this.like
 }
 enviarLike(){
  this.likeHijo.emit();
 }

 emitirMensaje(){
  this.mensageEmitido.emit(this.mensage)
  this.mensage='';
 }
 incrementar(){
  this.incrementarHijo.emit();
 }
 decrementar(){
  this.decrementarHijo.emit();
 }
}

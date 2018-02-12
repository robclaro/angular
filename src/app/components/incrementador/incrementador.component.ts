import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { OutputType } from '@angular/core/src/view';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  // porcentaje: number
  @ViewChild('txtProgress') txtProgress:ElementRef;
  @Input('nombre') Leyenda: string = 'name progressbar';
  @Input() progreso: number = 50;
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { 
    console.log('Leyenda  :', this.Leyenda);
    console.log('progreso :', this.progreso);
  }
  
  ngOnInit() {
  }

  onChanges( newValue: number)
  {
      //console.log( newValue );
      //let elementHTML:any = document.getElementsByName('progreso')[0];

      if (newValue>= 100)
      {
        this.progreso=100;
      } else if( newValue<= 0)
      {
        this.progreso=0;
      }
      else
      {
        this.progreso=newValue;
      }
      //elementHTML.value=this.progreso;
      this.txtProgress.nativeElement.value=this.progreso;
      this.cambioValor.emit(this.progreso);

  }
  cambiarValor(valor:number)
  {
    if (this.progreso>=100 && valor>0) {
        this.progreso=100
    return;
    }
    if (this.progreso<=0 && valor<0)
    {
      this.progreso=0
      return;
    }
    this.progreso=this.progreso+valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
}

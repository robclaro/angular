import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  ajustes: Ajustes = {
      temaUrl: 'assets/css/colors/defaul.css',
      tema:'default'
  }

  constructor( @Inject(DOCUMENT) private _document) { 
      this.cargarAjustes();
  }
  guardarAjustes()
  {
    //console.log('Guardado en el local Storage');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
  }
  cargarAjustes()
  {
    if (localStorage.getItem('ajustes')) {
        this.ajustes= JSON.parse(localStorage.getItem('ajustes'));
        //console.log('Cargando del local Storage');
        
        this.aplicarTema( this.ajustes.tema );
    }
    else
    {
      //console.log('No existen ajustes en el local Storage, valores por defecto');
      this.aplicarTema( this.ajustes.tema )
    }
  }
  aplicarTema( tema: string )
  {
    let url = `assets/css/colors/${ tema }.css`;
    //console.log('url :', url);
    //this._document.getElementById('tema').setAttribute('href', url );
    //this._document.getElementById('tema').setAttribute('href', url);
    this._document.getElementById('tema').setAttribute('href', url);
    this.ajustes.tema=tema;
    this.ajustes.temaUrl=url;
    this.guardarAjustes();
  }
}
interface Ajustes {
    temaUrl: string;
    tema: string;
}

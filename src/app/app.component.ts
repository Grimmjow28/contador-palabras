import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  textoContar: string;
  palabra: string;
  valorConteo: string;
  title = 'contador-palabras';
  numeroVeces: number;

  realizarConteo() {
    var valorrBuscar;
    /** se reaiza el split para tener en una lista de las palabras independiente*/
    /** primero cambio a minuscula tanto a palabra como el texto */
    var textoContarLowerCase = this.textoContar.toLocaleLowerCase();
    var palabraLowerCase;
    if (this.palabra !== null && this.palabra !== undefined &&  this.palabra !== ' ') {
      palabraLowerCase = this.palabra.toLowerCase();
    } 
    /**Elimino los saltos de linea*/
    while(textoContarLowerCase.includes("\n")) {
      textoContarLowerCase = textoContarLowerCase.replace("\n", ' ');
    }
    /** ahora elimno los caracteres especiale sque pueden causar problemas en el conteo */
    const caraceteresEliminar = ["!", "¡","#", "$", "%", "&", "(",")", "*", "+", ",", "-", ".", "/", ":", ";", "=", "?","¿", "@", "[", "^", "_", "`" , "{", "|", "}", "~"];
    caraceteresEliminar.forEach(special=> {
      while(textoContarLowerCase.includes(special)) {
        textoContarLowerCase = textoContarLowerCase.replace(special, '');
      }
    });
    console.log(textoContarLowerCase);
    /** se divide el texto en minusculas y sin signos de puntuacion */
    var splitted = textoContarLowerCase.split(' ');
    if (palabraLowerCase !== null && palabraLowerCase !== undefined && palabraLowerCase !== '') {
      valorrBuscar = palabraLowerCase;
    } else {// si no se selecciona palabra se toma el primer string del texto.
      valorrBuscar = splitted[0];
    }
    /**se hace el conteo de la palabra*/
    var i=0;
    splitted.forEach(palabra => {
      if (palabra === valorrBuscar) {
        i = i + 1;
      }
    });
    this.numeroVeces = i;

    this.valorConteo = valorrBuscar;
  }
}

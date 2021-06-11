import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'contador-palabras'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('contador-palabras');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('contador-palabras');
  });

  // it('debe ser el resultado de la prueba sin palabra de entrada', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   const app = fixture.componentInstance;
  //   app.textoContar = 'Volverán las oscuras golondrinas en tu balcón sus nidos a colgar, y otra vez con el ala a sus cristales jugando llamarán. Pero aquellas que el vuelo refrenaban '+ 
  //   'tu hermosura y mi dicha a contemplar, '+
  //   'aquellas que aprendieron nuestros nombres.... '+
  //   'ésas... ¡no volverán! '+
  //   'Volverán las tupidas madreselvas '+
  //   'de tu jardín las tapias a escalar '+
  //   'y otra vez a la tarde aún más hermosas '+
  //   'sus flores se abrirán. '+
  //   'Pero aquellas cuajadas de rocío '+
  //   'cuyas gotas mirábamos temblar '+
  //   'y caer como lágrimas del día.... '+
  //   'ésas... ¡no volverán! '+
  //   'Volverán del amor en tus oídos '+
  //   'las palabras ardientes a sonar, '+
  //   'tu corazón de su profundo sueño '+
  //   'tal vez despertará. '+
  //   'Pero mudo y absorto y de rodillas '+
  //   'como se adora a Dios ante su altar, '+
  //   'como yo te he querido..., desengáñate, '+
  //   'así... ¡no te querrán! ';
  //   app.realizarConteo();
  //   expect(app.numeroVeces).toEqual(5);
  //   expect(app.valorConteo).toEqual('volverán');

  //     });
});

import { BrowserModule } from '@angular/platform-browser'; // Importa el módulo 'BrowserModule' desde '@angular/platform-browser', que proporciona funcionalidades básicas para ejecutar la aplicación en un navegador web
import { NgModule } from '@angular/core'; // Importa el decorador 'NgModule' desde '@angular/core', que se utiliza para definir un módulo de Angular
import { FormsModule } from '@angular/forms'; // Importa el módulo 'FormsModule' desde '@angular/forms', que proporciona soporte para la vinculación de datos bidireccional mediante ngModel

import { AppComponent } from './app.component'; // Importa el componente principal de la aplicación desde './app.component'
import { HeroesComponent } from './heroes/heroes.component'; // Importa el componente de héroes desde './heroes/heroes.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [ // Define los componentes, directivas y tuberías que pertenecen a este módulo
    AppComponent, // Declara el componente principal de la aplicación
    HeroesComponent // Declara el componente de héroes
  ],
  imports: [ // Importa otros módulos necesarios
    BrowserModule, // Importa el módulo 'BrowserModule' para habilitar la ejecución de la aplicación en el navegador
    FormsModule,
    HeroesComponent,
    HeroDetailComponent // Importa el módulo 'FormsModule' para habilitar la vinculación de datos bidireccional mediante ngModel
  ],
  providers: [], // Define los proveedores de servicios que el módulo contribuye al sistema de inyección de dependencias
  bootstrap: [AppComponent] // Define el componente raíz que se utilizará para iniciar la aplicación
})
export class AppModule { } // Define la clase AppModule que representa el módulo principal de la aplicación

Proyecto: Angular2025
Curso Angular de cero a experto

Instalaciones iniciales:

1º- Instalar Node.JS (comprobar: node --version)
2º- Visual Studio Code
3º- Navegador Google Chrome
4º- Postman
5º- GIT (comprobar: git --version)
5º- GIT ( git config --global user.name "<<usuario>>" )
5º- GIT ( git config --global user.email "<<email>>" )
6º- Docker Desktop
7º- Table Plus
8º- Mongo Compass

Angular CLI *************************************
npm install -g @angular/cli

Extensiones VSCode ******************************

* Angular Language Service
* Auto Close Tag
* Activitus Bar
* Auto import
* Auto Rename Tag
* Error Lens
* Paste JSON as Code
* TypeScript Importer
* Editor Config for VSCode
* Better Comments
* Terminal

Extensiones Chrome

* Json Viewer Awesome

Tema VSCode

*Aura Theme (Aura Dark)
*Iconos (Material Icon Theme)


======================================================

1º Me creo el proyecto en GitHub: Angular2025

2º Por ejemplo desde el terminal de Bash del VSCode
configuro mis credenciales de Git en la máquina virtual:
git config --global user.name "<<usuario>>"
git config --global user.email "<<email>>" )

3º Me creo el proyecto en el VSCode
E inicializo el proyecto para utilizar Git:
git init

4º Me creo el remoto apuntando al proyecto de GitHub y establezco la rama principal
git remote add origin https://github.com/RenegadeAsturias/Angular2025.git
git branch -M main

5º Y actualizo el proyecto local con el proyecto remoto
git pull origin main

6º Actualizo el README y actualizo los cambios locales en el remoto
git add .
git commit -m "Curso Angular 2025"
git push -u origin main 

--Para recuper la info
git pull origin	main

======================================================

Nota de actualización:
Desde Angular v17, por defecto los proyectos trabajan sin módulos (module-less)
Pero para trabajar de forma tradicional como lo vieron en el curso:
ng new <nombre de la aplicación> --standalone false

======================================================

Nota importante sobre: Angular 17

Vamos a empezar el curso trabajando con la forma tradicional que es con módulos.

En la documentación actual, se ha añadido una nueva opción por defecto
para trabajar sin módulos: --standalone
en la creación de nuevas aplicaciones que se creen.

Por eso, de momento cuando creemos nuevas aplicaciones en el curso, escribiremos:


ng new mi-primera-app --standalone false  <== para trabajar con módulos.
?Which stylesheet format would you like to use? CSS
?Do you want to enable Server-Side Rendering (SSR) and Static Site Generation
(SSR/Prerendering) N <== No (Se verá con posterioridad en el curso)


======================================================

Creación de mi primera aplicación con Angular 
$ ng new 02-bases --no-standalone

Effective status: enabled
✔ Which stylesheet format would you like to use? CSS
? Do you want to enable Server-Side Rendering (SSR) 
and Static Site Generation (SSG/Prerendering)? (y/N) N

Para que se ejecute la aplicación y se abra
$ cd 02-bases/
$ ng serve -o | o también npm start


======================================================

Creamos nuestros primeros componentes con CLI:

ng g c [name] | ng g component [name] 
ng g c [path/name] | ng g component [path/name]

$ ng g c contador
CREATE src/app/contador/contador.component.html (24 bytes)
CREATE src/app/contador/contador.component.spec.ts (634 bytes)
CREATE src/app/contador/contador.component.ts (239 bytes)
CREATE src/app/contador/contador.component.css (0 bytes)
UPDATE src/app/app.module.ts (685 bytes)

$ ng g c heroes/heroe
CREATE src/app/heroes/heroe/heroe.component.html (21 bytes)
CREATE src/app/heroes/heroe/heroe.component.spec.ts (613 bytes)
CREATE src/app/heroes/heroe/heroe.component.ts (227 bytes)
CREATE src/app/heroes/heroe/heroe.component.css (0 bytes)
UPDATE src/app/app.module.ts (498 bytes)

$ ng g c heroes/listado
CREATE src/app/heroes/listado/listado.component.html (23 bytes)
CREATE src/app/heroes/listado/listado.component.spec.ts (627 bytes)
CREATE src/app/heroes/listado/listado.component.ts (235 bytes)
CREATE src/app/heroes/listado/listado.component.css (0 bytes)
UPDATE src/app/app.module.ts (593 bytes)

======================================================

Ahora queremos meter los componentes en un módulo
-Un módulo para el componente del contador
-Y Otro módulo para los componentes de héroes (héroe+listado)
-Y finalmente importar los módulos en el AppModule


======================================================

Crear un nuevo módulo para Dragon Ball Z

ng g m dbz (ng generate module dbz)

Y creamos en la carpeta nuevas carpetas para futuros cambios:

mkdir components
mkdir interfaces
mkdir pages
mkdir services

Las pages son componentes que se utilizan con el routing
y que contienen otros componentes.

Creamos nuestro componente de tipo pages, esta vez lo creamos manualmente:

pages/main-page.component.ts (podemos también utilizar los snipets para crear la estructura)
pages/main-page.component.html

El decorador, lo dejamos como:
@Component({
	selector: 'app-dbz-main-page',
	templateUrl: 'main-page.component.html'
})
export class MainPageComponent { }

+app.component.html
<app-dbz-main-page></app-dbz-main-page>


======================================================

Creamos un nuevo componente para el listado de dbz
Creamos un nuevo componente para añadir un personaje de dbz

$ ng g c dbz-list
CREATE src/app/dbz/components/dbz-list/dbz-list.component.html (24 bytes)
CREATE src/app/dbz/components/dbz-list/dbz-list.component.spec.ts (628 bytes)
CREATE src/app/dbz/components/dbz-list/dbz-list.component.ts (238 bytes)
CREATE src/app/dbz/components/dbz-list/dbz-list.component.css (0 bytes)
UPDATE src/app/dbz/dbz.module.ts (434 bytes)

 ng g c dbz-add-personaje
CREATE src/app/dbz/components/dbz-add-personaje/dbz-add-personaje.component.html (33 bytes)
CREATE src/app/dbz/components/dbz-add-personaje/dbz-add-personaje.component.spec.ts (685 bytes)
CREATE src/app/dbz/components/dbz-add-personaje/dbz-add-personaje.component.ts (273 bytes)
CREATE src/app/dbz/components/dbz-add-personaje/dbz-add-personaje.component.css (0 bytes)
UPDATE src/app/dbz/dbz.module.ts (569 bytes)

======================================================

Decoradores de clase para componentes

@Input: Define una propiedad que puede ser enviada desde el padre
hacia el compoente hijo. (@angular/core)
@Input() myProperty;
Ejemplo:
<my-cmp [myProperty]="somExpression">

======================================================

Ejemplo:
Defino en el componente hijo una propiedad con un valor por defecto.
De tal forma que si esta propiedad recibe el valor de la propiedad
desde el componente padre se machacará el valor que contenga.
Y sino su valor será el valor por defecto.

Ejemplo, declaramos en el componente hijo: dbz-list.component.ts

@Input()
public listaPersonajes: Personaje[] = [{
	name: 'Trunks',
	power: 10
}];

Ejemplo, desde el template del componente padre asignamos valores 
a la propiedad [listaPersonajes]
y le asignamos el contenido de la variable "personajes"
que machaca el valor por defecto.

<h4>DBZ Personajes</h4>
<hr/>
<div class="row">
  <div class="col">
    <dbz-list [listaPersonajes]="personajes"></dbz-list>

======================================================

Expandimos el ngFor, dejamos ejemplos en el templete:
dbz-list.component.1expande.ngFor.html

======================================================

ngClass: Enlaza clases de css basado en un objeto o expresión:

<div [ngClass]="{'active':isActive, 'disabled':isDisabled}">

Dejamos ejemplos en el templete:
dbz-list.component.2ngClass.html

======================================================

FormsModule y ngModel

FormsModule de @angular/FormsModule
<input [(ngModel)]="username">

======================================================

@Output()
Emitir eventos al padre
Define una salida del componente que el componente padre
puede suscribirse para escuchar.
@Output() (myEvent) = new EventEmitter();
Ejemplo:
<my-cmp (myEvent)="somExpression">

---- DEFINIMOS EN EL COMPONENTE HIJO ------------------------------

@Output()
public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

<form class="row" (ngSubmit)="emitPersonaje()">

emitPersonaje():void {
	this.onNewPersonaje.emit(this.personaje);
}

---- DEFINIMOS EN EL COMPONENTE PADRE ------------------------------

En: main-page.component.html
Establecemos que el componente hijo escucha emisiones de tipo: onNewPersonaje
Y cuando las emite llamamos a una función javascript del padre pasándole el evento.
Con $event Angular ya sabe de qué tipo es el objeto que viaja.

<div class="col">
	<dbz-add-personaje (onNewPersonaje)="onNewPersonaje($event)"></dbz-add-personaje>
</div>

En: main-page.component.ts
onNewPersonaje(personaje: Personaje):void {
	console.log({personaje});
}

======================================================

======================================================

======================================================

======================================================






















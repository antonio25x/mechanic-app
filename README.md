# MechanicApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Create a new Component

Create a new component under src
`ng g c [component_name]`

Create a new component under app/cliente
`cd ~src/app`
`ng g c client/[component_name]`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploy to Github Pages
Run the following commands.
*Note:* that `--no-silent` just output meaningful error messages
*Important: DO NOT choose branch master or you will override all your changes with the contents of `/dist`*
`ng build --prod --base-href "https://antonio25x.github.io/mechanic-app/"`
`ngh --message="Yout commit message" --branch=gh-pages --no-silent`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

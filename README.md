# 🌐 Angular Microfrontend Architecture


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Overview

- To achive Microfrontend Architechure there are two federation plugins available.
    - module-federation
    - Native-federation
    
In this app, we are creating it using Native Federation plugin.
 - For Microfrontend Architecture, should have HOST (from where we will drive the other apps e.g employee).
 - To drive other app from the HOST, we need to load the Component from the app route.


## Steps to create Microfrontend Architechure. 
Run this cmd `ng g mono-workspace --create-application=false` to create empty workspace without /src folder.

### Steps to Create Host and remote applications
Run this cmd `ng g application admin --prefix app-admin` to create first application that will act as a HOST later

Run this cmd `ng g application employee --prefix app-employee` to create remote application

## Install Federation Plugin

Run this cmd `npm i -D @angular=architects/native-federation@18` to install the plugin



## Steps to make the app HOST and assign Port number
Run this cmd `ng g @angular-architects/native-federation:init --project admin --port 4200 --type dynamic-host`



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

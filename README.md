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
Run this cmd `ng g mono-workspace --create-application=false` to create empty workspace without /src folder. This workspace will contain HOST and remote app under mono-workspace empty application.

### Steps to Create Host and remote applications
Run this cmd `ng g application admin --prefix app-admin` to create first application that will act as a HOST later.

Run this cmd `ng g application employee --prefix app-employee` to create remote application.

## Install Federation Plugin

Run this cmd `npm i -D @angular=architects/native-federation@18` to install the plugin. @ shows the version need to be installed. If you are running latest version of angular, then federation plugin can be installed without using @version_name. It will automatically install the latest version.


## Steps to make the app HOST and assign Port number
`ng g @angular-architects/native-federation:init --project admin --port 4200 --type dynamic-host` This command will make your project "admin" to HOST.

## Steps to make the app remote and assign Port number
`ng g @angular-architects/native-federation:init --project employee --port 4201 --type remote` This command will make your project "employee" to remote.


## Development server

Run `ng serve admin` to run admin app. Navigate to `http://localhost:4200/`. 
and run `ng serve employee` to run remote app. Navigate to `http://localhost:4201/`. 

## Change 

Change port number for remote app in HOST App (admin/public/federation.manifest.json) `federation.manifest.json` file. In this project, remote app is set to 4201 port so port will be `"employee": "http://localhost:4201/remoteEntry.json"`


## app-routes.ts file modification
Use this code in app-routes.ts file of host to run the remote app Component.
{
    path: 'employee',
        loadComponent: () =>
            loadRemoteModule('employee', './Component').then((m: any) => m.AppComponent),
}
This code will allow the remote app to run by HOST.
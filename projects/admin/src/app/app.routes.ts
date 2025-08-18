import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'employee',
        loadComponent: () =>
            loadRemoteModule('employee', './Component').then((m: any) => m.AppComponent),
    },
    {
        path: '**',
        component: HomeComponent
    }
];

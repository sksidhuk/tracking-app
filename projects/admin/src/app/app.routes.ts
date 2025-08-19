import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { RegisterComponent } from './pages/register/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'employee',
        // loadComponent: () =>
        //     loadRemoteModule('employee', './Component').then((m: any) => m.AppComponent),
        loadComponent: () =>
            loadRemoteModule({
                remoteEntry: 'http://localhost:4201/remoteEntry.json',
                remoteName: 'employee',
                exposedModule: './Component'
            }).then((m: any) => m.AppComponent)
    },
    {
        path: '**',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

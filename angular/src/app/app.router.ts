import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TablesComponent } from './components/tables/tables.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const BASE_URL = 'dashboard'
const appRoutes: Routes = [
    {
        path: BASE_URL,
        component: DashboardComponent,
    },
    {
        path: BASE_URL + '/tables',
        component: TablesComponent,
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}
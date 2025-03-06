import { Routes } from '@angular/router';
import { LoginPageComponent } from './COMPONENTS/login-page/login-page.component';
import { HomePageComponent } from './COMPONENTS/home-page/home-page.component';
import { SidebarComponent } from './COMPONENTS/sidebar/sidebar.component';
import { PanelComponent } from './COMPONENTS/panel/panel.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { ListingPartComponent } from './COMPONENTS/listing-part/listing-part.component';
import { AddEmployeeDetailsComponent } from './COMPONENTS/add-employee-details/add-employee-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'home',
        component: HomePageComponent,
        children: [
            {
                path: 'listing-part',
                component: ListingPartComponent,
            },
            {
                path: 'add-employees',
                component: AddEmployeeDetailsComponent
            }
        ]
    }
];

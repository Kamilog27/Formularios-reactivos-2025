import { Routes } from "@angular/router";
import { BasicPageComponent } from "./pages/basic-page/basic-page.component";

import { SwitchPageComponent } from "./pages/switch-page/switch-page.component";
import { DinamicPageComponent } from "./pages/dinamic-page/dinamic-page.component";


export const reactiveRoutes:Routes=[
    {
        path:'',
       children:[
        {
            path:'basic',
            title:'Básicos',
            component:BasicPageComponent
        },
        {
            path:'dynamic',
            title:'Dinámicos',
            component:DinamicPageComponent
        },
        {
            path:'switches',
            title:'Switched',
            component:SwitchPageComponent
        },
        {
            path:'**',
            redirectTo:'basic'
        }
       ]
    }
]
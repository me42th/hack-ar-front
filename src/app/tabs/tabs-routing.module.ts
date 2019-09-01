import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes =
[
   { path: '', redirectTo: '/tabs/tabs/quiz', pathMatch: 'full'},
   {
       path: 'tabs',
       component: TabsPage,
       children: [
           { path: '', redirectTo: '/tabs/tabs/quiz', pathMatch: 'full'},
           {
            path: 'quiz',
            children: [{
               path: '',
               loadChildren: './quiz/quiz.module#QuizPageModule'
            }]
           }, { 
            path: 'store',
            children: [{
                path: '',
                loadChildren: './store/store.module#StorePageModule'
            }]
           }
       ]
   },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TabsRoutingModule{}
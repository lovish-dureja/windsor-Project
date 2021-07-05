import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: 'event', component: EventComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

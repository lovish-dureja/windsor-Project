import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsComponent} from './Pages/events/events.component';
import { HomeComponent} from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';
import { AboutComponent } from './Pages/about/about.component';
import { GuidelinesComponent } from './Pages/guidelines/guidelines.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RegisterComponent } from './Pages/register/register.component';
import { AccountComponent } from './Pages/account/account.component';
import { HomeLoginComponent } from './Pages/home-login/home-login.component';
import { VenuesComponent } from './Pages/venues/venues.component';
import { EventDetailsComponent } from './Pages/event-details/event-details.component';
import { VenueDetailsComponent } from './Pages/venue-details/venue-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'account', component: AccountComponent},
  { path: 'home-login', component: HomeLoginComponent},
  { path: 'venues', component: VenuesComponent},
  { path: 'event-details', component: EventDetailsComponent},
  { path: 'venue-details', component: VenueDetailsComponent},



  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

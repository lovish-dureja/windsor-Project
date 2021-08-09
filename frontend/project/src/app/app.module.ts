import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';
import { EventsComponent } from './Pages/events/events.component';
import { GuidelinesComponent } from './Pages/guidelines/guidelines.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { UpcomingEventsComponent } from './Components/upcoming-events/upcoming-events.component';
import { FeaturesComponent } from './Components/features/features.component';
import { HeaderLoginComponent } from './Components/header-login/header-login.component';
import { TeamComponent } from './Components/team/team.component';
import { HomeLoginComponent } from './Pages/home-login/home-login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { AccountComponent } from './Pages/account/account.component';
import { VenuesComponent } from './Pages/venues/venues.component';
import { EventDetailsComponent } from './Pages/event-details/event-details.component';
import { VenueDetailsComponent } from './Pages/venue-details/venue-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    EventsComponent,
    GuidelinesComponent,
    FooterComponent,
    HeaderComponent,
    HeroSectionComponent,
    PricingComponent,
    UpcomingEventsComponent,
    FeaturesComponent,
    HeaderLoginComponent,
    TeamComponent,
    HomeLoginComponent,
    RegisterComponent,
    AccountComponent,
    VenuesComponent,
    EventDetailsComponent,
    VenueDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

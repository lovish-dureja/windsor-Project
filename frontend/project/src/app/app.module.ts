import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MapSectionComponent } from './Components/map-section/map-section.component';
import { MyCarouselComponent} from './Components/my-carousel/my-carousel.component';

import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';
import { EventsComponent } from './Pages/events/events.component';
import { GuidelinesComponent } from './Pages/guidelines/guidelines.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapSectionComponent,
    MyCarouselComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    EventsComponent,
    GuidelinesComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC10O0_UrRTtFJOdYo4VfuloSVk7zVbaV0',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

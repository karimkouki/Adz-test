import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes}   from '@angular/router';
import{HttpModule}   from '@angular/http';
import{FormsModule}   from '@angular/forms';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdzListLivreComponent } from './Adzcomponents/adz-list-livre/adz-list-livre.component';
import { AdzRechercheLivreComponent } from './Adzcomponents/adz-recherche-livre/adz-recherche-livre.component';
import { AdzPopupLivreComponent } from './Adzcomponents/adz-popup-livre/adz-popup-livre.component';
import { format } from 'util';
import{AdzlivreService} from './AdzShared_service/AdzLivre.service';
import { from } from 'rxjs';
import { FilterPipe } from './Adzcomponents/adz-list-livre/Adz-filter.pipe';

const appRoutes:Routes=[
  {path:'',component:AdzRechercheLivreComponent},
  {path:'popup', component:AdzPopupLivreComponent},
  {path:'list', component:AdzListLivreComponent}
];

@NgModule({
  declarations: [
    AppComponent,
     FilterPipe,
    AdzListLivreComponent,
    AdzRechercheLivreComponent,
    AdzPopupLivreComponent
  ],
  imports: [BrowserModule, FormsModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdzlivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

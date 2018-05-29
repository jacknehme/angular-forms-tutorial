import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { FormPoster } from './services/form-poster.service';
import { DatepickerModule,
         TimepickerModule,
         ButtonsModule,
         RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    Home2Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RatingModule.forRoot(),
    ButtonsModule.forRoot(),
    TimepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    FormPoster,
    GithubService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

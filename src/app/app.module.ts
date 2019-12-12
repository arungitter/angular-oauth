import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [/*{
    provide: OauthService,
    useFactory: (backend: XHRBackend, options: RequestOptions) => {
      return new OauthService(backend, options);
    },
    deps: [XHRBackend, RequestOptions]
  }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OauthService } from './service/oauth.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule, } from '@angular/common/http';
import { HttpModule, RequestOptions, XHRBackend, Http } from "@angular/http";
import { UserinfoService } from './service/userinfo.service';

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
  providers: [{
    provide: OauthService,
    useFactory: (backend: XHRBackend, options: RequestOptions) => {
      return new OauthService(backend, options);
    },
    deps: [XHRBackend, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
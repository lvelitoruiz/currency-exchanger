import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailModule } from './components/detail/detail.module';

import { HomeModule } from './components/home/home.module';
import { FixerInterceptorProvider } from './interceptor/fixer.interceptor';
import { FixerService } from './services/fixer.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    HomeModule,
    DetailModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FixerInterceptorProvider, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

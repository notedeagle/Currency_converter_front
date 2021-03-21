import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyService } from './converter/currency.service';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { ConverterComponent } from './converter/converter.component'
import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonToggleModule,
    MatTableModule
  ],
  providers: [CurrencyService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

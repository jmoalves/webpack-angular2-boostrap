import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app.routing.module';

import { HeaderComponent }  from './struct/header.component';
import { TransactionComponent }  from './transaction/transaction.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    HeaderComponent,
    TransactionComponent
  ],
  bootstrap:    [
    AppComponent 
  ]
})

export class AppModule { }

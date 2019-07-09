import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddEmployeeComponent} from './app.addemployee';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent
        
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }
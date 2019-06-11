import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AddtaskComponent } from './taskmanager/addtask/addtask.component';
import { ViewtaskComponent } from './taskmanager/viewtask/viewtask.component';
import { UpdatetaskComponent } from './taskmanager/updatetask/updatetask.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AddtaskComponent,
    ViewtaskComponent,
    UpdatetaskComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

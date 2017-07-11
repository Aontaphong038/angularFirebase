import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FirebaseService } from './services/firebase.service';
import { ContentComponent } from './content/content.component';
import { EmployeeListComponent } from './content/employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCdLXE4pKcZ6vRq7KgJzDRNmbntWg7Hvws",
      authDomain: "ngtraining-1f1a7.firebaseapp.com",
      databaseURL: "https://ngtraining-1f1a7.firebaseio.com",
      projectId: "ngtraining-1f1a7",
      storageBucket: "ngtraining-1f1a7.appspot.com",
      messagingSenderId: "1084757656045"
    }),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AngularFireDatabase, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

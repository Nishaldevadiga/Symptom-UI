import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { Component } from 'ag-grid-community';
import { EducationComponent } from './Education/education/education.component';
import { HomeComponent } from './Home/home/home.component';
import { FreeMapComponent } from './FreeMap/free-map/free-map.component';
import { TranslocoRootModule } from './transloco-root.module';
import { MatSelectModule } from '@angular/material/select';
import { HttpLoaderFactory, TranslationsModule } from './Service/translations/translations.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommunitiesComponent } from './Community/communities/communities.component';
import { MatGridListModule } from '@angular/material/grid-list';



 const routes:Routes=[
  {path:'',component:HomeComponent},
  { path: 'education', component: EducationComponent },
  { path: 'map', component: FreeMapComponent },
  {path:'todo',component:CommunitiesComponent}
 ]
 
@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    HomeComponent,
    FreeMapComponent,
    CommunitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AgGridAngular,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    TranslocoRootModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideAnimationsAsync(),
    TranslationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

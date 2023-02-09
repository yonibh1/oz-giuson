import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { MatFormFieldModule } from "@angular/material/form-field";


import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MainComponent } from './components/layout-area/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatSliderModule,} from '@angular/material/slider';
import {MatToolbarModule,} from '@angular/material/toolbar';
import {MatSidenavModule,} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import { HomePageComponent } from './components/Home/home-page/home-page.component';









@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    FooterComponent,
    MainComponent,
    PageNotFoundComponent,
    HomePageComponent,
    
    
    
    



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatDialogModule,
    NgxMatFileInputModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  
  providers: [
   { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})

export class AppModule {}






import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

// import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { IgxNavbarModule, IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    RoleComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot() // ToastrModule added    
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: true,
      easing: "ease-in",
      closeButton: true,
      progressAnimation: "decreasing",
      preventDuplicates: true,
      positionClass: "toast-bottom-left"
    }),
    NgxSpinnerModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}

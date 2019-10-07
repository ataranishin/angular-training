import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderLoginComponent } from './header-login/header-login.component';



@NgModule({
  declarations: [HeaderComponent, HeaderLogoComponent, HeaderLoginComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeaderLogoComponent,
    HeaderLoginComponent
  ]
})
export class CoreModule { }

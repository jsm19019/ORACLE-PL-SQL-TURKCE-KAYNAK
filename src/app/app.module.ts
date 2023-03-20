import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemsStartersComponent } from './menu-items-starters/menu-items-starters.component';
import { MenuItemsBreakfastComponent } from './menu-items-breakfast/menu-items-breakfast.component';
import { MenuItemsLunchComponent } from './menu-items-lunch/menu-items-lunch.component';
import { MenuItemsDinnerComponent } from './menu-items-dinner/menu-items-dinner.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsStartersComponent,
    MenuItemsBreakfastComponent,
    MenuItemsLunchComponent,
    MenuItemsDinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

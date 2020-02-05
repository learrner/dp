import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule } from "@angular/material";
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { ListFilterPipe } from './list-filter.pipe';
import { FormsModule } from '@angular/forms';
// import { HttpServicesService } from './services/http-services.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserPostComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

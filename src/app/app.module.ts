import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchjobComponent } from './searchjob/searchjob.component';
import { ListjobComponent } from './listjob/listjob.component';
import { routes} from './app-routing/routes';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchjobComponent,
    ListjobComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

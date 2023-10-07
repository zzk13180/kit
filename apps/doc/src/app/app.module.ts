import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ProjectsModule } from './projects/projects.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProjectsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

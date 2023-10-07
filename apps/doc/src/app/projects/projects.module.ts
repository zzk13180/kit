import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { CardModule, AvatarModule } from 'ng-devui'
import { ButtonModule } from 'ng-devui/button'
import { FullscreenModule } from 'ng-devui/fullscreen'
import { IconModule } from 'ng-devui/icon'
import { SearchModule } from './search'

import { ProjectsComponent } from './projects.component'
import { ProjectsRoutingModule } from './projects-routing.module'
import { DaGridModule } from './da-grid'
import { ListDataService } from './data.service'

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SearchModule,
    CardModule,
    AvatarModule,
    DaGridModule,
    ButtonModule,
    IconModule,
    FullscreenModule,
    ProjectsRoutingModule,
  ],
  exports: [ProjectsComponent],
  providers: [ListDataService],
})
export class ProjectsModule {}

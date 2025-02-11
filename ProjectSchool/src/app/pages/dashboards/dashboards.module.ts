import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardsComponent } from './dashboards.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DashboardsComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class DashboardsModule {}

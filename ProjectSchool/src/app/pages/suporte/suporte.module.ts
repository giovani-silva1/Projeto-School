import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuporteRoutingModule } from './suporte-routing.module';
import { SuporteComponent } from './suporte.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SuporteComponent],
  imports: [
    CommonModule,
    SuporteRoutingModule,
    MatTabsModule,
    MatIconModule,
    SharedModule,
    MatButtonModule,
  ],
})
export class SuporteModule {}

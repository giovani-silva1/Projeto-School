import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarTitleComponent } from './componentes/toolbar-title/toolbar-title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ToolbarTitleComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [ToolbarTitleComponent],
})
export class SharedModule {}

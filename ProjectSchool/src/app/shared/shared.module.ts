import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarTitleComponent } from './componentes/toolbar-title/toolbar-title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ToolbarTitleComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [ToolbarTitleComponent],
})
export class SharedModule {}

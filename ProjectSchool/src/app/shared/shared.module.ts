import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarTitleComponent } from './componentes/toolbar-title/toolbar-title.component';

@NgModule({
  declarations: [ToolbarTitleComponent],
  imports: [CommonModule],
  exports: [ToolbarTitleComponent],
})
export class SharedModule {}

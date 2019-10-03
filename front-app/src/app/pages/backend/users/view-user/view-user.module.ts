import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user.component';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { NbInputModule, NbCardModule, NbCheckboxModule, NbSelectModule, NbRadioModule } from '@nebular/theme';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [ViewUserComponent],
  imports: [
    CommonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    AngularEditorModule,
    FormsModule,
  ]
})
export class ViewUserModule { }

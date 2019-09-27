import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontendRoutingModule } from './frontend-routing.module';


// Components
import { FrontendComponent } from './frontend.component';
import { CommonModule } from '@angular/common';

// Services

@NgModule({
  imports: [
    CommonModule,
    FrontendRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FrontendComponent,
  ],
  providers: []
})
export class FrontendModule {
}

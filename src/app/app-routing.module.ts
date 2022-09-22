import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
       
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    MatFormFieldModule,MatCardModule,
   ],
  exports: [RouterModule,
    MatFormFieldModule,MatCardModule,MatSelectModule
 ]
})


export class AppRoutingModule { }

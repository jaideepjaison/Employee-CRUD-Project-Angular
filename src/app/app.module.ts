import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNumberComponent } from './Prime_Number/prime-number/prime-number.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PrintListComponent } from './printList/print-list/print-list.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { DispEmpComponent } from './disp-emp/disp-emp.component'; // Import HttpClientModule
import { SharedService } from './shared.service';

@NgModule({
    declarations: [
        AppComponent,
        PrintListComponent,
        DispEmpComponent
       
    ],
    providers: [SharedService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, MatProgressSpinnerModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSliderModule,
        MatIconModule,
        MatDividerModule,
        MatInputModule, MatFormFieldModule,
        MatSnackBarModule,PrimeNumberComponent,MatProgressBarModule,MatTableModule,FormsModule,
        HttpClientModule
    ]
})
export class AppModule { }

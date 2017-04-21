import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MyDatePickerApp} from './sample-date-picker-app';

import {SampleDatePickerNormal} from './sample-date-picker-normal';


import {MyDatePickerModule} from '../src/my-date-picker/my-date-picker.module';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, MyDatePickerModule],
    declarations: [MyDatePickerApp, SampleDatePickerNormal],
    bootstrap: [MyDatePickerApp]
})
export class SampleDatePickerModule { }
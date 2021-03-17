import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AllCurrency, Rate } from './allCurrency';
import { Currency } from './currency';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public allCurrency$: AllCurrency[];
  public currency$: Currency;

  value: string;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.getAllCurrency();
  }

  public checkMode(currencyForm: FormGroup) {

    this.value = document.getElementById('toggleButton').textContent;

    if(this.value === "to PLN") {
      this.toPln(currencyForm)
    } else {
      this.fromPln(currencyForm)
    }
  }

  public getAllCurrency(): void {
    this.currencyService.getAllCurrency().subscribe(
      (response: AllCurrency[]) => {
        this.allCurrency$ = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public toPln(currencyForm: FormGroup) {
     this.currencyService.getValueToPln(currencyForm.value.code, currencyForm.value.quantity).subscribe(
       (response: Currency) => {
         this.currency$ = response;
         document.getElementById('result').textContent = this.currency$.result + " PLN"; 
       }
     )
  }

  public fromPln(currencyForm: FormGroup) {
    this.currencyService.getValueFromPln(currencyForm.value.code, currencyForm.value.quantity).subscribe(
      (response: Currency) => {
        this.currency$ = response;
        document.getElementById('result').textContent = this.currency$.result + " " + this.currency$.code; 
      }
    )
 }
}

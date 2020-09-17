import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'udemy-angular-course';
  constructor(private toastr: ToastrService, 
              private spinner: NgxSpinnerService)
   {}

  ngOnInit() {
    this.showsucces();
    this.showSpinner();
  }

  showsucces() {
    this.toastr.success("Udemy angular 9 projemize hoş geldiniz.",
     "Giriş Başarılı");
  }

  showSpinner(){
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

}

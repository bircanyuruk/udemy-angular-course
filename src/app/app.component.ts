import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  title = 'udemy-angular-corse';
  constructor(private toastr: ToastrService,
    private spinner: NgxSpinnerService) {}

  ngOnInit() {  
    this.showSuccess();    
    this.showSpinner();
  }

  showSuccess() {
    this.toastr.success('Udemy Angular 9 Projemize Hoş Geldiniz...',
     'Giriş Başarılı!');
  }

  showSpinner() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
  }

}
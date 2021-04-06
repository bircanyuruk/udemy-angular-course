import { Component, OnInit } from '@angular/core';
import { allowedNodeEnvironmentFlags } from 'node:process';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  user = {
    name: "Bircan",
    surname: "Yürük",
    job: "Software Developer",
    favorite_place: "Kız Kulesi",
    favorite_place_image: "https://www.uskudar.bel.tr/userfiles/images/5.png",
    isEditable: true,
    number: 5
  };

  type = "text";

  constructor() { }

  ngOnInit(): void { }

  buttonClicked() {
    alert("clicked");
  }

  inputSubmit(value: any) {
    alert(value.target.value + " geldi...");
  }

}

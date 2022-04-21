import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-rest',
  templateUrl: './add-rest.page.html',
  styleUrls: ['./add-rest.page.scss'],
})
export class AddRestPage implements OnInit {

  restForm: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}

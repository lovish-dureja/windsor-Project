import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private apiService: ApiService){
    
  }
  ngOnInit() {
    this.apiService.getData().subscribe((result) => {
      console.log('result =>', result);
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseError } from '@angular/fire/app';
import { AuthService } from 'src/app/lib/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public logInForm: any;
  //
  public isSubmitted: boolean;
  public errorMessage: any;
  public showPassword: boolean;
  public loading: boolean;
  public pswText: string;
  public logo: string = "./../../assets/images/logo.svg";

  //
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
  ) {

    this.isSubmitted = false;
    this.errorMessage = "";
    this.showPassword = false;
    this.loading = false;
    this.pswText = "Enter a valid password - Minimum (6) six characters";

    // Login Form
    this.logInForm = this.fb.group({
      usrEmail: ['', [Validators.required, Validators.email]],
      usrPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  //
  ngOnInit(): void {
  }


  onSubmit() {
  }

}

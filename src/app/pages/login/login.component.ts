import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  formRegistro: FormGroup;

  showRegister: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.formLogin = formBuilder.group({})
    this.formRegistro = formBuilder.group({})
  }

  ngOnInit(){
    this.buildLoginForm();
    this.buildRegisterForm();
  }

  buildLoginForm() {
    this.formLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
    })
  }

  buildRegisterForm() {
    this.formRegistro = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      repitaSenha: [null, [Validators.required, Validators.minLength(6)]],
    })
  }

  showRegisterForm() {
    this.showRegister = !this.showRegister;
  }

  resetFormLogin(){
    this.formLogin.reset();
  }

  resetFormRegistro(){
    this.formRegistro.reset();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }

  async login() {
    const user = this.formLogin.value;
    const userCredendial = await this.authService.signIn(user.email, user.senha);
    await this.router.navigate(['/home']);
    console.log(userCredendial.user?.uid);
    console.log('logado')
    this.resetFormLogin();

  }

  async register() {
    console.log(this.formRegistro)
    const user = this.formRegistro.value;
    console.log(user);

    if (user.senha !== user.repitaSenha) {
      console.log('As senhas não coincidem');
      return;
    }
    const userCredendial = await this.authService.signUp(user.email, user.senha);
    console.log(userCredendial.user?.uid);
    this.openSnackBar('Usuário registrado com sucesso!', '')
    console.log('usuario registrado');
    this.showRegister = !this.showRegister;
    this.resetFormRegistro();
  }

  teste() {
    this.openSnackBar('Usuário registrado com sucesso!', '')
  }
}

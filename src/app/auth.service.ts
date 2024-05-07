import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async signUp(email: string, password: string) {
    try {

      return await this.afAuth.createUserWithEmailAndPassword(email, password);

    } catch (error) {
      console.error('Erro no registro:', error);
      throw error;
    }
  }

  async signIn(email: string, password: string){
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  }

  async signOut() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.error('Erro no logout:', error);
      throw error;
    }
  }
}

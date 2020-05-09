import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly TOKEN_STORAGE_KEY = "user";

  constructor() { }

  storeToken(token: string) {
    localStorage.setItem(this.TOKEN_STORAGE_KEY, token);
  }

  retriveToken(): string {
    return localStorage.getItem(this.TOKEN_STORAGE_KEY);
  }

  deleteToken() {
    return localStorage.removeItem(this.TOKEN_STORAGE_KEY);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.retriveToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  logout() {
    this.deleteToken();
  }
}

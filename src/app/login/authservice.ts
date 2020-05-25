import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenParams } from '../classes/tokenparams';
import { map } from 'rxjs/operators';



@Injectable()

export class AuthService {

  AccessToken: string = 'gS2jiRQTjpf298cbOCZOU7vTs97r_NJvQAHggv00-RfCrm-HjhPbXnXWZ7K9vvMhDdLFYdhPLYMKEG0Nu-lSJ5n0nn8Q0ANDSlffWp6dpx14iw82C5OVGPx32Rnh9f3jPT5mj50I0pJy7f0v8VQIfT--SMA4OBPQtnQ45LPeD3pb8pL_FwOKkK9gSOE4_zg40s-hifkUCpVsbc-MNCnAfyYH51LLR8Q8W45eLOLzUqE';

  constructor(private _http: HttpClient) { }

  private TokenAPI = 'https://localhost:44337';
  
  getToken(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this._http.post(this.TokenAPI + '/token', data, { headers: reqHeader });
  }
}
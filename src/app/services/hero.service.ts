import { Injectable } from '@angular/core';
import { Hero } from '../hero-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  private _url = 'http://localhost:3000/api/superheros';
  getSuperheroById(id: number): Observable<Hero> {
    return this.http.get(this._url + '/' + id) as Observable<Hero>;
  }
  getSuperhero(): Observable<Hero[]> {
    return this.http.get(this._url) as Observable<Hero[]>;
  }

  postSuperhero(hero: Hero): Observable<Hero> {
    return this.http.post(this._url, hero) as Observable<Hero>;
  }

  updateHero(hero: Hero) {
    return this.http.put(this._url + '/' + hero.id, hero) as Observable<Hero>;
  }

  deleteHero(id: number) {
    return this.http.delete(this._url + '/' + id) as Observable<Hero>;
  }
}

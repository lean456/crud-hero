import { Injectable } from '@angular/core';
import { Hero } from '../hero-model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  hero: Observable<Hero[]> = of([]);
  cacheImages: any = [];
  constructor(private http: HttpClient) {}

  private _url = 'https://crud-mock.onrender.com/superheros';
  getSuperheroById(id: number): Observable<Hero> {
    return this.http.get(this._url + '/' + id) as Observable<Hero>;
  }
  getSuperhero(): Observable<Hero[]> {
    this.hero = this.http.get(this._url) as Observable<Hero[]>;
    return this.hero;
  }

  postSuperhero(hero: Hero): Observable<Hero> {
    return this.http.post(this._url, hero) as Observable<Hero>;
  }

  updateHero(hero: Hero) {
    return this.http.put(this._url + '/' + hero.id, hero) as Observable<Hero>;
  }

  deleteHero(id: number) {
    return this.http.delete(this._url + '/' + id);
  }
  getSuperheroImage(name: string): string {
    let image: any = {};
    if (this.cacheImages) {
      image = this.cacheImages.find((item: any) => {
        if (item.name === name) {
          return item.images.md;
        }
      });
    }
    return image ? image.images.md : `assets/not-found.png`;
  }
  getAllSuperheroImage() {
    this.http
      .get('https://akabab.github.io/superhero-api/api/all.json')
      .subscribe((data) => {
        this.cacheImages = data;
      });
  }
  getFilterSuperhero(filterValue: string): Observable<Hero[]> {
    return this.hero.pipe(
      map((data) => {
        const filteredHeroes = data.filter((hero) => {
          return Object.values(hero).some((value) => {
            return (
              typeof value === 'string' &&
              value.toLowerCase().includes(filterValue.toLowerCase())
            );
          });
        });
        return filteredHeroes;
      })
    );
  }
}

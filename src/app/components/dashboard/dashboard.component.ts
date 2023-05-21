import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.heros.subscribe();
  }
  heros = this.heroService.getSuperhero();
  deleteHero(id: number) {
    this.heroService.deleteHero(id).subscribe((data) => {
      this.heros = this.heroService.getSuperhero();
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 5000,
      });
    });
  }
}

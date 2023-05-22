import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  filter = new FormControl('');
  constructor(
    private heroService: HeroService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  heros = this.heroService.getSuperhero();
  deleteHero(id: number): void {
    this.heroService.deleteHero(id).subscribe((data) => {
      this.heros = this.heroService.getSuperhero();
      this._snackBar.open('Hero deleted', undefined, {
        duration: 2000,
      });
    });
  }

  editHero(event: boolean, id: number): void {
    if (event) {
      window.location.href = `/hero/${id}`;
    }
  }

  applyFilter() {
    this.heros = this.heroService.getFilterSuperhero(this.filter.value || '');
  }

  openDialogDelete(event: boolean, id: number, name: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: name,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteHero(id);
      }
    });
  }
}

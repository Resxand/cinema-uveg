import { Component } from '@angular/core';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListComponent, MovieDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Cinema UVEG';
  selectedMovieId: number | null = null;

  onMovieSelected(id: number) { this.selectedMovieId = id; }
  onDetailClosed() { this.selectedMovieId = null; }
}
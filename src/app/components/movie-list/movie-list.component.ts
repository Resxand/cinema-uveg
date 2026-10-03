import { Component, OnInit, inject, output, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  private movieService = inject(MovieService);

  movies = signal<Movie[]>([]);
  loading = signal(true);
  error = signal('');
  imageUrl = environment.tmdbImageUrl;

  movieSelected = output<number>();

  ngOnInit(): void {
    this.movieService.getTopRatedMovies().subscribe({
      next: (res) => { this.movies.set(res.results); this.loading.set(false); },
      error: () => { this.error.set('No se pudieron cargar las películas.'); this.loading.set(false); }
    });
  }

  onSelect(id: number): void {
    this.movieSelected.emit(id);
  }
}
import { Component, EventEmitter, Input, OnChanges, Output, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MovieDetail } from '../../models/movie.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnChanges {
  private movieService = inject(MovieService);

  @Input() movieId: number | null = null;
  @Output() closed = new EventEmitter<void>();

  movie: MovieDetail | null = null;
  imageUrl = environment.tmdbImageUrl;

  ngOnChanges(): void {
    if (this.movieId !== null) {
      this.movieService.getMovieDetail(this.movieId).subscribe(m => this.movie = m);
    }
  }

  close(): void { this.closed.emit(); }
}
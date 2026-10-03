import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MovieDetail, MovieResponse } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private http = inject(HttpClient);
  private baseUrl = environment.tmdbBaseUrl;

  private headers = new HttpHeaders({
    Authorization: `Bearer ${environment.tmdbToken}`,
    accept: 'application/json'
  });

  // Link "Los mejor valorados" -> /movie/top_rated
  getTopRatedMovies(page = 1): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/top_rated`, {
      headers: this.headers,
      params: { language: 'es-MX', page }
    });
  }

  // Link "Detalles" -> /movie/{movie_id}
  getMovieDetail(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.baseUrl}/movie/${id}`, {
      headers: this.headers,
      params: { language: 'es-MX' }
    });
  }
}
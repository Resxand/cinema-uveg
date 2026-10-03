import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(MovieService);
    http = TestBed.inject(HttpTestingController);
  });

  it('debe obtener las películas mejor valoradas', () => {
    service.getTopRatedMovies().subscribe(res => {
      expect(res.results.length).toBe(1);
    });
    const req = http.expectOne(r => r.url.includes('/movie/top_rated'));
    expect(req.request.method).toBe('GET');
    req.flush({ page: 1, results: [{ id: 1, title: 'Test' }], total_pages: 1, total_results: 1 });
  });
});
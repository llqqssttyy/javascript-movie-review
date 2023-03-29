import { MovieItemType } from '../type/movie';
import { $ } from '../utils/domHelper';

import movies from '../domain/Movies';

export default class MovieList extends HTMLElement {
  constructor() {
    super();

    movies.subscribe('movies', this.movieItemRender.bind(this));
    movies.subscribe('unloading', this.render.bind(this));

    this.render();
  }

  render() {
    this.innerHTML = `<ul class="item-list movie-container"></ul>`;
  }

  movieItemRender(movies?: MovieItemType[]) {
    $('.movie-container').insertAdjacentHTML(
      'beforeend',
      this.movieItemTemplate(movies) || ''
    );

    this.seeMoreMovie();
  }

  movieItemTemplate(movies?: MovieItemType[]) {
    return movies
      ?.map(
        ({ id, poster_path, title, vote_average }: MovieItemType) =>
          `<movie-item id="${id}" poster-path="${poster_path}" title="${title}" vote-average="${vote_average}"></movie-item>`
      )
      .join('');
  }

  seeMoreMovie() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          io.unobserve(entry.target);

          if (movies.getIsSearched() && !movies.getIsEnd()) {
            movies.searchMovies(movies.getQuery());
          }
          if (!movies.getIsSearched() && !movies.getIsEnd()) {
            movies.getPopularMovies();
          }
        }
      });
    });

    const newSubject = $('.movie-container').lastElementChild;
    if (newSubject instanceof HTMLElement) io.observe(newSubject);
  }
}
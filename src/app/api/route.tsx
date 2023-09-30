export async function fetchMovies() {
	const res = await fetch(
		'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year',
	);
	const movieData = await res.json();

	return movieData.data.movies;
}

export async function fetchMoviesById(id: any) {
	const res = await fetch(
		`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
	);
	const movieData = await res.json();
	return movieData;
}

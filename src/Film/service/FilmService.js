class FilmService {
	constructor() { }

	url = "https://swapi.dev/api/films/";

	async getFilm() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.status);

			return (await response.json()).results;
		} catch (e) {
			console.error(e);

			return [];
		}
	}

	async getFilmWithReturnedUrl(url) {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error(response.statusText);
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}
}

export default FilmService;
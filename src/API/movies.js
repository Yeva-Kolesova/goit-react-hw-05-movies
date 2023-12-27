import { api } from './api'

export async function getCast(id) {
    const { data } = await api(`movie/${id}/credits`);
    return data;
}

export async function getMovieById(id) {
    const { data } = await api(`movie/${id}`);
    return data;
}

export async function getReviews(id) {
    const { data } = await api(`movie/${id}/reviews`);
    return data;
}

export async function getMovieByQuery(query) {
    const { data } = await api(`search/movie`, {
        params: { query },
    });
    return data;
}

export async function getTrendingMovies() {
    const { data } = await api('trending/all/day');
    return data;
}
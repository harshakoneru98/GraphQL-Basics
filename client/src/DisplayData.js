import React, { useState } from 'react';
import { useQuery, gql, useLazyQuery } from '@apollo/client';

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            age
            username
            nationality
        }
    }
`;

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            id
            name
            yearOfPublication
            isInTheaters
        }
    }
`;

const GET_MOVIE_BY_NAME = gql`
    query Movie($name: String!) {
        movie(name: $name) {
            name
            yearOfPublication
        }
    }
`;

function DisplayData() {
    const [movieSearched, setMovieSearched] = useState('');

    const {
        data: userData,
        loading: userLoading,
        error: userError
    } = useQuery(QUERY_ALL_USERS);

    const {
        data: movieData,
        loading: movieLoading,
        error: movieError
    } = useQuery(QUERY_ALL_MOVIES);

    const [fetchMovie, { data: movieSearchData, error: movieSearchError }] =
        useLazyQuery(GET_MOVIE_BY_NAME);

    if (userLoading || movieLoading) {
        return <h1>Data is loading</h1>;
    }

    if (userError) {
        console.log(userError);
    }

    if (movieError) {
        console.log(movieError);
    }

    if (movieSearchError) {
        console.log(movieSearchError);
    }

    return (
        <div>
            {userData && <h1>List of Users</h1>}
            {userData &&
                userData.users.map((user, i) => {
                    return (
                        <div key={i}>
                            <p>Id: {user.id}</p>
                            <p>Name: {user.name}</p>
                            <p>Username: {user.username}</p>
                            <p>Age: {user.age}</p>
                            <p>Nationality: {user.nationality}</p>
                            <br />
                        </div>
                    );
                })}
            {userData && <h1>List of Movies</h1>}
            {movieData &&
                movieData.movies.map((movie, i) => {
                    return (
                        <div key={i}>
                            <p>Id: {movie.id}</p>
                            <p>Name: {movie.name}</p>
                            <p>Year: {movie.yearOfPublication}</p>
                            <p>In Theaters: {String(movie.isInTheaters)}</p>
                            <br />
                        </div>
                    );
                })}

            <div>
                <input
                    type="text"
                    placeholder="Interstellar..."
                    onChange={(e) => {
                        setMovieSearched(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        fetchMovie({
                            variables: {
                                name: movieSearched
                            }
                        });
                    }}
                >
                    Fetch Data
                </button>
                {movieSearchData && (
                    <div>
                        <p>Name: {movieSearchData.movie.name}</p>
                        <p>Year: {movieSearchData.movie.yearOfPublication}</p>
                        <br />
                    </div>
                )}
            </div>
        </div>
    );
}

export default DisplayData;

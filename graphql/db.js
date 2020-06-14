let movies = [
    {   
        id:"1",
        name: "what",
        age: 23,
        gender: "female",
        score: 1
    },
    {id: "2",
        name: "how",
        age: 223,
        gender: "female",
        score: 221
    },
    {id: "3",
        name: "why",
        age: 2122,
        gender: "efefmale",
        score: 11
    },
{id: "4",
    name: "Seung Hun",
    age: 22,
    gender: "male",
    score: 3
}
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id = id);
    return filteredMovies[0];
}; 

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id != id);
    if (movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else {
        return false;
    }
};

export const addMovie = (name, score) =>{
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};
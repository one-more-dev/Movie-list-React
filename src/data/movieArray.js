import { v4 as id4 } from "uuid";


const movies = [
    {
        id: id4(),
        favorito: false,
        capa:"/projMovies/annihilation.png",
        titulo:"Annihilation",
        genero:"Sci-Fi, Physicological horror",
        lancamento: "2018",
        plataformas: "Netflix"
    },
    {
        id: id4(),
        favorito: false,
        capa:"/projMovies/doiscoelhos.jpg",
        titulo:"2 Rabbits",
        genero:"Action",
        lancamento: "2012",
        plataformas: "Telecine"
    },
    {
        id: id4(),
        favorito: false,
        capa:"/projMovies/pulpfiction.jpg",
        titulo:"Pulp Fiction",
        genero:"Crime",
        lancamento: "1994",
        plataformas: "Prime Video, Telecine, YouTube Movies"
    },
    {
        id: id4(),
        favorito: false,
        capa:"/projMovies/lettersfromiwojima.jpg",
        titulo:"Letters From Iwo Jima",
        genero:"War, Drama",
        lancamento: "2006",
        plataformas: "Prime Video"
    },
    {
        id: id4(),
        favorito: false,
        capa:"/projMovies/thegodfatherpart2.jpg",
        titulo:"The GodFather Part II",
        genero:"Crime, Drama",
        lancamento: "1974",
        plataformas: "Netflix"
    },
    {
        id: id4(),
        favorito: false,
        capa:"/projMovies/spiderverse.jpg",
        titulo:"Spider-Man: Into the Spiderverse",
        genero:"Animated, Action",
        lancamento: "2018",
        plataformas: "Disney+"
    }
];


export default movies;
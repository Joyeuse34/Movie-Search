import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
        {id:1,title:"john wich", release_date:"2020"},
        {id:2,title:"Sanjar wich", release_date:"2020"},
        {id:3,title:"Zilol wich", release_date:"2022"},
    ];

    const handleSearch = () => {

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input"/>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie)=> 
            <MovieCard movie={movie} key={movie.id}/>
            )}
        </div>
    </div>
}


export default Home;
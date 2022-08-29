import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';
function Detail() {
  const [detail, setDetail] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setDetail(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <Movie
         key={movies.id}
         id={movies.id}
         coverImg={movies.medium_cover_image}
         title={movies.title}
         summary={movies.summary}
         genres={movies.genres}
      />
    </div>
  );
}

export default Detail;

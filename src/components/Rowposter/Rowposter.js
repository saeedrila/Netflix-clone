import React, { useEffect, useState } from 'react';
import axios from '../../Axios';
import { imageUrl,API_KEY } from '../../constants/constants';
import './Rowposter.css';
import Youtube from 'react-youtube'

function Rowposter(props) {
  const [movies, setMovies] = useState([]);
  const [urlId,seturlID] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    if (!id) {
      console.log('No movie ID available');
      setError('No movie ID available');
      return;
    }

    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          seturlID(response.data.results[0]);
        } else {
          console.log('Trailer not available');
        }
      })
      .catch((error) => {
       alert('No vdeos available');
      });
  };
  
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
        ))}
      </div>
    {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  );
}

export default Rowposter;

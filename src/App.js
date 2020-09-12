import React from "react";
import PropTypes from "prop-types";
import axious from "axios";
import Movie from "./Movie";
import "./Movie.css";

//App_legacy_200819는 legacy,legacy는 함수형 컴포넌트 -> 클래스형 컴포넌트
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovie = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axious.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({ movies, isLoading: false });
  };
  //이 부분에서 데이터를 가져오고, 이게 끝나면 데이터를 렌더링 한다.
  componentDidMount() {
    this.getMovie();
  }

  render() {
    //state를 통해 값을 가져온다.
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading</span>
          </div>
        ) : (
         <div class="movies">
           { movies.map( movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
         </div>
        )}
      </section>
    );
  }
}

export default App;

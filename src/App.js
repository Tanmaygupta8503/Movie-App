import MovieList from "./MovieList";
import Navbar from "./NavBar";
import React from "react"; 
import './styles.css'
import {movies} from "./moviesData"
export default class App extends React.Component{
  constructor(){
    super();
    //Creating the state object 
    this.state = {
        movies : movies,
        cartCount: 0
    } 
  }

  handleAddStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars <5){
      movies[movieId].stars += 0.5
  }

  this.setState({
      movies
  });
  }

  handleDecStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars > 0){
      movies[movieId].stars -= 0.5;
  }

  this.setState({
      movies
  })

  }

  handleToggleFav = (movie)=> {
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].fav = !movies[movieId].fav;

  this.setState({
      movies
  })
  }

  handleAddtocart = (movie)=> {
  let {movies , cartCount} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].isInCart = !movies[movieId].isInCart;
  
  this.setState({
      movies,
      cartCount: cartCount + (movies[movieId].isInCart ? 1 : -1)
  })
  }

  render(){
    const {movies , cartCount} = this.state;
    return(
      <>
      <Navbar cartCount={cartCount}/>
      <MovieList movies ={movies}
                 onIncStars = {this.handleAddStars}
                 onDecStars = {this.handleDecStars}
                 onClickFav = {this.handleToggleFav}
                 onClickAddtocart = {this.handleAddtocart}/>
      </>

    )
  }
}
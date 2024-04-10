import React from 'react';
import '../style/moviePage.css';
import axios from 'axios';

class Movie extends React.Component{
    constructor(){
        super();
        this.state ={
            movie : [],
            count : 0
        }
     }

    componentDidMount(){
        
        //location API
        axios({
            url : "http://localhost:5500",
            method : 'get',
            headers : {'Content-Type': 'application/JSON'}
        })
        .then(res => {
            this.setState({ movie : res.data.movies})
        })
        .catch((err => console.log(err)));


    }
    

   

    

   render(){

     const { movie , count} = this.state;
     console.log(movie);
    return(
        <div id="section-2">
        <div class="nav-part">
            <div>
                <img src={"./images/logo.png"} alt="" class="logo" />
            </div>
            <a href="#" class="nav-section">
                <span className='homeNav'>Home</span>
                <span className='navList'>TV Shows</span>
                <span className='navList'>Movies</span>
                <span className='navList'>New & Popular</span>
                <span className='navList'>My List</span>
            </a>
            <div><input type="text" placeholder="Search...." class="search-box"/></div>
            <div class="search-icon"><i class="bi bi-search"></i></div>
            <div class="btn-group">
                <button type="button" class="btn btn-black dropdown-toggle dropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </button>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </div>
        </div>
        <div class="movies-heading">Most Popular Movies</div>
            <div class="movies-section">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        {
                            
                            movie?.map((res) =>{
                                return(
                                    <img src={res.title_img} height="250px" />
                                )
                                
                            })
                        }
                    </div>
                    <div class="carousel-item active">
                        {
                            
                            movie?.map((res) =>{
                                return(
                                    <img src={res.title_img} height="250px" />
                                )
                                
                            })
                        }
                    </div>
                    
                    </div>
                    
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
    

        <div class="shows-heading">Most Popular shows</div>
        <div class="shows-section">
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                  {
                            
                            movie?.map((res) =>{
                                return(
                                    <img src={res.title_img} height="250px" />
                                )
                                
                            })
                        }
                </div>
                <div class="carousel-item active">
                  {
                            
                            movie?.map((res) =>{
                                return(
                                    <img src={res.title_img} height="250px" />
                                )
                                
                            })
                        }
                </div>
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    )
}}
export default Movie;

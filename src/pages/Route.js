import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import Movie from "./moviesPage";


const Router = () =>{
    return(
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie" element={<Movie />} />
          </Routes>
        </BrowserRouter>
    )
}

export default Router;
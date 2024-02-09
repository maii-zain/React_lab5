
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PopularMovies from './Pages/ShowFilms';
import MovieDetails from './Pages/MovieDetails';
// import Favorites from './Components/Favorites';
import AppNavbar from './Components/Nav';

import FavoritesPag from './Pages/FavoritesPage';
import SearchResults from './Pages/SearchResults';
import HomePage from './Pages/Home';
import ErNotFound from './Pages/NotFound';
import { LanguageProvider } from './Components/LanguageContext';
// import YourMainComponent from './Components/YourMainComponent';
// import YourApiComponent from './Components/YourApiComponent';
import { LanguageContext } from './Context/LanguageContext';

function App() {

  // ini value
 const [contextlang, setContextlang] = useState("EN");
  return (
    <>
    <LanguageContext>
      <AppNavbar />
      <Routes>
     
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<PopularMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/favorites" element={<FavoritesPag />} /> 
        <Route path="/search" element={<SearchResults />} />
        <Route path={"*"} element={<ErNotFound />} />
      </Routes>
      
      </LanguageContext>
          {/* <YourMainComponent></YourMainComponent>
          <YourApiComponent></YourApiComponent> */}
        
    </>
  );
}

export default App;

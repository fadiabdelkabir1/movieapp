import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './compo/Header';
import FilmGalery from './compo/FilmGalery';

function App() {
  const [SearchValue, setSearchValue] = useState('')
  const [rating, setRating] = useState(1)
  const [havor, setHavor] = useState(null)
  const [fakedata, setfakedata] = useState(
    [
    {
        title:'All Too Well',
        rate:3,
        url:"https://cdn.shopify.com/s/files/1/0011/4651/9637/products/litho_dd015644-cf63-4aa4-ba25-8a0cb901f839_1024x1024.png?v=1636654568",
        desc:'whatever'
    },{
        title:'Avengers End Game',
        rate:5,
        url:"https://m.media-amazon.com/images/I/71UCkI9EWhL._AC_SY606_.jpg",
        desc:'whatever'
    },{
        title:'Avengers Infinity War',
        rate:5,
        url:"https://i.pinimg.com/736x/a7/21/08/a721082bae9c7427b89422de580c8044.jpg",
        desc:'whatever'
    },{
        title:'Harry Potter And The Prisoner Of Azkaban',
        rate:4,
        url:"https://c8.alamy.com/compfr/2c7gk8c/harry-potter-et-le-prisonnier-d-azkaban-affiche-de-film-2c7gk8c.jpg",
        desc:'whatever'
    },{
      title:'Spider-Man : Homecoming',
      rate:3,
      url:"https://www.cinehorizons.net/sites/default/files/affiches/395095099-spider-man-homecoming.jpg",
      desc:'whatever'
  },{
      title:'Iron Man',
      rate:1,
      url:"https://m.media-amazon.com/images/I/51GQ3614bqL._AC_.jpg",
      desc:'whatever'
  }
])




  return (
  <>
    <Header SearchValue={SearchValue} setSearchValue={setSearchValue} 
    rating={rating} setRating={setRating}
    havor={havor} setHavor={setHavor}
    fakedata={fakedata} setfakedata={setfakedata}></Header>
    <FilmGalery SearchValue={SearchValue} rating={rating}  fakedata={fakedata}></FilmGalery>
  </>
  );
}

export default App;

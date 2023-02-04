import PokemonCard from "./PokemonCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";

function App() {
  const [pokemonsDetails, setPokemonsDetails] = useState([]);
  const [ready, setReady] = useState(false);
  let urls = [];

  function getPokemonsDetails(arr) {
    arr.forEach((element) => {
      axios
        .get(element)
        .then((res) => {
          console.log(res);
          setPokemonsDetails((prev) => [...prev, res.data]);
        })
        .catch((err) => console.log(err));
    });
    // console.log(pokemonsDetails);
  }

  useEffect(() => {
    // getPokemons();
    // urls = [];
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=40&offset=0")
      .then((res) => {
        // console.log(res);
        res.data.results.forEach((item) => urls.push(item.url));
        getPokemonsDetails(urls);
        // console.log(getPokemonsDetails(urls));
        setReady(true);
      })
      .catch((err) => console.log(err));
    // console.log(pokemonsDetails);
  }, []);

  return (
    <>
      {/* <Modal /> */}
      <header>
        <h1 className="title">Pokemon Evolution</h1>
        {/* <button>Next Page</button> */}
      </header>
      <main className="app">
        <div className="container">
          <ul className="pokemon-container">
            {ready ? (
              pokemonsDetails
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((item) => (
                  <PokemonCard
                    key={item.id}
                    name={item.name}
                    img={item.sprites.other.dream_world.front_default}
                    types={item.types}
                    id={item.id}
                    abilities={item.abilities}
                    weight={item.weight}
                    height={item.header}
                  />
                ))
            ) : (
              <h1>Loading..</h1>
            )}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;

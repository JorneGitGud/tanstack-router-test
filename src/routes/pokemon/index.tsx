import { Link, createFileRoute } from "@tanstack/react-router";
import { getPokemonList } from "../../api/pokemon";
import { PokemonListItem } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/")({
  component: PokemonList,
  loader: getPokemonList,
});

function PokemonList() {
  const pokemonList = Route.useLoaderData();

  return (
    <div>
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList.map((pokemon: PokemonListItem) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

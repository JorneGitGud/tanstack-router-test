type PokemonDetail = {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
      front_default: string;
    };
  };

  export type PokemonListItem = {
    name: string;
    url: string;
  };
  
  export async function getPokemon(id: string): Promise<PokemonDetail> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await response.json();
  }

export async function getPokemonList(): Promise<PokemonListItem[]> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const data = await response.json();
    return data.results;
}

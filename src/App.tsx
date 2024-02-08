import "./App.css";

// 1. Создать переспользуемый компонент <PokemonRow /> , который принимает объект (ниже)
// в качестве свойства и отображает строку с именем, идентификатором, типом и изображением.

const pokemon = {
  id: 1,
  name: "Bulbasaur",
  types: ["grass"],
  sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
};

// 2. Создать компонент <PokemonList />, который будет принимать массив покемонов и рендерить его в виде списка/таблицы

const pokemonArray = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["grass"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 2,
    name: "Charmander",
    types: ["fire"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 3,
    name: "Squirtle",
    types: ["water"],
    sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  },
];

// 3. Реализовать компонент <PokemonTypeSelector />, который должен фильтровать покемонов по типу:
// Компонент принимает следующие свойства:

type PokemonTypeSelectorProps = {
  selectedType: string;
  selectType: (type: string) => void;
};

// Приложение:

export const App = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
      <div>
        <h1>Элемент списка:</h1>
        {/* <PokemonRow /> */}
      </div>

      <div>
        <h1>Список:</h1>
        {/* <PokemonList /> */}
      </div>
    </main>
  );
};

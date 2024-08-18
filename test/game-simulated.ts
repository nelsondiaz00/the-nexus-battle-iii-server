import { Hero } from "../src/models/hero";
import { Attribute } from "../src/models/attribute";
import { Product } from "../src/models/product";
import { Effect } from "../src/models/effect";

// Crear atributos
const attributes = [
    new Attribute("PODER", 15),
    new Attribute("SALUD", 100),
    new Attribute("ATAQUE", 20),
    new Attribute("DANO", 25),
    new Attribute("CRITICO", 5),
    new Attribute("DEFENSA", 10),
    new Attribute("NIVEL", 1),
    new Attribute("EXPERIENCIA", 0),
];

const effect1 = new Effect("DEFENSA", "RESTA", 10, "JUGADOR", 10, null);
const effect2 = new Effect("ATAQUE", "SUMA", 5, "JUGADOR", 15, null);

// Crear productos
const swordProduct = new Product(
    "Espada de Hierro",
    "Una espada robusta hecha de hierro.",
    "ARMA",
    "GUERRERO",
    "TANQUE",
    "10%",
    [effect1], // Efectos vacíos
    null // Condiciones vacías
);

const shieldProduct = new Product(
    "Escudo de Hierro",
    "Un escudo resistente hecho de hierro.",
    "ARMADURA",
    "GUERRERO",
    "TANQUE",
    "5%",
    [effect2], // Efectos vacíos
    null // Condiciones vacías
);

// Crear héroe
const hero = new Hero(
    "GUERRERO", // type
    "TANQUE", // subtype
    attributes, // experience
    [swordProduct, shieldProduct] // products
);

console.log(hero.products[0].useProduct(hero));
console.log(hero.products[0].effects[0].valueCaused);

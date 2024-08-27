import { Hero } from "../src/models/hero.model";
import { Attribute } from "../src/models/attribute.model";

// Crear atributos
const attributes = [
    new Attribute("critical", 15, 0, 0),
    new Attribute("health", 100, 0, 0),
];

const hero = new Hero("warrior", "tank", attributes, []);

const hero2 = new Hero("wizard", "ice", attributes, []);

console.log(hero);
console.log(hero2);
console.log("HOLAAAAAAAAAAAAAAAA");
hero.attributes["critical"].value = 778;

console.log(hero);
console.log(hero2);

// const effect1 = new Effect("DEFENSA", "RESTA", 10, "JUGADOR", 10, null);
// const effect2 = new Effect("ATAQUE", "SUMA", 5, "JUGADOR", 15, null);

// // Crear productos
// const swordProduct = new Product(
//     "Espada de Hierro",
//     "Una espada robusta hecha de hierro.",
//     "ARMA",
//     "GUERRERO",
//     "TANQUE",
//     "10%",
//     [effect1], // Efectos vacíos
//     null // Condiciones vacías
// );

// const shieldProduct = new Product(
//     "Escudo de Hierro",
//     "Un escudo resistente hecho de hierro.",
//     "ARMADURA",
//     "GUERRERO",
//     "TANQUE",
//     "5%",
//     [effect2], // Efectos vacíos
//     null // Condiciones vacías
// );

// Crear héroe

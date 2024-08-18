import { Product } from "../src/models/product";
import { Effect } from "../src/models/effect";
import { Condition } from "../src/models/condition";
import { Attribute } from "../src/models/attribute";
import { Hero } from "../src/models/hero";
const exampleEffect: Effect = {
  // Configura propiedades de Effect
};

// Ejemplo de instanciación de Condition
const myCondition = new Hero("GUERRERO");

const myProduct = new Product(
  "ARMA", // Tipo de producto: clave de Config.TipoProducto
  "GUERRERO", // Tipo de héroe: clave de Config.TipoHeroe
  "FUEGO", // Subtipo de héroe: clave de Config.SubtipoHeroe
  "Espada de Fuego", // Nombre del ítem
  "Una espada con habilidades de fuego.", // Descripción del ítem
  "25%", // Probabilidad de caída
  [exampleEffect], // Efectos
  [exampleCondition] // Condiciones
);

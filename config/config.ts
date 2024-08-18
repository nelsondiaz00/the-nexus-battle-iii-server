import * as dotenv from "dotenv";
dotenv.config();

export const Config = {
    ProductType: {
        ITEM: process.env.PRODUCT_TYPE_ITEM || "item",
        HABILIDAD: process.env.PRODUCT_TYPE_ABILITY || "habilidad",
        ARMA: process.env.PRODUCT_TYPE_WEAPON || "arma",
        ARMADURA: process.env.PRODUCT_TYPE_ARMOR || "armadura",
    },
    HeroType: {
        GUERRERO: process.env.HERO_TYPE_WARRIOR || "guerrero",
        MAGO: process.env.HERO_TYPE_MAGE || "mago",
        PICARO: process.env.HERO_TYPE_ROGUE || "picaro",
    },
    HeroSubType: {
        TANQUE: process.env.HERO_SUBTYPE_TANK || "tanque",
        ARMAS: process.env.HERO_SUBTYPE_WEAPONS || "armas",
        FUEGO: process.env.HERO_SUBTYPE_FIRE || "fuego",
        HIELO: process.env.HERO_SUBTYPE_ICE || "hielo",
        VENENO: process.env.HERO_SUBTYPE_POISON || "veneno",
        MACHETE: process.env.HERO_SUBTYPE_MACHETE || "machete",
    },
    MathOperation: {
        SUMA: process.env.OPERACION_SUMA || "+",
        RESTA: process.env.OPERACION_RESTA || "-",
        MULTIPLICACION: process.env.OPERACION_MULTIPLICACION || "*",
        DIVISION: process.env.OPERACION_DIVISION || "/",
        MODULO: process.env.OPERACION_MODULO || "%",
        EXPONENCIACION: process.env.OPERACION_EXPO || "^",
    },
    Target: {
        ALIADO: process.env.OBJETIVO_ALIADO || "aliado",
        ENEMIGO: process.env.OBJETIVO_OPONENTE || "enemigo",
        JUGADOR: process.env.OBJETIVO_JUGADOR || "jugador",
    },
    Attribute: {
        PODER: process.env.ATRIBUTO_PODER || "fuerza",
        SALUD: process.env.ATRIBUTO_SALUD || "salud",
        ATAQUE: process.env.ATRIBUTO_ATAQUE || "ataque",
        DANO: process.env.ATRIBUTO_DANO || "dano",
        CRITICO: process.env.ATRIBUTO_CRITICO || "critico",
        DEFENSA: process.env.ATRIBUTO_DEFENSA || "defensa",
        NIVEL: process.env.ATRIBUTO_NIVEL || "nivel",
        EXPERIENCIA: process.env.ATRIBUTO_EXPERIENCIA || "experiencia",
    },
};

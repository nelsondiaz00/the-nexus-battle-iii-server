# gaming-module
This repository is for the The Nexus Battle III game module by PI2.

ESQUEMATIZACIÓN DE EFECTO DE PRODUCTO
Tipo de producto: Arma, item, armadura, habilidad (épica o especial). 
Variable: Poder / Vida / Defensa / Ataque / Daño / Crítico 


Extensiones necesarias para repositorio
Obligatorias:
. Prettier
- ESlint

Opcionales (recomendadas):
- Error Lens

Variables de Héroe en Base de datos

Acceso: inventario, gaming
- tipo-heroe [string]
- subtipo-heroe [string]
- descripcion [string]
- poder [int]
- vida [int]
- defensa [int]
- ataque [int]
- ataque-variable-minimo [int]
- ataque-variable-maximo [int]
- dano-minimo [int]
- dano-maximo [int]
 
Acceso: probabilidades 
- dano-prob [int]
- dano-crit-prob [int]
- evadir-golpe-prob [int]
- resistir-prob [int]
- escapar-prob [int]

Variables necesarias para Gaming-Estadísticas
- dano [int] (temporal)
- critico [int] (temporal)
- tipo-heroe
- subtipo-heroe 

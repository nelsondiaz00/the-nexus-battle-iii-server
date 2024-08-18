# gaming-module-server
This repository is for the The Nexus Battle III game module by PI2.

<br>

**Extensiones necesarias para repositorio**  

Obligatorias:
- Prettier
- ESlint

Opcionales (recomendadas):
- Error Lens  
<br>

**Variables de Héroe en Base de datos** 

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

# SURVEY

## CIBLE: http://10.12.1.129/?page=survey

### PRÉ REQUIS

Aucun.

### CHANGER LA VALEUR D'UN FORMULAIRE

Il est possible d'utiliser la fonction inspecter sur la sélection du grade.<br>
Dans le code html, on peut modifier la valeur pour atteindre une valeur supérieure à 10.

### CORROMPRE LA STATISTIQUE

On peut sélectioner le champ modifiée et le valider pour fausser la statistique et obtenir le flag: `03A944B434D5BAFF05F46C4BEDE5792551A2595574BCAFC9A6E25F67C382CCAA`

## RISQUE

Ce genre de faille peut être utilisée pour falsifier ou corrompre des données statistiques.<br>
Particulièrement efficace sur des moyennes sensibles aux valeurs extrêmes comme c'est le cas ici.

## PROTECTION

- Vérifier les données à la réception dans le backend du site.<br>
- Faire des backup réguliers des bases de données qui permetront une récupération en cas d'attaque.

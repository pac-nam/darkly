# ADMIN PAGE

## CIBLE: http://10.12.1.129/admin

## FAILLE: .htaccess

### PRÉ REQUIS

Si ce n'est pas déjà fait, installer dirb en lançant le script `./install_dirb`.

### SCAN

On peut utiliser dirb pour scanner le site http://10.12.1.129 avec la commande `dirb  http://10.12.1.129 small.txt`.<br>
On peut tomber sur l'url http://10.12.1.29/whatever.<br>
À cet emplacement il y a un fichier htpasswd, dont le contenu est :  `root:8621ffdbc5698829397d97767ac13db3`.

### DECRYPT FILE

On peut décrypter le mot de passe qui est un md5 grâce au site [md5 decrypt](https://md5decrypt.net/), qui donne : `dragon`.<br>
On peut maintenant se connecter sur `http://10.12.1.129/admin`.<br>
User: `root`.<br>
Password: `dragon`.<br>
On obtient donc le flag: `d19b4823e0d5600ceed56d5e896ef328d7a2b9e7ac7e80f4fcdb9b10bcb3e7ff`.

## RISQUE

Accès aux mots de passe dans les fichiers `.htpasswd` qui autorise la connexion à des fichiers ou dossiers protégés.

## PROTECTION

Il suffit de mettre un .htaccess dans le dossier whatever avec un `deny all`.

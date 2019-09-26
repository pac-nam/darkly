# RECOVER PAGE

## CIBLE: http://10.12.1.129/index.php?page=recover

### PRÉ REQUIS

Aucun.

### EXPLOITATION

En regardant le code html, on peut voir un email en dur, on peut donc le modifier et envoyer le formulaire qui nous donne le flag: `1D4855F7337C0C14B6F44946872C4EB33853F40B2D54393FBE94F49F1E19BBB0`

## RISQUE

Il ne faut jamais mettre un email en dur dans le formulaire, car sinon n'importe qui peut le changer et mettre le sien et avoir donc le mot de passe.<br>
Par ailleurs, il est aussi déconseillé de mettre des emails en dur a cause de crawler, qui vont récupérer les emails afin de spam.

## PROTECTION

Pour se prémunir de cette faille, il suffit de mettre un champ avec un formulaire qui demande un email.

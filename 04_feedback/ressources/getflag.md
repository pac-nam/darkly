# FEEDBACK PAGE

## CIBLE: http://10.12.1.129/?page=feedback

## FAILLE: XSS

### PRÉ REQUIS

Aucun.

### RECHERCHE

Sur la page feedback on peut voir un formulaire.<br>
En regardant le code html, on peut voir que lors du submit `validate_form` est appelé.<br>
On peut voir une faute de frappe pour le name `mtxMessage` au lieu de `mtxtMessage` qui permet de mettre le champ message vide.

### EXPLOITATION

Il suffit de mettre une balide HTML dans le name par exemple `script` il est aussi possible de mettre `<script>alert` dans le champ message.<br>
On obtient le flag: `0FBB54BBF7D099713CA4BE297E1BC7DA0173D8B3C21C1811B916A3A86652724E`.

## RISQUE

Les failles XSS peuvent être dangeureuse, injection CSS / JS qui peut permettre dans le cas une injection CSS, de mettre un `display: none` dans le body : `<style>body { display:none!important }</style>`...etc

## PROTECTION

Pour se protéger de cette faille, il suffit de faire un `htmlentities` ou un `trim` sur tous les formulaires.

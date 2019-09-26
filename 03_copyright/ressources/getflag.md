# COPYRIGHT PAGE

## CIBLE: http://10.12.1.129/?page=e43ad1fdc54babe674da7c7b8f0127bde61de3fbe01def7d00f151c2fcca6d1c

### PRÉ REQUIS

Aucun.

### RECHERCHE

En regardant le code HTML, on peut voir qu'en commentaire, il est dit qu'il faut venir de https://www.nsa.gov/ et avoir un USER-AGENT `ft_bornToSec`

### EXPLOITATION

Il suffit donc de lancer cette commande:<br>
`curl -A "ft_bornToSec" --referer "https://www.nsa.gov/"  http://10.12.1.129/\?page=e43ad1fdc54babe674da7c7b8f0127bde61de3fbe01def7d00f151c2fcca6d1c | grep -i flag`
```
-A va changer le USER AGENT.
--referer va changer "d'où on vient".
```

On obtient le flag: `f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188`.

## RISQUE

Aucun.

## PROTECTION

Aucune.

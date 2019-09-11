# Hublot Graduate

![Hublot-Graduate](https://i.imgur.com/eJmzubM.png)

*If you search a reprensentative repository, please check the others*.  


Vous trouverez ici le code source de la présentation de ma soutenance de **fin d'étude**. Elle est à but scolaire, et non professionnel. 

Celle-ci a été réalisée en **D3JS**, c'est un défi personnel que j'ai souhaité relever, afin de proposer quelque chose d'original


Il est possible de retrouver cette présentation en démo sur [graduate.hublot.io](https://graduate.hublot.io)  



## Pourquoi une présentation en D3JS ?

L'objectif est simple, proposer une visualisation graphique d'un projet de manière originale, en s'inspirant de [The Evolution of The Web](http://www.evolutionoftheweb.com/?hl=fr)  

Ce défi a été le fruit d'une longue réflexion avec **Alan Ferronnière**, mon tuteur de mémoire. 

Aucune librairie ne permet la création d'un graphique de ce genre de manière simplifié. Par conséquent, il a été néssaire de concevoir la **totalité du SVG de manière dynamique**, à partir de données sources, en s'appuyant sur la célèbre bibliothèque D3JS.


## Puis-je réutiliser le code de cette présentation ?

Le code D3JS se veut le plus propre, clair, et réutilisable possible. Il reste générique, et utilise un format de données adaptable à votre situation. Il est également totalement indépendant de **VueJS**, le framework utilisé pour cette présentation. Il se base sur la version **v4 de D3**, et doit être compatible avec la v5. 

Il est séparé en plusieurs fichiers, dans le dossier
``` /src/d3```

Les données sont compatibles JSON et regroupés dans le dossier
``` /src/data```
Le main étant le regroupement de la base, c'est à dire la ligne principale, et des features, les lignes se fusionnant avec la base. 

L'ensemble du projet se base sur une échelle de temps, au format ``` DD/MM/YYYY```

La présentation en elle-même et ses comportements ont été réalisés dans un délai court. **Ils n'ont pas vocation à être réutilisés**. Par conséquent, le code est beaucoup moins limpide et réutilisable. Il se devait avant tout d'être pratique lors du développement. 


## Compilation

Ce projet est un projet VueJS classique : 

```
yarn install
yarn serve 
```

Un Dockerfile de production est également à disposition. Le fichier de CI/CD permet de déployer [graduate.hublot.io](https://graduate.hublot.io) via notre Gitlab et notre Kubernetes privé. 

### Licence et réutilisation

Le repo étant en licence BSD-3-Clause, il est tout à fait possible d'utiliser le code D3 à des **fins commerciales**. 

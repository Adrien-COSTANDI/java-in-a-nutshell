\# Référentiel d'audit Java 25



\## Objectif



Ce document sert de référentiel pour auditer un cours utilisant Java 25.



Il ne s'agit pas d'une liste de fonctionnalités que le cours doit obligatoirement enseigner.



L'objectif est de déterminer si :



\* les fonctionnalités utilisées sont correctement expliquées ;

\* le code correspond réellement à Java 25 ;

\* les pratiques enseignées sont pertinentes pour du Java moderne ;

\* les fonctionnalités modernes sont introduites lorsqu'elles apportent une réelle valeur pédagogique ;

\* les anciennes pratiques ne sont pas présentées comme les seules pratiques modernes possibles.



\---



\# 1. Version Java



Vérifier que le cours indique clairement la version Java ciblée.



Le cours doit être cohérent avec Java 25.



Rechercher notamment :



\* instructions de compilation ;

\* configuration Maven ;

\* configuration Gradle ;

\* `pom.xml` ;

\* `build.gradle` ;

\* configuration des IDE ;

\* exemples utilisant une syntaxe correspondant à une autre version.



\### Attention



Ne pas considérer automatiquement du code Java 8, 11, 17 ou 21 comme incorrect.



Une fonctionnalité ancienne reste généralement valide en Java 25.



Le problème apparaît lorsque :



\* une ancienne pratique est présentée comme la meilleure pratique moderne sans justification ;

\* le cours affirme qu'une fonctionnalité moderne n'existe pas ;

\* une fonctionnalité a changé de comportement ;

\* une API obsolète est utilisée sans explication ;

\* la syntaxe montrée ne correspond pas à la version annoncée.



\---



\# 2. Syntaxe et fondamentaux



Vérifier la qualité des explications concernant :



\* variables ;

\* types primitifs ;

\* références ;

\* opérateurs ;

\* conversions ;

\* conditions ;

\* boucles ;

\* méthodes ;

\* paramètres ;

\* valeurs de retour ;

\* portée ;

\* classes ;

\* objets ;

\* constructeurs ;

\* packages ;

\* imports ;

\* interfaces ;

\* héritage ;

\* polymorphisme ;

\* encapsulation.



Vérifier que les explications correspondent au comportement réel du langage.



\---



\# 3. Types et immutabilité



Évaluer :



\* distinction entre types primitifs et références ;

\* `null` ;

\* autoboxing et unboxing ;

\* égalité `==` versus `equals` ;

\* `hashCode` ;

\* immutabilité ;

\* effets de bord ;

\* conception d'objets immuables.



Identifier les explications susceptibles de créer des modèles mentaux incorrects.



\---



\# 4. Classes et conception objet



Évaluer :



\* responsabilité des classes ;

\* encapsulation ;

\* visibilité ;

\* constructeurs ;

\* composition ;

\* héritage ;

\* interfaces ;

\* polymorphisme ;

\* méthodes `final` ;

\* classes `final` ;

\* méthodes statiques ;

\* cohésion ;

\* couplage.



Ne pas présenter l'héritage comme solution par défaut lorsqu'une composition est plus appropriée.



\---



\# 5. Interfaces



Vérifier l'explication de :



\* contrats ;

\* implémentations ;

\* méthodes par défaut ;

\* méthodes statiques ;

\* interfaces fonctionnelles.



Vérifier que les interfaces sont utilisées pour représenter des abstractions pertinentes et non uniquement pour démontrer la syntaxe.



\---



\# 6. Records



Java moderne permet d'utiliser les `record`.



Vérifier lorsque leur utilisation est pertinente :



\* présentation du concept ;

\* différence avec une classe classique ;

\* immutabilité superficielle ;

\* composants ;

\* constructeur compact ;

\* méthodes ;

\* égalité ;

\* utilisation comme objets de données.



Ne pas présenter les records comme remplaçant toutes les classes.



\---



\# 7. Sealed classes et interfaces



Vérifier la compréhension de :



\* `sealed` ;

\* `non-sealed` ;

\* `permits` ;

\* relation avec l'héritage ;

\* utilisation avec le pattern matching.



Une explication pédagogique doit montrer pourquoi un type scellé peut être utile.



\---



\# 8. Pattern matching



Évaluer les fonctionnalités modernes de pattern matching lorsqu'elles sont pertinentes.



Notamment :



\* pattern matching avec `instanceof` ;

\* pattern matching avec `switch` ;

\* type patterns ;

\* record patterns ;

\* exhaustive switch ;

\* interactions avec les types `sealed`.



Vérifier que le cours explique le gain par rapport aux anciennes constructions.



\---



\# 9. Switch moderne



Évaluer :



\* switch expressions ;

\* `yield` ;

\* exhaustivité ;

\* pattern matching ;

\* gestion de `null` lorsque pertinente.



Éviter de présenter uniquement l'ancien modèle :



```java

switch (value) {

&#x20;   case A:

&#x20;       result = ...;

&#x20;       break;

}

```



lorsqu'une switch expression rend l'exemple plus clair.



\---



\# 10. Text blocks



Vérifier l'utilisation appropriée des text blocks lorsque le cours manipule :



\* JSON ;

\* SQL ;

\* XML ;

\* HTML ;

\* chaînes multilignes.



Ne pas introduire cette fonctionnalité uniquement pour montrer qu'elle existe.



\---



\# 11. Collections



Évaluer :



\* `List` ;

\* `Set` ;

\* `Map` ;

\* choix de l'interface ;

\* mutabilité ;

\* collections immuables ;

\* complexité algorithmique ;

\* `equals` / `hashCode`.



Vérifier que le cours distingue correctement :



```text

List

Set

Map

```



et explique pourquoi choisir l'une plutôt qu'une autre.



\---



\# 12. Generics



Évaluer :



\* types génériques ;

\* méthodes génériques ;

\* bornes ;

\* wildcards ;

\* covariance / invariance ;

\* PECS lorsque pertinent ;

\* type erasure.



Pour un cours débutant, ne pas exiger une explication complète de type erasure immédiatement.



Évaluer la profondeur en fonction du niveau.



\---



\# 13. Lambdas et interfaces fonctionnelles



Vérifier :



\* expressions lambda ;

\* interfaces fonctionnelles ;

\* références de méthodes ;

\* captures de variables ;

\* portée ;

\* effets de bord.



Ne pas utiliser des lambdas complexes dans une première introduction aux lambdas.



\---



\# 14. Stream API



Évaluer :



\* pipeline ;

\* opérations intermédiaires ;

\* opérations terminales ;

\* `map` ;

\* `filter` ;

\* `flatMap` ;

\* `reduce` ;

\* collectors ;

\* lazy evaluation.



Vérifier que le cours explique la différence entre :



```text

Stream

Collection

```



et ne présente pas Stream comme un simple remplacement systématique des boucles.



Identifier les pipelines excessivement complexes.



\---



\# 15. Optional



Évaluer :



\* objectif ;

\* absence de valeur ;

\* `map` ;

\* `flatMap` ;

\* `orElse` ;

\* `orElseGet` ;

\* `orElseThrow`.



Éviter de présenter `Optional` comme devant être utilisé partout.



Identifier notamment :



\* `Optional` dans les champs lorsque cela n'est pas justifié ;

\* `Optional` comme paramètre lorsque cela complique inutilement l'API ;

\* appels dangereux à `get()`.



\---



\# 16. Exceptions



Évaluer :



\* exceptions checked ;

\* exceptions unchecked ;

\* propagation ;

\* traitement ;

\* création d'exceptions ;

\* messages d'erreur ;

\* try-with-resources.



Vérifier que le cours n'encourage pas :



```java

catch (Exception e) {

&#x20;   // ignore

}

```



ou des blocs `catch` silencieux sans justification.



\---



\# 17. Ressources



Lorsque le cours utilise :



\* fichiers ;

\* flux ;

\* sockets ;

\* connexions ;

\* ressources externes ;



vérifier l'utilisation appropriée de :



```java

try-with-resources

```



Vérifier également la gestion correcte des exceptions et la fermeture des ressources.



\---



\# 18. Date et heure



Pour les nouvelles applications, privilégier l'API `java.time` lorsque pertinente :



\* `Instant` ;

\* `LocalDate` ;

\* `LocalTime` ;

\* `LocalDateTime` ;

\* `ZonedDateTime` ;

\* `Duration` ;

\* `Period`.



Identifier l'utilisation de :



```java

java.util.Date

java.util.Calendar

```



comme pratique moderne par défaut.



Une utilisation historique peut être acceptable si elle est explicitement contextualisée.



\---



\# 19. Fichiers et I/O



Évaluer notamment :



\* `Path` ;

\* `Files` ;

\* NIO.2 ;

\* gestion des ressources ;

\* encodage ;

\* exceptions ;

\* chemins relatifs et absolus.



Éviter les exemples qui dépendent implicitement du système d'exploitation sans explication.



\---



\# 20. Modules



Le système de modules Java peut être pertinent dans un cours avancé.



Évaluer :



\* `module-info.java` ;

\* `requires` ;

\* `exports` ;

\* encapsulation forte.



Ne pas considérer l'absence de modules comme un défaut dans un cours débutant ou intermédiaire si le sujet ne fait pas partie des objectifs.



\---



\# 21. Concurrence



Pour un cours traitant de concurrence, évaluer :



\* threads ;

\* synchronisation ;

\* visibilité mémoire ;

\* atomicité ;

\* executors ;

\* concurrent collections ;

\* `CompletableFuture` ;

\* structured concurrency si pertinente ;

\* virtual threads si pertinente.



Une explication de concurrence doit éviter de réduire le sujet à :



```java

new Thread(...).start();

```



sans expliquer les problèmes associés.



\---



\# 22. Virtual threads



Évaluer les virtual threads lorsque le cours traite de concurrence moderne.



Vérifier que le cours explique leur objectif :



\* permettre une concurrence importante avec un coût faible par thread ;

\* particulièrement adaptés aux tâches bloquantes/I/O ;

\* ne remplacent pas automatiquement toutes les stratégies de concurrence ;

\* ne rendent pas le code CPU-bound plus rapide par magie.



Ne pas présenter les virtual threads comme une solution universelle.



\---



\# 23. Structured concurrency



Si le cours traite de concurrence avancée, vérifier si les explications sont cohérentes avec l'état des API de Java 25.



Ne jamais présenter comme API finalisée une fonctionnalité encore expérimentale ou préliminaire sans le signaler.



Lorsque le statut d'une fonctionnalité est important, le signaler explicitement dans le rapport.



\---



\# 24. Scoped values



Pour les sujets de concurrence avancée, évaluer la pertinence des Scoped Values.



Vérifier :



\* contexte partagé de manière contrôlée ;

\* différence avec les variables globales ;

\* différence avec `ThreadLocal` ;

\* pertinence dans les applications concurrentes modernes.



Ne pas introduire le concept trop tôt dans un cours débutant.



\---



\# 25. API modernes et obsolescence



Identifier les APIs anciennes lorsque des alternatives modernes sont pertinentes.



Exemples de domaines à examiner :



\* `java.util.Date` / `Calendar` → `java.time` ;

\* anciennes API I/O → NIO.2 lorsque pertinent ;

\* concaténations de chaînes excessives → alternatives adaptées au contexte ;

\* synchronisation manuelle → abstractions de concurrence appropriées lorsque pertinentes.



Ne jamais qualifier automatiquement une API ancienne d'erreur.



\---



\# 26. Dépendances



Pour Maven et Gradle, vérifier :



\* version Java déclarée ;

\* versions des plugins ;

\* dépendances ;

\* versions obsolètes ;

\* dépendances inutiles ;

\* cohérence entre le texte et le build.



Ne pas recommander une mise à jour simplement parce qu'une version plus récente existe.



\---



\# 27. Tests



Évaluer :



\* lisibilité ;

\* isolation ;

\* noms des tests ;

\* assertions ;

\* cas nominaux ;

\* cas limites ;

\* exceptions ;

\* tests de comportement.



Ne pas imposer arbitrairement un pourcentage de couverture.



La couverture doit être considérée comme un indicateur et non comme une preuve de qualité.



\---



\# 28. Documentation



Évaluer :



\* commentaires utiles ;

\* Javadoc lorsque pertinente ;

\* documentation des API publiques ;

\* exemples ;

\* explications des décisions techniques.



Ne pas recommander des commentaires qui répètent simplement le code.



\---



\# 29. Qualité pédagogique du code



Un exemple destiné à l'apprentissage doit généralement privilégier :



\* simplicité ;

\* lisibilité ;

\* progression ;

\* explicitation ;

\* cohérence avec les concepts déjà enseignés.



Ne pas optimiser prématurément un exemple pédagogique.



Un exemple volontairement simple n'est pas automatiquement une mauvaise pratique.



\---



\# 30. Fonctionnalités Java 25



Lorsqu'une fonctionnalité spécifique à Java 25 est rencontrée :



1\. Identifier précisément la fonctionnalité.

2\. Vérifier son statut dans Java 25.

3\. Vérifier si elle est pertinente pour le niveau du cours.

4\. Vérifier que le cours indique son statut lorsque nécessaire.

5\. Vérifier que les exemples utilisent correctement la syntaxe.

6\. Vérifier que la fonctionnalité n'est pas présentée comme obligatoire.



\### Règle importante



Ne jamais affirmer qu'une fonctionnalité est définitive, expérimentale, preview ou standard sans vérification fiable.



Si l'information n'est pas certaine, le rapport doit indiquer :



> Statut à vérifier.



\---



\# 31. Règle de contextualisation



Pour chaque problème Java identifié, déterminer son contexte :



\* débutant ;

\* intermédiaire ;

\* avancé ;

\* production ;

\* exemple pédagogique ;

\* exercice ;

\* projet.



Une pratique acceptable dans un exercice d'introduction peut être inadaptée dans un projet de production.



\---



\# 32. Format des observations



Chaque observation Java doit suivre autant que possible ce format :



\### \[PRIORITÉ] Titre



\*\*Fichier :\*\* `chemin/note.md`



\*\*Concept :\*\* concept Java concerné.



\*\*Observation :\*\*



Description factuelle du contenu observé.



\*\*Catégorie :\*\*



\* Erreur

\* Obsolescence

\* Mauvaise pratique

\* Simplification pédagogique

\* Suggestion



\*\*Impact :\*\*



Conséquence technique ou pédagogique.



\*\*Recommandation :\*\*



Modification concrète proposée.



\*\*Confiance :\*\*



\* élevée ;

\* moyenne ;

\* faible.



\---



\# 33. Règles anti-hallucination



Le modèle doit respecter les règles suivantes :



\* Ne jamais inventer une fonctionnalité Java.

\* Ne jamais inventer une syntaxe.

\* Ne jamais inventer le comportement d'une API.

\* Ne jamais déclarer une API obsolète sans justification.

\* Ne jamais déclarer une fonctionnalité Java 25 comme obligatoire.

\* Ne jamais inventer le contenu d'une note.

\* Ne jamais affirmer avoir vérifié une information externe si aucune vérification n'a été effectuée.

\* Lorsque le statut d'une fonctionnalité est incertain, le signaler.

\* Préférer une observation prudente à une affirmation fausse.



\---



\# 34. Principe général



Le meilleur cours Java 25 n'est pas celui qui utilise le plus de fonctionnalités modernes.



Le meilleur cours est celui qui :



\* enseigne correctement les fondamentaux ;

\* construit progressivement les modèles mentaux ;

\* utilise les fonctionnalités modernes lorsqu'elles apportent une valeur réelle ;

\* distingue clairement les concepts fondamentaux des concepts avancés ;

\* montre du code lisible ;

\* explique les compromis ;

\* prépare progressivement l'apprenant à du Java professionnel.




---
name: audit-java-course
description: Analyse un vault Obsidian contenant un cours de Java 25 afin d'évaluer sa qualité technique, pédagogique, son accessibilité et sa cohérence.
---

# Audit d'un cours Java 25

## Objectif

Auditer un vault Obsidian contenant un cours de programmation Java 25.

Évaluer :

- l'exactitude technique ;
- l'utilisation appropriée de Java 25 ;
- les bonnes pratiques Java ;
- la progression pédagogique ;
- la clarté des explications ;
- la qualité des exemples et exercices ;
- l'accessibilité ;
- la cohérence du vault Obsidian ;
- la navigation entre les notes.

Ne jamais modifier les notes pendant un audit, sauf demande explicite de l'utilisateur.

## Méthode

### 1. Explorer le vault

Avant de conclure :

1. Examiner la structure des dossiers.
2. Identifier les fichiers Markdown du cours.
3. Identifier les exercices, corrections et projets.
4. Examiner les liens Obsidian.
5. Déterminer l'ordre pédagogique apparent.
6. Repérer les notes orphelines, doublons et liens cassés.

Ne jamais tirer de conclusion générale après l'analyse d'une seule note.

### 2. Cartographier le cours

Identifier :

- chapitres ;
- sous-chapitres ;
- concepts Java ;
- prérequis ;
- exercices ;
- projets ;
- évaluations ;
- relations entre concepts.

Rechercher les ruptures de progression :

- concept utilisé avant d'être expliqué ;
- prérequis absent ;
- exercice trop difficile ;
- concept introduit puis jamais réutilisé ;
- répétitions inutiles.

### 3. Audit technique

Pour chaque problème, distinguer :

**Erreur**  
Le contenu est techniquement faux.

**Information obsolète**  
Le contenu peut être historiquement valide mais n'est plus adapté à Java moderne.

**Mauvaise pratique**  
Le code fonctionne mais constitue un mauvais choix professionnel ou pédagogique.

**Simplification pédagogique**  
Le contenu est volontairement simplifié et acceptable compte tenu du niveau des apprenants.

Ne jamais qualifier automatiquement une simplification d'erreur.

Utiliser `java25.md` pour les critères Java.

### 4. Audit pédagogique

Évaluer :

- progression ;
- prérequis ;
- charge cognitive ;
- clarté ;
- exemples ;
- exercices ;
- contextualisation ;
- feedback ;
- progression de difficulté.

Pour chaque notion importante, rechercher idéalement :

1. une explication ;
2. un exemple ;
3. une mise en pratique ;
4. une vérification de compréhension.

### 5. Audit d'accessibilité

Utiliser `accessibility.md`.

Examiner notamment :

- longueur des paragraphes ;
- complexité des phrases ;
- vocabulaire ;
- termes techniques non définis ;
- structure des titres ;
- lisibilité du code ;
- connaissances implicites ;
- clarté des consignes ;
- ambiguïtés ;
- charge cognitive.

L'objectif n'est pas de simplifier excessivement le contenu.

### 6. Audit du vault Obsidian

Examiner :

- liens internes cassés ;
- liens manquants ;
- navigation ;
- titres ;
- structure des dossiers ;
- notes orphelines ;
- doublons ;
- conventions de nommage ;
- tags ;
- informations difficiles à retrouver.

### 7. Notation

Attribuer une note de 0 à 10 pour :

| Dimension | Note |
|---|---:|
| Exactitude technique | /10 |
| Modernité Java 25 | /10 |
| Bonnes pratiques Java | /10 |
| Progression pédagogique | /10 |
| Clarté | /10 |
| Exercices et pratique | /10 |
| Accessibilité | /10 |
| Cohérence du vault | /10 |
| Navigation | /10 |

La note globale ne doit pas masquer une faiblesse critique.

### 8. Priorisation

Classer les problèmes :

- 🔴 Critique : empêche ou compromet fortement l'apprentissage.
- 🟠 Important : impact significatif sur la compréhension ou la qualité.
- 🟡 Amélioration : problème réel mais non bloquant.
- 🔵 Suggestion : amélioration facultative.

### 9. Rapport

Utiliser `report-template.md`.

Chaque problème doit mentionner autant que possible :

- fichier ;
- section ;
- concept ;
- problème ;
- impact ;
- priorité ;
- recommandation concrète.

Ne jamais produire de critique vague.

### Règles

- Ne jamais inventer le contenu d'une note.
- Examiner le code avant de déclarer qu'il est incorrect.
- Distinguer erreur, obsolescence, mauvaise pratique et simplification.
- Ne pas transformer une préférence personnelle en règle Java.
- Ne pas recommander une fonctionnalité uniquement parce qu'elle est nouvelle.
- Tenir compte du niveau des apprenants.
- Donner des recommandations concrètes.
- Citer les fichiers concernés.
- Signaler les incertitudes.

### Comportement

Si l'utilisateur demande une analyse complète, effectuer l'audit du vault.

Si l'utilisateur demande l'analyse d'une note, analyser cette note et signaler les dépendances avec d'autres notes.

Si l'utilisateur demande les corrections prioritaires, retourner uniquement les problèmes classés par priorité.

Si l'utilisateur demande de corriger le cours, commencer par proposer un plan de corrections et demander confirmation avant toute modification massive.

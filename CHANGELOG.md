# Changelog
# Regles de gestion de configuration
# Passage à v1.0.1 (PATCH)
Modifications mineures rétrocompatibles:
- Corrections de bugs (sans impact sur l'API ou les fonctionnalités existantes)
- Mises à jour de documentation (ex : corrections de typos)
- Optimisations internes (ex : amélioration des performances, refactoring de code)
- Mises à jour de dépendances mineures (ex : patchs de sécurité dans des bibliothèques tierces)
  
# Passage à v1.1.0 (MINOR)
Ajouts rétrocompatibles :
- Nouveautés fonctionnelles (sans casser l’existant)
- Améliorations non breaking des fonctionnalités existantes
À exclure :
- Toute modification qui casse la compatibilité ascendante (même minime)

# Passage à v2.0.0 (MAJOR)
Modifications non rétrocompatibles :
- Suppression ou renommage de fonctions/méthodes (ex : ancienne_fonction() → nouvelle_fonction()).
- Modification de la signature d’une fonction (ex : fonction(param1) → fonction(param1, param2_obligatoire)).
- Changement de format de données (ex : passage d’un JSON { "id": 1 } à { "user_id": 1 }).
- Mise à jour d’une API (ex : suppression d’un endpoint /api/v1/old-endpoint).
- Refonte architecturale (ex : passage de monolithique à microservices).
- Changements de dépendances majeures (ex : passage de Python 3.8 à Python 4.0 ou de React 17 à React 18 avec des breaking changes).
- Changements de licence (ex : passage de MIT à GPL).
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## v1.0.0 (17/07/2026)
- **Ajouts** :
  - Première version fonctionnelle du générateur de prompts

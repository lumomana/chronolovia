# Chronolovia pour chronologie marchée

Une application mobile innovante qui synchronise votre podomètre avec la **une chronologie**, partez à la découverte d'un moment d'histoire en marchant !.

## 🎯 Concept

L'application repose sur une idée simple mais puissante : **parcourir le temps en marchant**. En marchant, vous progressez dans une des chronologies de la bibliothèque , découvrant des jalons historiques majeurs. Chaque jalon atteint déclenche une alerte sonore aléatoire et haptique pour vous immerger dans cette expérience unique.

### Synchronisation
- **1 million d'années** = **1000 mètres** (configurable)
- **1 pas** ≈ **0,75 mètre** ≈ **750 ans**
- **100 pas** = ~75 000 ans
- **1000 pas** = ~750 000 ans

## 📱 Fonctionnalités

### Écran d'accueil
- Compteur circulaire animé affichant les pas en temps réel
- Affichage de la période historique actuelle
- Prochain jalon à atteindre avec distance restante
- Statut du podomètre
- Boutons pour démarrer/arrêter la marche et réinitialiser

### Écran des jalons
- Historique complet des jalons atteints
- Informations détaillées : titre, date, catégorie, description
- Liens vers des ressources externes (articles, vidéos, etc.)
- Affichage en ordre chronologique inverse (du plus récent au plus ancien)

### Écran des paramètres
- Configuration de la distance totale (100m, 500m, 1000m, 2000m)
- Contrôle du volume sonore
- Contrôle de l'intensité des vibrations
- Activation/désactivation des alertes
- Informations sur l'application

## 🏛️ Jalons inclus

L'application contient **177 jalons** couvrant :
- **Préhistoire** : Maîtrise du feu (-1M BC), outils lithiques, art pariétal
- **Protohistoire** : Domestication, sédentarisation, premières civilisations
- **Antiquité** : Égypte, Mésopotamie, Grèce, Rome
- **Moyen Âge** : Phéniciens, Olmèques, civilisations asiatiques
- **Époque moderne** : Résistances, révolutions, innovations

Chaque jalon inclut :
- Date précise (année BC/AD)
- Description et contexte historique
- Catégorie (civilisation, culture, artefact)
- Région géographique
- Liens vers des ressources externes

## 🎨 Design

L'interface respecte les principes de design iOS/Android modernes :
- **Palette archéologique** : Terracotta (#C1440E), crème (#F5F1E8), or (#D4AF37)
- **Typographie claire** : Hiérarchie visuelle bien définie
- **Interactions fluides** : Animations subtiles, feedback haptique
- **Accessibilité** : Textes lisibles, contrôles tactiles larges
- **Mode sombre** : Support complet pour les préférences système

## 🚀 Démarrage

### Installation
```bash
cd cam-pedometer-app
pnpm install
```

### Développement
```bash
pnpm dev
```

### Prévisualisation
- **Web** : Accédez au lien fourni par le serveur de développement
- **iOS/Android** : Scannez le code QR avec Expo Go

## 📋 Architecture

### Structure des données
- **Milestones** : 177 jalons archéologiques avec métadonnées complètes
- **PedometerState** : État du podomètre (pas, distance, jalons atteints)
- **AppSettings** : Préférences utilisateur (distance, volume, vibrations)

### Hooks personnalisés
- **`usePedometer`** : Gestion complète du podomètre et synchronisation
- **`useMilestoneAlerts`** : Alertes sonores (baleines) et haptiques

### Écrans
- **Home** : Écran principal avec compteur et statut
- **Milestones** : Historique des jalons atteints
- **Settings** : Paramètres et configuration

## 🔧 Technologies

- **React Native** 0.81 avec Expo SDK 54
- **TypeScript** pour la sécurité des types
- **NativeWind** (Tailwind CSS) pour le styling
- **expo-sensors** pour le podomètre
- **expo-haptics** pour les vibrations
- **expo-audio** pour les sons
- **AsyncStorage** pour la persistance locale

## 📊 Données

Les jalons sont extraits des fichiers CSV ou JSON des chronologies disponibles et incluent :
- Titre et description
- Dates de début et fin
- Catégorie (civilisation, culture, artefact)
- Région géographique
- Liens vers ressources externes
- Images (quand disponibles)

## 🎯 Prochaines étapes

- [ ] Tests sur iOS et Android réels
- [ ] Optimisation des performances
- [ ] ajout de chronologies dans la bibliothèque intégrée à l'application
- [ ] développer la possibilité pour l'utilisateurE d'ajouter une/des chronologies à la bibliothèque.


## 📝 Licence

Business Source License 1.1

## 🙏 Crédits

- **idée** : David Vial (librairiemobile.org)
- **hébergement des chronologies disponibles** : Tiki-Toki.com Timeline
- **sons** : freesounds.org
- **design** : Inspiré par les principes HIG d'Apple
- **conception & développement** : lumomana + claude

## 📧 Support

Pour toute question ou suggestion, consultez : [librairiemobile.org](https://librairiemobile.org/feuilleCAM.html).

---

**chronolovia** chronologies marchées _ partez à la découverte d'un moment d'histoire en marchant !

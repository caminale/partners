# BUDDLER #

<h1 align="center">
	<br>
	<br>
	<img width="360" src="https://www.rse-groupeinseec.com/wp-content/uploads/2015/10/Logo-carre3-300x300.jpg">
	<br>
	<br>
	<br>
</h1>

# :books: Buddler Documentation
- :wrench: [Installation](#installation)
  + [IOS](#ios)
    * [Getting started](#started)
  + [Android](#android)
- :zap: [Server](#server)
  + [Meteor](#meteor)
    * [Getting started](#started)
    * [TUTO fb connection](#fbco)
        
        
        
  + [AWS](#aws)
- :blue_book: [commande utiles](#cmd)
  + [Android](#android)
  + [IOS](#ios)
- :warning: [IOS problèmes](#IOS_problemes)


# :wrench: Installation

##IOS
 :warning: Toujours avoir xcode et son mac à jour !
 
###Getting started
- Suivre les instructions pour les  
[installations ](https://facebook.github.io/react-native/docs/getting-started.html)

 - Pour télecharger le projet sur bitbucket : 
    `git clone https://camelotte@bitbucket.org/camelotte/buddler_multi.git`
 - Pour commencer sur de bonnes bases, tout cleaner le projet : 
`rm -rf $TMPDIR/react-* && watchman watch-del-all && rm -rf ios/build/ModuleCache/* && rm -rf node_modules/ && npm cache clean --force && npm i`
 -ouvrir xcode du terminal : 
     `cd ios && open Buddler.xcodeproj`
 -choisir son simulateur : `react-native run-ios --simulator="iPhone 4s"`

 

##Android

# :zap: Server
##Meteor
[installation](https://www.meteor.com/install)

###Getting started
Pour créer un projet meteor et le connecter à react-native, cliquez
[ici ](https://medium.com/differential/connecting-react-native-and-meteor-cccdb0df29e3
)
###TUTO fb connection
Explique de A à Z le setup IOS + Android pour l'authentification avec meteor à facebook 
[tuto ](https://medium.com/differential/react-native-meteor-oauth-with-facebook-3d1346d7cdb7)

#IOS problèmes
Ouvrir xcode, ouvrir le folder librairies, ouvrir le dossier AIRMaps.xcodeproj
et y insérer dans le fichier airmap.m ligne 104: 
```objective-c
    if ([subview isKindOfClass:[AIRMapMarker class]]) {
        ((AIRMapMarker *)subview).map = self;
        [self addAnnotation:(id <MKAnnotation>) subview];
    }

    else if ([subview isKindOfClass:[AIRMapCircle class]]) {
        ((AIRMapCircle *)subview).map = self;
        [self addOverlay:(id<MKOverlay>)subview];
        }
```


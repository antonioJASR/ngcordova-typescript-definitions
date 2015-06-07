ngcordova-typescript-definitions
============================

Typescript definitions for NgCordova (http://ngcordova.com/)

ngcordova.d.ts is the main file with the main APIs of the Ionic framework defined.

NOTE: Work in progress

## Plugins

### $cordovaActionSheet

The Action Sheet plugin shows a native sheet of options the user can choose from. iOS uses the native UIActionSheet. Android uses the native AlertDialog.

http://ngcordova.com/docs/plugins/actionSheet/

Example

```typescript
class IndexController {
    constructor($scope,
        $cordovaActionSheet: ngcordova.IActionSheet
    ) {
        $cordovaActionSheet.show({
            title: 'Would you a cup of coffee?',
            buttonLabels: ['yes', 'no'],
        }).then((result) => {
            // result == 0  yes, otherwise no
        });
    }
}

angular.module('app').controller('Index', IndexController);
```

### $cordovaAppAvailability

The AppAvailability plugin allows you to check if an app is installed on the user's device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.

#### Schemes

Twitter:

* iOS: twitter://
* Android: com.twitter.android

Facebook:

* iOS: fb://
* Android: com.facebook.katana

WhatsApp:

* iOS: whatsapp://
* Android: com.whatsapp


http://ngcordova.com/docs/plugins/appAvailability/

Example:

```typescript
class IndexController {
      constructor($scope,
          $cordovaAppAvailability: ngcordova.IAppAvailability
      ) {
          $cordovaAppAvailability.check('fb://')
              .then(() => {
                  // available
              })
              .catch(() => {
                  // not available
              })
      }
  }

angular.module('app').controller('Index', IndexController);
```

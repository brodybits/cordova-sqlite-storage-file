# cordova-sqlite-storage-file

Resolves SQLite database path similar to cordova-sqlite-storage

with initial implementation on iOS & macOS ("osx") with a temporary and deprecated `location: 2` setting needed, intended for some urgent testing purposes, until default LocalDatabase support is added as a TODO item

**License:** MIT

## Sample code

For Android only:

```js
document.addEventListener('deviceready', function () {
  window.sqliteStorageFile.resolveAbsolutePath({
    name: 'sample.db',
    location: 'default'
  }, function (result) {
    console.log('absolute path: ' + result)
  }, function (e) {
    console.log('ERROR: ' + e.message)
  })
})
```

needed for iOS - store in Library for now:

```js
document.addEventListener('deviceready', function () {
  window.sqliteStorageFile.resolveAbsolutePath({
    name: 'sample.db',
    // TEMPORARY & DEPRECATED - store in Library for iOS:
    location: 2
  }, function (result) {
    console.log('absolute path: ' + result)
  }, function (e) {
    console.log('ERROR: ' + e.message)
  })
})
```

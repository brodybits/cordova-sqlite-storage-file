# cordova-sqlite-storage-file

Resolves SQLite database path just like cordova-sqlite-storage - Android only at this point

**License:** MIT

## Sample code

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

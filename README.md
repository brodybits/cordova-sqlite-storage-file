# cordova-sqlite-storage-file

Resolves SQLite database path similar to cordova-sqlite-storage

with initial implementation on iOS & macOS ("osx") with a temporary and deprecated `location: 2` setting needed, intended for some urgent testing purposes, until default LocalDatabase support is added as a TODO item

**License:** MIT

### General motivations

- an application could use this plugin to get the absolute path which is needed to form ATTACH and DETACH statements
- supports file-based db files for new SQLite plugin in progress ([`brodybits/ask-me-anything#3`](https://github.com/brodybits/ask-me-anything/issues/3))

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

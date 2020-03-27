// Copyright 2020-present Christopher J. Brody <chris.brody@gmail.com>

document.addEventListener('deviceready', function () {
  var status = document.getElementById('status')

  status
    .appendChild(document.createElement('b'))
    .appendChild(document.createTextNode('ready'))

  status
    .appendChild(document.createElement('br'))

  window.sqliteStorageFile.resolveAbsolutePath({
    name: 'test.db',
    // TEMPORARY & DEPRECATED setting for testing on both iOS & Android:
    location: 2
  }, function (result) {
    status
      .appendChild(document.createElement('i'))
      .appendChild(document.createTextNode('received result'))

    status
      .appendChild(document.createElement('br'))

    status
      .appendChild(document.createTextNode(result))
  })
})

// Copyright 2020-present Christopher J. Brody <chris.brody@gmail.com>

document.addEventListener('deviceready', function () {
  document
    .getElementById('status')
    .appendChild(document.createElement('b'))
    .appendChild(document.createTextNode('ready'))
  window.sqliteStorageFile.resolveAbsolutePath(function () {
    document
      .getElementById('status')
      .appendChild(document.createElement('i'))
      .appendChild(document.createTextNode('pong'))
  })
})

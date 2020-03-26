// Copyright 2020-present Christopher J. Brody <chris.brody@gmail.com>

function resolveAbsolutePath (callback) {
  cordova.exec(
    function () {
      callback('pong')
    },
    null,
    'SQLiteStorageFilePlugin',
    'resolveFilePath',
    null
  )
}

window.sqliteStorageFile = {
  resolveAbsolutePath: resolveAbsolutePath
}

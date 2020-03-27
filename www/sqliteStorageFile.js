// Copyright 2020-present Christopher J. Brody <chris.brody@gmail.com>

function resolveAbsolutePath (options, callback, errorcb) {
  if (!options.name) throw new Error('missing name')

  if (!options.location) throw new Error('missing location')

  if (options.location !== 'default' && options.location !== 2)
    throw new Error('location value supported: ' + options.location)

  cordova.exec(
    function (result) {
      callback(result)
    },
    errorcb,
    'SQLiteStorageFilePlugin',
    'resolveFilePath',
    [options.name, options.location.toString()]
  )
}

window.sqliteStorageFile = {
  resolveAbsolutePath: resolveAbsolutePath
}

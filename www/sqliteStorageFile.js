// Copyright 2020-present Christopher J. Brody <chris.brody@gmail.com>

function resolveAbsolutePath (options, callback, errorcb) {
  if (!options.name) throw new Error('missing name')

  if (!options.location) throw new Error('missing location')

  if (options.location !== 'default')
    throw new Error('custom location not supported')

  cordova.exec(
    function (result) {
      callback(result)
    },
    errorcb,
    'SQLiteStorageFilePlugin',
    'resolveFilePath',
    [options.name]
  )
}

window.sqliteStorageFile = {
  resolveAbsolutePath: resolveAbsolutePath
}

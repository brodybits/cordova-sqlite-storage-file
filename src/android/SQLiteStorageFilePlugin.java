// Copyright 2020-present Christopher J. Brody <chris.brody@gmail.com>

package io.sqlc;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;

import java.io.File;

public class SQLiteStorageFilePlugin extends CordovaPlugin {
  @Override
  public boolean execute(String action, JSONArray args, CallbackContext cbc) {
    switch (action) {
      case "resolveFilePath":
        resolveFilePath(args, cbc);
      return true;
    }
    return false;
  }

  private void resolveFilePath(JSONArray args, CallbackContext cbc) {
    try {
      String name = args.getString(0);

      File dbFileObject =
        cordova.getActivity().getApplicationContext().getDatabasePath(name);

      cbc.success(dbFileObject.getAbsolutePath());
    } catch (Exception e) {
      cbc.error(e.getMessage());
    }
  }
}

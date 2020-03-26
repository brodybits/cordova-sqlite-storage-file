// Copyright 2020-present Christopher J. Brody <chris.brody@gmail.com>

package io.sqlc;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;

public class SQLiteStorageFilePlugin extends CordovaPlugin {
  @Override
  public boolean execute(String action, JSONArray args, CallbackContext cbc) {
    switch (action) {
      case "resolveFilePath":
        cbc.success(args);
      return true;
    }
    return false;
  }
}
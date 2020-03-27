// Copyright 2020-present Christopher J. Brody <chris.brody@gmail.com>

#import <Cordova/CDVPlugin.h>

@interface SQLiteStorageFilePlugin : CDVPlugin

- (void) resolveFilePath : (CDVInvokedUrlCommand *) command;

@end

@implementation SQLiteStorageFilePlugin

- (void) resolveFilePath : (CDVInvokedUrlCommand *) command
{
  NSArray * args = command.arguments;

  NSString * name = [args objectAtIndex: 0];
  NSString * location = [args objectAtIndex: 1];

  // only support location: 2 (Library) for now:
  if (![location isEqualToString: @"2"]) {
    CDVPluginResult * result =
      [CDVPluginResult resultWithStatus: CDVCommandStatus_ERROR
                        messageAsString: @"location value not supported"];
    [self.commandDelegate sendPluginResult: result
                                callbackId: command.callbackId];
  }

  // get standard Library path - following logic cordova-sqlite-storage
  // and as documented in the following places:
  // - https://stackoverflow.com/questions/3762941/getting-an-ios-applications-library-path-reliably/3763050#3763050
  // - https://developer.apple.com/documentation/foundation/1414224-nssearchpathfordirectoriesindoma?language=objc
  NSString * dirPath = NSSearchPathForDirectoriesInDomains(
    NSLibraryDirectory, NSUserDomainMask, YES)[0];

  NSString * dbFilePath = [dirPath stringByAppendingPathComponent: name];

  CDVPluginResult * result =
    [CDVPluginResult resultWithStatus: CDVCommandStatus_OK
                      messageAsString: dbFilePath];

  [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end

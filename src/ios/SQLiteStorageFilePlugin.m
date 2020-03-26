// Copyright 2020-present Christopher J. Brody <chris.brody@gmail.com>

#import <Cordova/CDVPlugin.h>

@interface SQLiteStorageFilePlugin : CDVPlugin

- (void) resolveFilePath : (CDVInvokedUrlCommand *) command;

@end

@implementation SQLiteStorageFilePlugin

- (void) resolveFilePath : (CDVInvokedUrlCommand *) command
{
  CDVPluginResult * result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArray:command.arguments];;
  [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end

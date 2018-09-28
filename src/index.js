import { NativeModules } from "react-native";
const LPBridge = NativeModules.RNLeanplum || {};

export default class RNLeanplum {
  appId;
  key;

  constructor(appId, key) {
    this.appId = appId;
    this.key = key;
  }

  start() {
    LPBridge.start && LPBridge.start();
  }
  setAppIdDevelopmentKey() {
    LPBridge.setAppIdDevelopmentKey &&
      LPBridge.setAppIdDevelopmentKey(this.appId, this.key);
  }
  setAppIdProductionKey() {
    LPBridge.setAppIdProductionKey &&
      LPBridge.setAppIdProductionKey(this.appId, this.key);
  }
  setDeviceId(deviceId) {
    LPBridge.setDeviceId && LPBridge.setDeviceId(deviceId);
  }

  setUserId(userId) {
    LPBridge.setUserId && LPBridge.setUserId(userId);
  }

  // States
  trackAllAppScreens() {
    LPBridge.trackAllAppScreens && LPBridge.trackAllAppScreens();
  }
  pauseState() {
    LPBridge.pauseState && LPBridge.pauseState();
  }
  resumeState() {
    LPBridge.resumeState && LPBridge.resumeState();
  }
  advanceTo(level, info, parameters) {
    if (info && parameters) {
      LPBridge.advanceToLevelInfoParameters &&
        LPBridge.advanceToLevelInfoParameters(level, info, parameters);
    } else if (info) {
      LPBridge.advanceToLevelInfo && LPBridge.advanceToLevelInfo(level, info);
    } else if (parameters) {
      LPBridge.advanceToLevelParameters &&
        LPBridge.advanceToLevelParameters(level, parameters);
    } else {
      LPBridge.advanceToLevel && LPBridge.advanceToLevel(level);
    }
  }
  // Events
  trackInAppPurchases() {
    LPBridge.trackInAppPurchases && LPBridge.trackInAppPurchases();
  }

  track(event, value, info, parameters) {
    if (event && value && info && parameters) {
      LPBridge.trackEventValueInfoParameters &&
        LPBridge.trackEventValueInfoParameters(event, value, info, parameters);
    } else if (event && value && parameters) {
      LPBridge.trackEventValueParameters &&
        LPBridge.trackEventValueParameters(event, value, parameters);
    } else if (event && value && info) {
      LPBridge.trackEventValueInfo &&
        LPBridge.trackEventValueInfo(event, value, info);
    } else if (event && parameters) {
      LPBridge.trackEventParameters &&
        LPBridge.trackEventParameters(event, parameters);
    } else if (event && info) {
      LPBridge.trackEventInfo && LPBridge.trackEventInfo(event, info);
    } else if (event && value) {
      LPBridge.trackEventValue && LPBridge.trackEventValue(event, value);
    } else {
      LPBridge.trackEvent && LPBridge.trackEvent(event);
    }
  }

  inboxMessages() {
    if (LPBridge.inboxMessages) {
      return LPBridge.inboxMessages();
    } else {
      return Promise.resolve(null);
    }
  }

  readMessage(id) {
    if (LPBridge.readMessage) {
      LPBridge.readMessage(id);
    }
  }
}

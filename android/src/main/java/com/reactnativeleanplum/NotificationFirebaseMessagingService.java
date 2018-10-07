package com.reactnativeleanplum;

import com.leanplum.LeanplumPushFirebaseMessagingService;

public class NotificationFirebaseMessagingService extends LeanplumPushFirebaseMessagingService {
    @Override
    public void onMessageReceived(com.google.firebase.messaging.RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);
    }
}

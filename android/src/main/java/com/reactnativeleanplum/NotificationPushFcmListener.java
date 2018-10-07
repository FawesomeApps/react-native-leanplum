package com.reactnativeleanplum;

import android.os.Bundle;

import com.leanplum.LeanplumPushFcmListenerService;

public class NotificationPushFcmListener extends LeanplumPushFcmListenerService {
    @Override
    public void onTokenRefresh() {
        super.onTokenRefresh();
    }
}

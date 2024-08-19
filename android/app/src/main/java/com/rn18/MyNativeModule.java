package com.rn18;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class MyNativeModule extends ReactContextBaseJavaModule {

    public MyNativeModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "MyNativeModule222-333";
    }

    @ReactMethod
    public void getDeviceName(Promise promise) {
        try {
            String deviceName = android.os.Build.MODEL;
            promise.resolve(deviceName+":666");
        } catch (Exception e) {
            promise.reject("Error", e);
        }
    }
}

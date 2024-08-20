package com.rn18;

import android.widget.Toast;

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
        // 这个命名是js用导出名，要按照变量名规范命名
        return "MyNativeModule2";
    }

    @ReactMethod
    public void showToast(String message) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
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

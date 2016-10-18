package com.comradeapp;

import com.facebook.react.ReactActivity;
import com.magus.fblogin.FacebookLoginPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.auth0.lock.react.LockReactPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.imagepicker.ImagePickerPackage;
import com.mehcode.reactnative.splashscreen.SplashScreenPackage;
import com.oblador.vectoricons.VectorIconsPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ComradeApp";
    }
}

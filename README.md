# TennisTally

A little React Native app developed for practice. It can be used to keep track of scoring in a tennis match.

This app is now available on both the [App Store](https://apps.apple.com/app/tennis-tally-scoring/id1614450619) and [Play Store](https://play.google.com/store/apps/details?id=com.tennistally.tennistally).

## Demo
![TennisTallyDemo](https://user-images.githubusercontent.com/38050123/158697208-b58799c9-e107-4882-8e20-0761f50c6b6c.gif)


## Running Locally

### Android Studio

1. Install Android Studio
2. Open Android Studio
3. Click "Configure"
4. Click "AVD Manager"
5. Click "Create Virtual Device..."
6. Pick a phone and click next (I generally use Pixel 4 since it includes the play store)
7. Use the system image with release name "R" and API Level >= 30
8. Click "Next" and "Finish"
9. Start the emulator

### XCode

1. Install xcode
2. Open xcode
3. Open project (ios folder) in xcode
4. Choose a device to test with (Product -> Destination -> Specific Device)

### Clone the repository

1. In the terminal, run `git clone https://github.com/jaaywags/TennisTally.git`
2. In the terminal, run `cd TennisTally`

### Starting the Project for Android

1. In the terminal, run `npm i`
2. In the terminal, run `npx react-native run-android`

The previous command should automaticall install and run the app on the emulator. As you make changes, they should automatically reflect in this emulator as well.

### Starting the Project for iOS

1. In the terminal, run `npm i`
2. In the terminal, run `cd ios`
3. In the terminal, run `pod install`
4. In the terminal, run `cd ..`
5. In the terminal, run `npx react-native run-ios`

#### Note

I wrote these steps from memory. Did not test them. There may be other steps needed.

## Deploying new version

### Everything

1. Update version in `./package.json`

### Android

1. Put prod keystore file in `./android/app/TennisTally.prod.keystore`
2. Add credentials to `./android/gradle.properties`
3. Upgrade `VersionCode` and `VersionName` in `./android/app/build.gradle`
4. In the terminal, run `cd android`
5. In the terminal, run `./gradlew bundleRelease`
6. Upload `./android/app/build/outputs/bundle/release/app-release.aab` to play store

### iOS

1. In the terminal, run `cd ios`
2. In the terminal, run `pod install`
3. Update version in xcode
4. Build in xcode
5. Archive in xcode
6. Go to App Store Connect & Update Version

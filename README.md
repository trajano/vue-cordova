# vue-cordova

## Project setup

Tested on **node v12.13.1 LTS** on **Windows 10 Professional**.
Tested on **node v15.2.0** on **macOS Big Sur**.

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Prepare Cordova Android
```
sdkmanager "build-tools;28.0.3" "platforms;android-28" "platform-tools"
```

### Runs on Cordova device
```
npx cordova platform add <android|electron|ios>
npx cordova build <android|electron|ios>
npx cordova run <android|electron|ios>
```

### Creates Cordova release
```
npx cordova build <android|electron|ios> --release
```

### Run unit and E2E tests headless
```
npm run test
```

### Lints and fixes files
```
npm run fmt
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

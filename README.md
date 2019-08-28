# vue-cordova

## Project setup
```
npm install -g cordova
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
cordova platform add <android|electron|ios>
cordova run <android|electron|ios>
```

### Creates Cordova release
```
cordova build <android|electron|ios> --release
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

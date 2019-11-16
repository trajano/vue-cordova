# vue-cordova

## Project setup

**note** E2E only works in Windows up to Node 10.x LTS.  [Github Issue](https://github.com/vuejs/vue-cli/issues/4799#issuecomment-553075732).

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
cordova build <android|electron|ios>
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

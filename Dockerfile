FROM openjdk:8
RUN apt-get update && apt-get install -y --no-install-recommends \
    gradle \
    && rm -rf /var/lib/apt/lists/*
ENV ANDROID_SDK_ROOT="/usr/local/android-sdk" \
    SDK_URL="https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip" \
    NVM_DIR="/usr/local/nvm" \
    NVM_URL="https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh"
RUN mkdir "$ANDROID_SDK_ROOT" .android "$NVM_DIR" \
    && cd "$ANDROID_SDK_ROOT" \
    && curl -so sdk.zip $SDK_URL \
    && unzip -q sdk.zip \
    && rm sdk.zip \
    && yes | $ANDROID_SDK_ROOT/tools/bin/sdkmanager --licenses \
    && curl -so- ${NVM_URL} | bash
# RUN $ANDROID_SDK_ROOT/tools/bin/sdkmanager --update
ENV ANDROID_VERSION=28 \
    ANDROID_BUILD_TOOLS_VERSION=28.0.3 \
    NODE_VERSION=10
RUN $ANDROID_SDK_ROOT/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS_VERSION}" \
    "platforms;android-${ANDROID_VERSION}" \
    "platform-tools"
RUN . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm use $NODE_VERSION \
    && npm install -g cordova@9
COPY package*.json config.xml /src/
WORKDIR /src
RUN . $NVM_DIR/nvm.sh \
    && nvm use $NODE_VERSION \
    && npm ci \
    && mkdir www \
    && cordova prepare
COPY . /src/
RUN . $NVM_DIR/nvm.sh \
    && nvm use $NODE_VERSION \
    && cordova build

/**
 * A Cordova app is run using the `file://` protocol rather than `http://` or
 * `https://`.  This will load cordova.js if needed.
 */
const isCordovaApp = document.URL.indexOf('http://') === -1
  && document.URL.indexOf('https://') === -1;
if (isCordovaApp) {
  const scriptTag = document.createElement('script');
  scriptTag.setAttribute('type', 'text/javascript');
  scriptTag.setAttribute('src', 'cordova.js');
  document.body.appendChild(scriptTag);
}

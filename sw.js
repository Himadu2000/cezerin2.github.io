'use strict';
importScripts('/sw-toolbox.js');
toolbox.router.get('/assets/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});

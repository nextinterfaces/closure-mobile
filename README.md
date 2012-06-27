closure-mobile
--------------

A JavaScript touch/mobile library for Google's Closure framework.

Based on Model-View-Presenter(MVP) pattern.

### Demo (WebKit only):
http://nextinterfaces.com/CLOSURE

Running the demo on DEV mode(plovr):
-----------------
* Put closure-mobile on your web server. Let's assume the URL is [http://locahost/closure-mobile](http://locahost/closure-mobile)
* Run `./plovr.sh` or `java -jar ./lib/plovr.jar serve plovr.js`. This will start the plovr with the supplied plovr.js configuration
* Open your browser at  [http://locahost/closure-mobile/web](http://locahost/closure-mobile/web)

Running the demo(compiled):
-----------------
* Put closure-mobile on your web server. Let's assume the URL is [http://locahost/closure-mobile](http://locahost/closure-mobile)
* Run the included build script `ant`
* On completion ANT will create `/closure-mobile/build` directory with `dist`, `src` and `web` subdirectories
* Open your browser at  [http://locahost/closure-mobile/build/web](http://locahost/closure-mobile/build/web) to see the complied project
* `dist` directory contains your build project wrapped into ZIP file

==============

Copyright (c) 2012 NEXTinterfaces, released under Apache License v.2.0
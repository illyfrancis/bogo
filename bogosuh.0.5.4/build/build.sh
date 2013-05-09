java \
-Xss10m \
-classpath \
lib/rhino/js.jar \
org.mozilla.javascript.tools.shell.Main \
r.js \
-o \
build.js


java -Xss10m -classpath 
D:\Repository\git\github-trial\require-simpler\build\lib\rhino\js.jar
D:\Repository\git\github-trial\require-simpler\build\lib\closure\compiler.jar
org.mozilla.javascript.tools.shell.Main
r.js
-o

// for closure compiler to work, need to specify full directory-file name
// as per https://github.com/jrburke/r.js/issues/238
java -Xss10m -classpath D:\Repository\git\github-trial\require-simpler\build\lib\rhino\js.jar;D:\Repository\git\github-trial\require-simpler\build\lib\closure\compiler.jar org.mozilla.javascript.tools.shell.Main r.js -o


rhino debugger
java org.mozilla.javascript.tools.debugger.Main


D:\Repository\git\francis-trial\bogosuh.di\build>java -Xms1g -Xss30m -classpath lib\rhino\js.jar org.mozilla.javascript.tools.shell.Main r.js -o concatenated-modules.build.js

java \
-classpath \
lib/rhino/js.jar \
org.mozilla.javascript.tools.shell.Main \
r.js \
-o \
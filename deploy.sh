#!/bin/bash

SOURCE=$(cd `dirname $0`; pwd)

# target location
TARGET=$1

if [ x$TARGET = x ]; then

cat <<EOF
Must supply target folder parameter, e.g.:

  deploy.bat ../deploy/lib/enyo-cordova
EOF
else
	mkdir -p $TARGET/assets/
	cp -r $SOURCE/assets/*.* $TARGET/assets/
	cp -r $SOURCE/*.txt $TARGET
fi

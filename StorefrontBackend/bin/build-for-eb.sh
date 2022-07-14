#!/bin/bash
npm run clean
#copy source code
mkdir -p www/src
cp -rf src www/src
#copy eb config
mkdir -p www/.elasticbeanstalk 
cp -rf .elasticbeanstalk www/.elasticbeanstalk
#copy javascript config files
cp .npmrc www/.npmrc
cp package.json www/package.json
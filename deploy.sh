#!/bin/bash
export VERSION=1.0 # docker deployment version
echo 'Building 255bits.com:'
echo $VERSION
echo "> updating tutum.yml"
docker-cloud stack update -f tutum.yml www255bitscom
echo "> gatsby build"
gatsby build
echo "build push and tag docker image"
docker build -t www255bitscom . 
docker tag -f www255bitscom mikkel/www255bitscom:$VERSION
docker push mikkel/www255bitscom:$VERSION

echo "Project has been built but not redeployed.  to redeploy run:"
echo "   docker-cloud stack redeploy www255bitscom"



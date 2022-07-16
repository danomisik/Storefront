#!/bin/bash
aws s3 cp --recursive --acl public-read ./dist/storefront-frontend s3://udacity-491528036206

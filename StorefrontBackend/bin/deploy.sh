#!/bin/bash
git archive --format=zip HEAD:www/ > deploy.zip
eb deploy
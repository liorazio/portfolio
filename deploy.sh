#!/usr/bin/env bash

# abort on errors
set -e

# create git ignored working directory to push small delta update on publish
if [[ ! -d ./gitdist ]]; then
    git clone git@github.com:liorazio/liorazio.github.io.git gitdist
fi

# remove old deployment
find gitdist -maxdepth 1 ! -iname '.git' ! -iname 'gitdist' -print0 | xargs -0 -I{} rm -rf {}

# build
npm run build
version=$(node -p "require('./package.json').version")
# copy all build files to git working directory
cp -a ./dist/* ./gitdist/

# create and push deploy commit
pushd gitdist
git add .
git commit -am "deploy version ${version} $(date '+%d-%b %H:%M')"
git push origin HEAD
popd

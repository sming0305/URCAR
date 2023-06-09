#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo $null > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://sming0305.github.io
# git push -f git@github.com:sming0305/sming0305.github.io.git main

# if you are deploying to https://sming0305.github.io/Vue-W6
git push -f https://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@github.com/sming0305/URCAR.git main:gh-pages

cd -
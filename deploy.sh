#!/bin/bash
# Builds the site and publishes it to the gh-pages branch (GitHub Pages serves that branch).
set -e
cd "$(dirname "$0")"
npm run build
cd dist
touch .nojekyll
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy site $(date '+%Y-%m-%d %H:%M')"
git push -f https://github.com/SamkitCodes/SamkitCodes.github.io.git gh-pages
echo "Pushed. Live in about a minute at https://samkitcodes.github.io"

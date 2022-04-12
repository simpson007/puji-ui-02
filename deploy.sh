rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
#git remote add origin git@github.com:simpson007/Puji-UI.git &&
git remote add origin git@gitee.com:ming-lei-yu/puji-ui.git &&
git push -f -u origin main &&
cd -
echo https://simpson007.github.io/Puji-UI/index.html

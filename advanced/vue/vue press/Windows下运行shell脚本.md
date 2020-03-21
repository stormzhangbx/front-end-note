# Windows下运行shell脚本

shell脚本是以`.sh`结尾的文件，一般放在项目根目录下，如将Vue press项目（vuePress-template）部署到github pagas上，在目录根目录下添加`deploy.sh`:

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:stormzhangbx/stormzhangbx.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

安装git，在项目下打开Git Bash Here，输入`sh deploy.sh`(如果担心路径错误，可以通过`ls`查看当前目录下有哪些文件)

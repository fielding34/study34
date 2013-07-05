#WEB学习笔记

##git 入门：
第一次使用git
``` bash
mkdir study34;cd study34;touch README.md
#初始化本地git repository
git init
#stage README.md文件，添加进入commit列表；
git add README.md
#提交README.md到本地repository
git commit -m "first commit"
# 创建别名(origin),其指向https://xxx的远程repository
git remote add origin https://github.com/fielding34/study34.git
# 提交到远程的master分支
git push origin master
```

如果修改了README.md，如何提交？
```bash
#修改README.md
vim README.md
#默认已经在STAGING列表，直接提交到本地repository
git commit README.md -m 'update readme.md'
#提交到远程repository的master分支
git push origin master

```

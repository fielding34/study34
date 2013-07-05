#WEB学习笔记

##git 入门：
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

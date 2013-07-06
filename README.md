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

##Github flavored markdown例子
标题
```
#一级标题
================================
#二级标题
--------------------------------
```

斜体和链接：
```
*查看[google主页](http://www.google.com)*
```
*查看[google主页](http://www.google.com)*

换行：
```
#两个空格加一个换行符
Roses are red
Violets are blue
```
Roses are red  
Violets are blue

列表：
```
* Red Apples
* Purple Grapes
* Green Kiwifruits
```
* Red Apples
* Purple Grapes
* Green Kiwifruits

## task列表：
```
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

pre数据：
```
<pre>
             ,-. 
    ,     ,-.   ,-. 
   / \   (   )-(   ) 
   \ |  ,.>-(   )-< 
    \|,' (   )-(   ) 
     Y ___`-'   `-' 
     |/__/   `-' 
     | 
     | 
     |    -hrr- 
  ___|_____________ 
</pre>
```


引用：
```
If you need to blame someone, the best way to do so is by quoting them:

> I, at any rate, am convinced that He does not throw dice.
> I wish you'd have given me this written question ahead of time so I
> could plan for it... I'm sure something will pop into my head here in
> as I should be in coming up with one.
```

If you need to blame someone, the best way to do so is by quoting them:

> I, at any rate, am convinced that He does not throw dice.
> I wish you'd have given me this written question ahead of time so I
> could plan for it... I'm sure something will pop into my head here in
> as I should be in coming up with one.

表格：
```
<table>
  <tr>
    <th>ID</th><th>Name</th><th>Rank</th>
  </tr>
  <tr>
    <td>1</td><td>Tom Preston-Werner</td><td>Awesome</td>
  </tr>
  <tr>
    <td>2</td><td>Albert Einstein</td><td>Nearly as awesome</td>
  </tr>
</table>
```
<table>
  <tr>
    <th>ID</th><th>Name</th><th>Rank</th>
  </tr>
  <tr>
    <td>1</td><td>Tom Preston-Werner</td><td>Awesome</td>
  </tr>
  <tr>
    <td>2</td><td>Albert Einstein</td><td>Nearly as awesome</td>
  </tr>
</table>

链接引用：
```
I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"
```
I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"


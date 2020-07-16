1. 安装express-generator
2. 安装项目 express --view=jade server-side
3. 安装ts及其插件 cnpm i typescript @types/express @types/node -D
4. tsc --init 初始化
5. 修改tsconfig.js
6. 把www文件提取出来，重命名为server.ts
7. 把app.js、routes下面的文件都重命名为*.ts
8. 修改package.json中的scripts
9. 新增handle-public.js 添加方法
10. 安装mysql 启动mysql 准备ts表
11. 在config下新建mysql.config.ts新建变量
12. 在model下面新建index.ts文件引用mysql
13. 在model下新建tables文件夹，里面新建image.ts，新建这个表
14. 在server.ts里面引用require("./model")
15. 查看mysql数据库 看看表是否建立成功
16. 在views下面新建upload.jade 编写html
17. 在routes的index.ts中新建路由upload
18. 在model下的server中的api.ts写sql语句
19. 在controller里面的api.ts里面写执行sql语句方法
20. 在路由的api.ts里面写调用controller的方法


[TypeScript完全解读入门进阶课程(26课时)-ts+express+mysql搭建后端服务](https://www.bilibili.com/video/BV1F7411c7m5?p=24)
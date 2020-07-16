const shell=require('shelljs')

shell.cp("-R","./public/","./dist/")//拷贝到dist下面
shell.cp("-R","./views/","./dist/")
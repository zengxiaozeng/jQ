#jQ
**说明：jQ的脚手架，支持ES6语法+stylus预处理编译+flex布局**


 - **ES** --文件夹目录
    - dist --打包文件目录
    - public --公共资源
    - src --页面代码
    - components --组件库
    - css --按照每个项目独立文件夹管理css文件、支持stalus、less、sass语法
    - js --按照每个项目独立文件夹管理js文件
    - views --按照每个项目独立文件夹管理html文件
    

## 使用说明
- 1、安装gulp 
- 2、安装依赖 npm i/cnpm i
- 3、在当前目录下打开Windows自带终端（不支持git环境、不支持MacOS系统）运行**.bat**
``` bash
# c:\xx\xx\jQ>
.bat
控制台显示set/p name=后输入：
reports/reports_08_05 前面为views里面的独立文件夹名、后面为html模板，用这样的格式就能开启项目的本地环境运行
```
- 4、当要终止环境时输入ctrl+c命令，重新开启命令行只需在命令行输入'gulp'命令即可
- 5、实时编译实时打包，打包后的文件存储在dist目录文件夹下

## 优点
项目与项目之间项目独立，运用了.bat命令后不会对其它的项目造成任务影响，包括开发上线只管鼓励操作对应的项目，大概率解决了上线冲突或者的烦恼

# 任务清单小程序

用React做一个任务清单小程序(To Do List)。考查知识点为React, React Hooks。
## 要求

参考完成图片，初始状态显示任务清单列表，以及添加任务按钮：+。
1. 添加任务功能：
* 点击最下方添加按钮: +，新任务编辑框出现，取代添加按钮。
* 用户可填写任务的title和project，点击create，新任务添加至列表中。
* 点击cancel，编辑框消失，添加按钮重新出现。
2. 编辑功能：
* 点击任意一个任务的编辑按钮，编辑框出现，输入框中出现该任务的title和project内容。
* 用户可编辑任务的title和project，点击update，编辑后的任务重新显示在列表中。点击cancel，编辑框消失。
3. 删除功能：
* 点击任意一个任务的删除按钮，该任务消失在列表中。

## 操作提示

1. 下载初始文件夹: to-do-list，此文件夹由create-react-app生成。
2. 运行npm install, 添加项目所需的dependencies。接着运行npm start, 架起development server。
3. 所有代码都写在App.js即可。目前App.js已经给出：任务，任务编辑框，以及添加按钮的React元素。样式使用了semantic ui的样式库，同学们不需要做格外处理。
4. App.js中另外给出了to do list的初始sample数据：initialTasks。同学们可以用来作为参考，或绑定成任务列表的初始值。
5. 每个任务都需要特殊id, 可以由uuid库生成。uuid已经import在App.js中, 调用方法为：uuidv4()。

# tools
###### 工作中需要的工具

### base64转码和解码工具

 	由于调用微信硬件api给蓝牙发送数据流api规定要转成base64发送
	用法 
	let base64 = New Base64();
	编码
	base64.encode(str)
	解码
	base64.decode(str)

### 以前手机端responsive自适应工具
    
    自适应方案要视具体需求来确定
    一般使用的media查询方案，
    也有使用淘宝的flexible的方案
    media查询直接引用responsive里的media文件

    还有一种方案是宽度固定是375px,无论大于或者小于都会缩放到屏幕大小
    具体的方案要视需求来确定

### 前端清除默认样式的文件
    
    reset文件夹下面的文件直接引用或者@import引入
## TKUISDK 说明文档


### iOS 前置条件
      SDK 支持 Xcode 11+，iOS 10.0+ 版本
        
### Info.plist文件的设置

	1. 添加权限申请及相应文本
        Privacy - Camera Usage Description 
        Privacy - Microphone Usage Description
        Privacy - Photo Library Additions Usage Description
        Privacy - Photo Library Usage Description
        Privacy - Location When In Use Usage Description
	2. Http 请求 
        App Transport Security Settings Allow Arbitrary Loads  YES
		
### 接口调用说明
    
        
	1. 进入教室接口  joinRoomWithParam(para, callback)

    参数说明: 
	
		参数para: Map 类型
		
            键(key)      必选              值(value)类型   说明
            serial        是                String       房间号
            password      是                Int          密码
            userrole      是                Int          用户角色     老师(0) 助教(1) 学生(2)
            userid        否                String       用户ID(可选)
            nickname      是                String       用户昵称(必填)
            host          是                String       地址
            server        是                String       主机
            port          是                String       端口
            isFromWeb     否                Bool         是否是从网址链接进入进入
            isPlayback    否	            Int  		0,进入实时教室, 1, 进入回放教室
		
		参数calback: 回调函数 (result)=>{}
			result: Map 类型
			键(key)  	值(value)类型   	说明
			  type			Int			类型 0: 信息回调, 1: 错误回调
			  code			Int			信息码
			  description	String		  描述
			  

    2. 使用链接进入教室(直播\回放) joinRoomWithUrl(url)
	
        参数说明: url(String) 为入教室的连接
        
	3. 离开教室 leaveRoom()
	
	4. 获取教室数据 roomJson(callback)
		参数说明: 
		参数calback: 回调函数 (result)=>{}
		result: Map 类型
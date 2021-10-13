# mt-app

> My fantastic Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).





### 效果图

![](index.png)



### 接口文档

#### 注册用户

*type:POST*

*地址：/users/signup*

|        | 字段     | 类型   | 必需 |
| ------ | -------- | ------ | ---- |
| 用户名 | username | String | 1    |
| 密码   | password | String | 1    |
| 邮箱   | email    | String | 1    |
| 验证码 | code     | String | 1    |

*返回值*

```javascript
//成功
data{
    
}

//失败

```

#### 登入

*type:POST*

*地址：/users/signin*

|        | 字段     | 类型   | 必需 |
| ------ | -------- | ------ | ---- |
| 用户名 | username | String | 1    |
| 密码   | password | String | 1    |

*返回值*

```javascript
//成功
data{
    
}

//失败

```

#### 发送验证码

*type:POST*

*地址：*/users/verify

|        | 字段     | 类型   | 必需 |
| ------ | -------- | ------ | ---- |
| 用户名 | username | String | 1    |
| 邮箱   | email    | String | 1    |

*返回值*

```javascript
//成功


//失败

```

#### 退出登入

*type:GET*

*地址：*/users/exit

*返回值*

```javascript
//成功

//失败

```

#### 获取用户名

*type:GET*

*地址：*/users/getUser

```javascript
//成功

//失败
```

#### 获取地理位置

*type:GET*

*地址：*/geo/getPosition

```javascript
//成功

//失败
```

#### 获取菜单数据

*type:GET*

*地址：*/geo/menu

```javascript
//成功

//失败
```


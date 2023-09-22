### Welcome to Dealin

#### 已经安装了哪些包？

1. Typescript
2. Prettier // 优化代码，统一代码格式
3. Eslint // 代码规范
4. Husky // 自动执行 Eslint

---

#### How TO USE

1.`git checkout develop`  
如果你是第一次 clone 代码，执行该命令可以在本地创建 develop 分支。我们的开发都在 develop 分支上进行(
这是一次性操作，今后不用重复该操作)

2.`npm install`  
自动安装相关的各种库(经常使用的命令，确保各种包被安装上)

3.请到 settings 里配置 Action on save，确保执行能够 Run eslint --fix 和 Run prettier，不会的去 youtube 找类似的视频

4.项目根目录下创建.env，复制黏贴下面内容:(\*新更新内容)  
CONNECTION_STRING=mongodb+srv://alexma8809:Imo2ddH9tYYUa5ew@cluster0.h0l0o2w.mongodb.net/dealin  
JWT_KEY=dealin
STRIPE_KEY=sk_test_51NSunAGQNHEvzhYyl6mOiFTLm9diK9ysC4UYcvTcJ6598DWxBcph20MiCKtX8eaChfaFRH7H1NhDGixtLHx7eE4400T9lxVSrZ
CLIENT_URL=http://localhost:3000

5.`npm run dev`  
执行该命令启动 server，我们项目开发时最常用的指令  
原理：使用 nodemon，先对 ts 进行编译后，保持 app 持续更新，开启后端 server

---

#### 接口:

1.health check  
Method: get, Url: localhost:8080/api/v1/health_check

2.Show all admin information(这条是尝试获取 admin 的所有数据，跟我们网站的需求无关，仅供参考. 后期会删除)  
Method: get, Url: localhost:8080/api/v1/admin

3.Admin login  
Method: post, payload:{username,password}, Url:localhost:8080/api/v1/admin/login

4.Get Recharge List
Method: get, Url: localhost:8080/api/v1/recharges

---

---

#### New Update:

新增了一个单元测试，求两数之和  
通过`npm run test` 来进行测试

---

#### 环境变量

```
CONNECTION_STRING=mongodb+srv://alexma8809:Imo2ddH9tYYUa5ew@cluster0.h0l0o2w.mongodb.net/dealin
JWT_KEY=dealin
M3_REGION=''
M3_BUCKET_NAME=''
M3_ACCESS_KEY_ID=''
M3_SECRET_ACCESS_KEY=''
M3_SAVE_PATH=''
PORT=
NODE_ENV=
```

### build (Compile typescript to javascript )

```
npm run build
```

### start app via node

```
node ./dist/src/app/index.js
```
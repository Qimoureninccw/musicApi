// server.js - 专门给 Vercel 用的入口文件
const app = require('./dist/express-app.js');

// 导出 app 给 Vercel 使用
module.exports = app;

// 本地测试用
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`✅ 聚合音乐 API 已启动: http://localhost:${port}`);
  });
}

// server.js
import app from '@suen/music-api/src/express-app';

// 导出 app，让 Vercel 能识别
export default app;

// 本地开发时启动服务器
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`聚合音乐 API 服务已启动: http://localhost:${port}`);
  });
}

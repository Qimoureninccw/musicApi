// server.js
const app = require('./dist/express-app.js');

// 关键：默认导出 app
module.exports = app;

// 注意：这里**不要**调用 app.listen()

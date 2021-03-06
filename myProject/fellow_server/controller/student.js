//初始化路由
const Router = require("koa-router");
let router = new Router();
const cloud = require('tcb-admin-node');
const db = cloud.database();
const fellowStudent = db.collection("fellow_student");

router.post("/add", async (ctx) => {
  console.log(ctx.request.body);
  let res = undefined;
  // 数据库操作
  try {
    res = await fellowStudent.add({
      
        ...ctx.request.body
    })
  } catch (error) {
    console.log(error);

  }
  ctx.body = {
    code: 20000,
    // 返回给前端
    data: res
  }
})



module.exports = router;
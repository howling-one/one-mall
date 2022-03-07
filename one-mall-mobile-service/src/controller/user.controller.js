const service = require('../service/user.service');

class userController {
  async login(ctx) {
    const { account, password } = ctx.request.body;
    const result = await service.login(account, password);
    console.log(result);
    ctx.body = result;
  }
  register(ctx) {
    const userInfo = ctx.request.body;
    const result = service.register(userInfo);
    ctx.body = '注册成功~';
  }
  async getAddress(ctx) {
    const { id } = ctx.params;
    const result = await service.getAddress(id);
    console.log(result);
    ctx.body = result;
  }
}

module.exports = new userController();

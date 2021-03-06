const service = require('../service/cart.service');

class cartController {
  async getCart(ctx) {
    const { id } = ctx.params;
    const result = await service.getCart(id);
    ctx.body = result;
  }
  async addCart(ctx) {
    const goods = ctx.request.body;
    const result = await service.addCart(goods);
    ctx.body = result;
  }
  async updateCart(ctx) {
    const { c_id, count } = ctx.request.body;
    const result = await service.updateCart({ c_id, count });
    ctx.body = result;
  }
  async changeSelectCart(ctx) {
    const { id } = ctx.params;
    const { status } = ctx.request.body;
    await service.changeSelectCart(id, status);
    ctx.body = '';
  }
}

module.exports = new cartController();

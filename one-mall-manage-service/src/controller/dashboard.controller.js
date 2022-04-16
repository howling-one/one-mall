const service = require('../service/dashboard.service');

class dashboardController {
  async getCitySale(ctx) {
    const result = await service.getCitySale();
    ctx.body = result;
  }
  async getCateSale(ctx) {
    const result = await service.getCateSale();
    ctx.body = result;
  }
}

module.exports = new dashboardController();

export const contentTableConfig = {
  propList: [
    {
      prop: 'picture',
      label: '商品图片',
      slotName: 'img'
    },
    {
      prop: 'name',
      label: '商品名称',
      width: '180'
    },
    {
      prop: 'price',
      label: '商品价格(单位:￥)'
    },
    {
      prop: 'goodsCate',
      label: '所属分类'
    },
    {
      prop: 'description',
      label: '商品描述'
    },
    {
      prop: 'stock',
      label: '库存',
      width: '80'
    },
    {
      label: '启动状态',
      slotName: 'usable'
    },
    {
      label: '操作',
      slotName: 'handle'
    }
  ],
  showIndexColumn: true
};

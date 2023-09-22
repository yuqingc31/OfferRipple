module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 设置根元素的基准值（这里假设根元素字体大小为16px）
      propList: ['*'], // 要转换的属性，*表示所有
    },
  },
};

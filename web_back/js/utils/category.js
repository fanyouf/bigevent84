var category = {
  show: function(callBack) {
    $.get(URLIST.category_show, function(res) {
      callBack(res);
    });
  },
  /**
   * 添加新类别
   * @param {*} name 名称
   * @param {*} slug 别名
   * @param {*} callBack 回调
   */
  add: function(name, slug, callBack) {
    $.post(URLIST.category_add, { name: name, slug: slug }, function(res) {
      callBack(res);
    });
  }
};

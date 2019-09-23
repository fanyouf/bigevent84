var category = {
  show: function(callBack) {
    $.get(URLIST.category_show, function(res) {
      callBack(res);
    });
  }
};

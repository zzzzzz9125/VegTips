(function () {
  if (typeof document === 'undefined') return;

  try {
    var key = 'vegTips-outline-depth';
    var saved = localStorage.getItem(key);
    var depth = saved && ['2', '3', '4'].indexOf(saved) !== -1 ? saved : '2';
    document.documentElement.dataset.outlineDepth = depth;
    if (!saved) localStorage.setItem(key, depth);
  } catch (err) {
    document.documentElement.dataset.outlineDepth = '2';
  }
})();

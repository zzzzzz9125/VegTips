(function () {
  if (typeof document === 'undefined') return;

  try {
    const key = 'vegTips-outline-depth';
    const saved = localStorage.getItem(key);
    const depth = saved && ['2', '3', '4'].includes(saved) ? saved : '2';
    document.documentElement.dataset.outlineDepth = depth;
    if (!saved) localStorage.setItem(key, depth);
  } catch (err) {
    document.documentElement.dataset.outlineDepth = '2';
  }
})();

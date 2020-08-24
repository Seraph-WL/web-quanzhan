// 立即调用函数，window传入进去，声明局部变量
(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        // getBoundingClientRect():获取当前对象下的属性
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 8; // 将屏幕宽度分成7.5份， 1份为1rem
        docEl.style.fontSize = rem + 'px';
    }
    
    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {//判断是否加载缓存
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();

})(window);

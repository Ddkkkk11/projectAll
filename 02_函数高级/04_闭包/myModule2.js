(function (window) {
    var name = "Xdd";
    // 操作数据的函数
    function doSomething() {
        console.log('doSomething()' + name.toUpperCase());
    };

    function doOtherthing() {
        console.log('doOtherthing()' + name.toLowerCase());
    };
    // 向外暴露对象(给外部使用的方法)
    window.myModule = {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    };
})(window);
import _ from 'lodash';
import printMe from './print.js';

    function component() {
        let element = document.createElement('div');
        let btn = document.createElement('button');

        element.innerHTML = _.join(['Hello!', 'webpack4搭建开始', '个人网站'], ' ');

        btn.innerHTML = 'click me!'
        btn.onclick = printMe();
        element.appendChild(btn);

        return element;
    }

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素

document.body.appendChild(element);

if (module.hot) {
       module.hot.accept('./print.js', function() {
           console.log('Accepting the updated printMe module!');

           document.body.removeChild(element);
           
           element = component(); // 重新渲染页面后，component 更新 click 事件处理

           document.body.appendChild(element);
    })
}
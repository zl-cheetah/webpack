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

document.body.appendChild(component());
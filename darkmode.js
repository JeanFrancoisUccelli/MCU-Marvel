
import Darkmode from 'darkmode-js';

var options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#075FDF', // default: '#fff'
    backgroundColor: '#52DF07',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: URL("https://www.firstcomicsnews.com/wp-content/uploads/2019/07/Marvel-Logo-600x272.png"),// default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
new Darkmode().showWidget();
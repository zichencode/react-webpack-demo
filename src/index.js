console.log('hello')
// document.getElementById('root').innerHTML = 'hello'
import './index.less'
import './list'

const a = 'liu';

const add = () => 'happy'

class People {
  constructor() {

  }
}
let xiaoming = new People()

var loadw = function() {
  return new Promise((resolve,reject) => {
    resolve('haha')
  })
}
loadw()

var maps = new Map();
maps.set('1', 'cc');
console.log(maps,maps.get('1'),'123')

var arrs = [1,2,3];
var b = [...arrs];
console.log(arrs === b);
function* liufn(params) {
  
}
liufn()
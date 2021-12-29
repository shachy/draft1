function rand(min, max)
{
    return (Math.floor(Math.random() * (max - min +1) + min));
}

Error.prototype.toString = function() {
    'use strict';
  
    var obj = Object(this);
    if (obj !== this) {
      throw new TypeError();
    }
  
    var name = this.name;
    name = (name === undefined) ? 'Error' : String(name);
  
    var msg = this.message;
    msg = (msg === undefined) ? '' : String(msg);
  
    if (name === '') {
      return msg;
    }
    if (msg === '') {
      return name;
    }
  
    return name + ': ' + msg;
};

let assert = 
`
function assert(a, b, n) {
    return a === b;
}
`;
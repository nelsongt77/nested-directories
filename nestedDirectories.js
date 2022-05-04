function nestedDirectories (directories) {
  const splitArray = directories.map(dir => dir.split('/'));
  return {
    mergeObjs: function(target, source) {
      for (let key in source) {
        if(!target[key]) target[key] = {};
        target[key] = this.mergeObjs(target[key], source[key]);
      }
      return target;
    },
    buildResponse: function (target) {
      let arr = [];
      for (let key in target) {
        let o = { title: key, content: [] };
        if(key.includes(".")) {
          delete o.content;
        } else if (Object.keys(target[key]).length) {
          o.content = this.buildResponse(target[key]);
        }
        arr.push(o);
      }
      return arr;
    },
    exec: function () {
      let targetObject = {};
      splitArray.forEach(arrParent => {
        let strObj = '';
        for (let i = arrParent.length - 1; i >= 0 ; i--) {
          strObj = `"${arrParent[i]}": {${strObj}}`;
        }
        let parseObj = JSON.parse(`{${strObj}}`);
        targetObject = this.mergeObjs(targetObject, parseObj);
      });
      return this.buildResponse(targetObject);
    }
  }
}

module.exports = nestedDirectories;

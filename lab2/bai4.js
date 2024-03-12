const theList=['Lauren', 'Kevin',true,35,null,undefined,['one', 'two']];
theList.shift();
theList.pop();
theList.unshift('FIRST');
theList.splice(1,4,"hello world");
theList.splice(1,3,"middle");
theList.push('last');
document.write(theList);
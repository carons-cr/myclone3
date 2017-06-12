module.exports = function main(x) {
          var sum=0;
          for(var i=0;i<x.length;i++){
                var y=parseInt(x[i]);
                sum=sum+y;
          }
           document.write(sum);
};

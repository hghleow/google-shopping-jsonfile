// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  // console.dir(obj)
var count = 0;

for(var i = 0; i < obj.items.length; i++) {
	var item = obj.items[i];
	console.log(item.kind);
	if (item.kind === "shopping#product") {
 		count++;	
 		console.log(count);
 	};
} 
	console.log(obj.items[0].kind);
  // var resultFile = 'result.json'
  // var result = {name: 'JP'}

  // jsonfile.writeFile(resultFile, result, function (err) {
  //   console.error(err)
  // });

});

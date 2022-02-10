
function submit_by_id() {
	// var names = $("input[name='Product[]']")
	// .map(function(){return $(this).val();}).get();
	// console.log(names)

	var names = $("select[name='Product[]']")
	.map(function(){return $(this).val();}).get();
	console.log(names)

	var values = $("input[name='Quantity[]']")
	.map(function(){return $(this).val();}).get();
	console.log(values)

	var duedates = $("input[name='productdate[]']")
	.map(function(){return $(this).val();}).get();
	console.log(duedates)

	var products = [];
	for(var i = 0;i<names.length;i++){
		for(var j = i; j<=i;j++){
			for(var k = j; k<=j;k++){
				products.push({productname:names[i],productqty:values[j], productdate:duedates[k]});
			}
		}
	}
	console.log(products)
	sessionStorage.setItem("Productdetails", JSON.stringify(products))
}

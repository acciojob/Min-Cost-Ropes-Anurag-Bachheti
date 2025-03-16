function mincost(arr){
if(arr.length < 2) return 0;
	
	let newArr = arr.sort((a, b)=> a - b);
	let count = 0;

	while(newArr.length > 1){
		let first = newArr.shift();
		let second = newArr.shift();
		let sum = first + second;
		count += sum;

		let index = newArr.findIndex(el => el > sum);
		if(index === -1){
			newArr.push(sum);
		}else{
			newArr.splice(index, 0, sum);
		}
	}
	return count;
}

module.exports=mincost;

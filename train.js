let bubble_sort =(a)=>{
	let lengthofA=a.length
	let swapp;
		do{
		swapp=false;
			for(let i =0; i<lengthofA;i++){
				if (a[i]>a[i+1]){
					let temp = a[i];
					a[i]=a[i+1];
					a[i+1]=temp;
					swapp = true;
				}
			}
		lengthofA--;
		}while(swapp);
	return a;
}
a=[5,1,4,2,8];
console.log(bubble_sort(a))
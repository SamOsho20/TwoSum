const twoSum =(nums,target)=>{
    const output = []
    for(let i = 0; i<nums.length; i++){
        for (let j = i+ 1; j <nums.length; j++){
            if (nums[i]+ nums[j] === target){

                output.push(i,j)
            }
        }
        }
return output
}
console.log(twoSum([1,10,2,5,3],8))


const twoSum = (nums, target) => {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          output.push(i, j);
        }
      }
    }
    return output;
  };
  
  console.log(twoSum([1, 4, 2, 5, 3], 8)); // Output: [[0, 3], [1, 2]]


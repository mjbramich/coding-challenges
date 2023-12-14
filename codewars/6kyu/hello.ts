function containsDuplicate(nums: number[]){
    // need to return true if any number appear more than once or false if every number is unique

    // use a set to get the unique numbers
    let set = new Set(nums)

    return !(set.size === nums.length)
}

console.log(containsDuplicate([1,2,3,4,1]));




function singleNumber(nums: number[]): number {
    // now need to do it using a hashmap
    let map = new Map<number, number>()

    for(let num of nums){
        if(map.has(num)){
            const prev = map.get(num)
            map.set(num, prev + 1)
        }else{
            map.set(num, 1)
        }

    }

    for(let key in map){
        if(map[key] === 1){
            return +key
        }
    }
};
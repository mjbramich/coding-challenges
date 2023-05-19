function uniqueInOrder(iterable){
  
    if(typeof iterable === 'string'){
      return  iterable.split('').filter((item,index,arr) => {
        return item !== arr[index + 1]
      }).join('')
    }else{
      return iterable.filter((item,index,arr) => {
        return item !== arr[index - 1]
      })

    }

}
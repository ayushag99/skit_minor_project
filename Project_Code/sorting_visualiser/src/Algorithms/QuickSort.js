// Quick Sort
const quickSort = (array) => {
  let animations = [];
  // Structure = {i:index_1 , j:index_2 . swap:true/false, array: updated_array}
  const sort = (array, l, r, animations) => {
      console.log(l,r,array)
    if (l >= r) {
      return;
    }
    let pivot = array[l];
    let i = l;
    // Partition
    for (let j = i + 1; j <= r; j++) {
      console.log("Anim" , animations)
      animations.push({i:i,j:j,swap:false,array:[...array]})
      if (array[j] <= pivot) {
        i+=1
        animations.push({i:i,j:j,swap:true,array : [...array]})
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        animations.push({i:i,j:j,swap:true,array : [...array]})

      }
    }
    animations.push({i:i,j:l,swap:true,array : [...array]})
    let temp = array[l];
    array[l] = array[i];
    array[i] = temp;
    animations.push({i:i,j:l,swap:true,array : [...array]})

    sort(array,l,i-1,animations)
    sort(array,i+1,r,animations)
  };
  sort(array,0,array.length-1,animations)
  return animations;
};
export default quickSort;

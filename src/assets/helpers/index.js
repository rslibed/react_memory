export function doubleArray(, times = 2) {
    const newArr = [];
    for (let count = 0; count < times; count++) {
        for (let index = 0; index < arr.length; index++) {
            // let jsonString = JSON.stringify(arr[index]);
            // let newObject = JSON.parse(jsonString);
            // newArr.push(newObject);
            newArr.push(JSON.parse(JSON.stringify(arr[index])));
        }
    }
    return newArr;
}
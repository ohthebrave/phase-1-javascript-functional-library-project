function myEach(collection, cb) {
    if(Array.isArray(collection) === false) {
        let newArray = Object.values(collection);
        newArray.forEach(element => cb(element))
    } else {
        collection.forEach(element => cb(element))
    }
    return collection
}

function myMap(collection, cb) {
    if(Array.isArray(collection) === false) {
        return Object.values(collection).map(element => cb(element))
    } else {
       return collection.map(element => cb(element))
    }
}

function checkArray(collection) {
  if(Array.isArray(collection) === false) {
    return Object.values(collection)
  } else {return collection}
}

function myReduce(collection, callback, acc) {
  let newArray = checkArray(collection)
  if(! acc) {
    acc = newArray[0]
    newArray = newArray.slice(1)
  }
  
  for(let i = 0; i < newArray.length; i++) {
    acc = callback(acc, newArray[i], newArray)
  }
  return acc
}

function myMap(collection, callback) {
  if(Array.isArray(collection) === false) {
    return Object.values(collection).map((item) => callback(item))
  } else {return collection.map((item) => callback(item))}
}

function myFind(collection, predicate) {
  let newCollection = checkArray(collection)

  return newCollection.find((item) => predicate(item))
}

function myFilter(collection, predicate) {
  let newCollection = checkArray(collection)

  return newCollection.filter((item) => predicate(item))
}

function mySize(collection) {
  let newCollection = checkArray(collection)

  return newCollection.length
}

function myFirst(array, n = false) {

  return (n) ? array.slice(0, n) : array[0]
}

function myLast(array, n = false) {

  return (n) ? array.slice(array.length - n, array.length) : array[array.length - 1]
}

function myKeys(object) {
  return Object.keys(object)
}

function myValues(object) {
  return Object.values(object)
}


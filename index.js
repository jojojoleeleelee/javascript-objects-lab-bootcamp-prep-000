var recipes = {}
function object (recipes) {
  // defines a 'recipes' object
 
  typeofrecipes = object
}
function updateObjectWithKeyAndValue (object, key, value) {
  //returns an object with the original key value pairs and the new key value pair
  var obj = {};
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  
}
function deleteFromObjectByKey (object, key) {
  //deletes key from a clone of object and returns the new object
}
var recipes = new Object ({})

var obj = { prop: 1 }
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},obj,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  delete object.key;
  return obj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return objec
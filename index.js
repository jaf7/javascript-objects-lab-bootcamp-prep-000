var recipes = {};

function updateObjectWithKeyAndValue( obj, key, val ) {
  return Object.assign( {}, obj, { [key]: val } );
}

function destructivelyUpdateObjectWithKeyAndValue( obj, key, val ) {
  return Object.assign( obj, { [key]: val } );
}

function deleteFromObjectByKey( obj, key ) {
  var objClone = Object.assign( {}, obj );
  delete objClone[key];
  return objClone;
}

function destructivelyDeleteFromObjectByKey( object, key ) {
  delete obj[key];
  return obj;
}

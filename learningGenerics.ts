function loggingIdentity<Type>(arg: Type[]): Type[]{
  console.log(arg.length);
  return arg;
}

// function identity<Type>(arg: Type): Type {
//   return arg;
// }
 
// let myIdentity = identity;

// myIdentity("hello");

// interface GenericIdentityFn {
//   <Type>(arg: Type): Type;
// }

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn = identity;
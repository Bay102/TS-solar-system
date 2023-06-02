// see e16.md


// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find<T>(array: T[], callback: (input: T) => unknown)  {
   for(let x of array) {
      if (callback(x)) {
         return x
      }
   }
}

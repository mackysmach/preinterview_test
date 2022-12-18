import {merge} from "../primotest"
describe("merge sorted arrays",()=>{
    test("pass",()=>{
       let array1=[2,4,6,8];
       let array2=[3,5,9];
       let res= merge(array1,array2);

       expect(res).toEqual([2,3,4,5,6,8,9])
    })
})

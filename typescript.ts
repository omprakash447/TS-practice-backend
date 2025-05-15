import { resolve } from "path";

// explicit typing
const name:string="om prakash lenka";
// console.log(Name);
name;


// implicit typing
const Name="muna";
// console.log(FirstName);
Name;


// interface
interface Data{
    name:string | number,
    email:string,
    place:string,
    mood:string,
}

// console.log(Obj2);




interface Data{
    country?:string,
}




// console.log(rsult);





// console.log(mydata);



// async in the typescript
// using normal .then() .catch()
const Myasyncfile=():Promise<string>=>{
    return new Promise((_resolve)=>{
        setTimeout(() => {
            resolve("hii i am om prakash lenka");
        }, 2000);
    })
}

Myasyncfile()
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});


// using async await
const myAsyncAwait=():Promise<{name:string , age:number}>=>{
    return new Promise((resolve)=>{
        resolve({
            name:"om prakash lenka ",
            age:19,
        })
    })
}



const dataget=async()=>{
    try{
        const result=await myAsyncAwait();
        const name=result.name;
        const age=result.age;
        console.log(`my name is the ${name} , and the my age is the ${age}`);
    }catch(err){
        console.log(err);
    }
}
dataget();




// make the fuction getname and add the  name and the surname and return the fullname
const getname=(name :string , surname:string):string=>{
    return name+" "+surname;
}


const fullname=getname("om prakash" , "lenka");

console.log(fullname);




// use the interface in the function


interface student{
    name:string,
    email:string,
    cource:string
}


const studentdata=(Student:student):string=>{
    return [Student.name , Student.email , Student.cource].join("-");
}


const studentdetails=studentdata({
    name:"om prakash lenka",
    email:"om@gmail.com",
    cource:"B.tech",
});


console.log(studentdetails);




// type narrowing 

//ANS- Sometimes the variables havig the multiple types , so for the security purpose we are using the typenarrowing  

const functionname=(id:string | number)=>{
    if(typeof id==="string"){
        console.log(id.toLowerCase());
    }else{
        console.log(id.toFixed(2));
    }
}

functionname(19);




// types of the components in the typescript

//ANS-Basically there are many compinents in tthe typescript , like , [type , interface , classes , generic , objects , function , enums etc..]



enum myname{
    om="muna",
    prakash="kuna",
    lenka="raja"
}

console.log(myname.om);
console.log(myname.lenka);










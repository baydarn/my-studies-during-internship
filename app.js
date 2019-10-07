// let value;

// const numbers = [43,56,33,23,44,35,5];

// const numbers2 = new Array(1,2,34,5,6,7);

// const a=["merhaba",22,null,undefined,3.14];

// ///UZUNLUK
// value = numbers.length;


// //indexleme
// value=numbers[0];
// value=numbers[2],
// value=numbers[numbers.length-1];

// ///herhangi bir indexteki değeri değiştirme


// numbers[2]=1000;

// value=numbers;

// console.log(value);


///OBJE KAVRAMI VE OBJE OLUŞTURMA
// let value;

// const programmer = {

//     name : "neslin baydar",
//     age:24,
//     email:"beyn@gmail.com",

//     address:{
//         city:"ist",
//         street:"moda",
//     },
//     work : function(){
//         console.log("programcı çalışıyor...");

//     }
//    } 
//    value = programmer.langs;
//    value = programmer.address.city;

//    programmer.work();

// value = programmer[0].name;
 
//    console.log(value);
//    console.log(name);


//    const now = new Date();
//    const date1 = new Date();

//    value = date1;
//    value.date1.getMonth();
//    value 

// function user()
// {
//     this.yas = 25;
// }
// user.prototype.getYas= function()
// {
//     return this.yas;
// }

// if(!UserNamespace) UserNamespace = {};
// UserNamespace.user = function() 
// {
//     this.yas = 25;
// };
// UserNamespace.user.prototype.getYas = function()
// {
//     return this.yas;
// };

// var u = new UserNamespace.user()
// alert( u.getYas() );

// const process = "5";
// if(process== "1"){
//     console.log("işlem1");
// }
// else if(process=="2"){
//     console.log("işlem2");
// }
// else if(process=="3")
// {
//     console.log("işlem3");

// }
// else if(process=="4"){
//     console.log("işlem4");
// }
// else{
//     console.log("hatalı işlem");
// }


// ///TERNARY OPERATOR
// const person = 'Perseus';
// 2- person === 'Medusa' ? console.log('Yep, Medusa!') : 
// 3- console.log(`Nope, not Medusa. That's ${person}.`);

// const number="120";

// if(number ==100)
// {
//     console.log("sayı 100'e esit")
// }
// else if(number!=100){
//     console.log("sayi 100'e esit degil");
// }

// ////aynı örneği ternary operatörüyle yap////
//  console.log(number==100 ? "sayi 100' esit":"sayi 100'e esit degil");

// ////FONKSİYON TANIMLAMA///////
// function merhaba(name="bilgi yok",age="bilgi yok"){
//     console.log('isim: ${name} Yaş:${age}');

// }
// merhaba("ayse",24);
// merhaba();
// merhaba("neslin");

// function square(x){
//    // console.log(x*x);
//    return x*x;
// }
// function cube(x){
//     ///console.log(x*x*x);
//     return x*x*x;
// }
// let a=square(12);
// a=cube(a);
// console.log(a);
// ///IIFE

// (function (name)
// {
//     console.log("Merhaba:"+name);
// })("Murat");

// const database = {
//     host: "localhost",
//     add: function(){
//         console.log("eklendi!");
//     },
//     get:function () {
//         console.log("elde edildi!");
        
//     },
//     update: function(id){
//         console.log('Id:${id} güncellendi');

//     },
//     delete: function(id){
//         console.log('Id: ${id} güncellendi');
//     }
// }

// console.log(database.host);
// database.add();

// database.delete(10);

// let i=0;
// while(i<10)
// {
//     console.log(i);

//     i+=i; ///i++
// }

// let i=10;

// while(i>0){
//     console.log(i);
//     //i--; i--
//     i-=2;
// }
 ////// break ve continue////
//  let i=0;
//  while(i<10)
//  {
//      console.log(i);
//      if(i==3 || i==5){
//          continue;
//      }
//      console.log(i);
//      i++;
//  }
// while(i<10){
//     if(i==3 || i==5){
//         i++;
//         continue;
//     }
//     console.log(i);
// }

///////DO-WHİLE//////
// let i=0;

// do{
//     console.log(i);
//     i++;
// }
// while(i<10);


// const langs = ["python","javascript","java"];

//  let index=0;
// while(index<langs.length){
//     console.log(langs[index]);
//     index++;
// }
// for(let index = 0; index<langs.length;index++)///iterasyon(tek tek bütün elemanlar üzerinde gezindik)

// {
//     console.log(langs[index]);

// }

// ////FOR EACH DÖNGÜSÜ////
// langs.forEach(function(lang,index)
// {
//     console.log(lang,index);
// });


// var numbers= [1,2,3,4,5];
// var sum=0;
// function addNumbers(number){
//     sum+=number;
// }
// numbers.forEach(addNumbers);
// console.log(sum);

// const users =[
//     {name:"Mustafa",age:25},
//     {name:"zeynep",age:40},
//     {name:"ali",age:40},
//     {name:"Ali",age:12}
// ];

// const names=users.map(function(user){
//     return user.name;
// });
// const ages=users.map(function(user){
//     return user.ages;
// });
// console.log(names);
// console.log(ages);

// const user = {
//     name:"Mustafa",
//     age:25
// };
// for(let key in user){
//     console.log(key,user[key]);
// }

// let sehnufus=["londra:14","istanbul:16","viyana:20"];
// for(let key in sehnufus)
// {
//     console.log(key);
// }

////ALERT
// console.log(window);


// const cevap = confirm("emin misiniz?");
// console.log(cevap);
// if(cevap==true)
// {
//     console.log("silmeyin");
// }

// const cevap= prompt("2+2 =?");

// let value;
// value= window;
// value=window.location;
// value=window.location.host;
// value= window.location.port;
// value=window.location.href;

// if(confirm("sayfa yenilensin mi?"))
// {
//     window.location.reload();
// }
// else{
//     console.log("sayfa yenilenmedi");
// }
//  value=window.outerHeight;

//  console.log(value);

// value= window.scrollX;
// console.log(value);


// var value1=10;
// let value2=20;
// const value=30;

// function Func()
// {
//     var value1=40;
//     let value2=50;
//     const value3=60;

//     console.log(value1,value2,value3);
// }
// Func();


// var MyClass = (function () {
//     var A = 10;
//     function MyClass() {
//     }
//     MyClass.prototype.getA = function(){
//         return A;
//     };
//     return MyClass;
//   })();
//   var mc = new MyClass();
//   console.log(mc.getA());
//   console.log(mc.A); // degisken private oldugu icin undefined yazacak

// if(true)
// {
//     var a=10;
//     var b=20;
//     const c=30;
//     console.log(a,b,c);
// }

// console.log()

// const database="123456";
// if(true)
// {

//     let a="34343434";



// var arr = ['one', 'two', 'three'];

// var [x, y, z] = arr;
// console.log(x); // "one"
// console.log(y); // "two"
// console.log(z); // "three"
// accio('Harry'); // ReferenceError: not defined

// someOtherFunctionName('Harry'); // undefined so TypeError: not a function



// var someOtherFunctionName = function accio(name) {

//   console.log(name + ' Potter!');

// }

// function formatMessage(name,id,avatar){
//   return{
//     name:name,
//     id:id,
//     avatar:avatar,
//     timestamp:Date.now()

//   }
// }


// var scope = "I am global";
// function whatismyscope(){
//    var scope = "I am just a local";
//    function func() {return scope;}
//    return func;
// }

// whatismyscope()()

// var foo="foo";
// (function IIFE(bar){
//   var foo ="foo2";
//   console.log(foo);///"foo2"
// })(foo);

// console.log(foo);///foo
// function lab(){
// var vehicle='car';
// console.log(vehicle);
// ///lexical scope burda başlıyor
// function bus(){
//   console.log(vehicle);
// }////burda bitiyor
// bus();
// }
// lab();

// function Person() {
//   // The Person() fonksiyonu kendini temsil eden this değerini oluşturuyor
//   this.age = 0;

//   setInterval(function growUp() {
//     // non-strict modda, growUp() fonksiyonuda her fonksiyon gibi 
//     // kendi this değerini tanımlar
//     // bu sayede bir üstteki this değerine artık ulaşamıyor oluruz
//     this.age++; //bu işlem Person() fonksiyonundaki age değerine işlemez.
//   }, 1000);
// }

// var p = new Person();
// function Person(){
//   this.age = 0;

//   setInterval(() => {
//     this.age++; // |this| person objesine atıfta bulunur
//   }, 1000);
// }

// var p = new Person();

// var adder = {
//   base: 1,

//   add: function(a) {
//     var f = v => v + this.base;
//     return f(a);
//   },

//   addThruCall: function(a) {
//     var f = v => v + this.base;
//     var b = {
//       base: 2
//     };
// return f.call(b,a);
//   }
// };
// console.log(adder.add(1));         // This would log to 2
// console.log(adder.addThruCall(1)); // This would log to 2 still

// var arguments = [1, 2, 3];
// var arr = () => arguments[0];

// arr(); // 1

// function foo(n) {
//   var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
//   return f(10);
// }

// foo(1); // 2

// var obj = {
//   i: 10,
//   b: () => console.log(this.i, this),
//   c: function() {
//     console.log(this.i, this);
//   }
// }
// obj.b(); // prints undefined, Window {...} (or the global object)
// obj.c(); // prints 10, Object {...}

// var obj = {
//   a: 10
// };

// Object.defineProperty(obj, 'b', {
//   get: () => {
//     console.log(this.a, typeof this.a, this);
//     return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
//   }
// });
// var Foo = () => {};
// var foo = new Foo();////TypeError: Foo is not a constructor


// var Foo = () => {};
// console.log(Foo.prototype);////undefined

// var func = x => x * x;                  
// // concise body syntax, implied "return"

// var func = (x, y) => { return x + y; }; 
// // with block body, explicit "return" needed

// var func = () => { foo: 1 };               
// // Calling func() returns undefined!

// var func = () => { foo: function() {} };   
// // SyntaxError: function statement requires a name
// var func = () => ({foo: 1});

// var calculate = {  
//   array: [1, 2, 3],
//   sum: () => {
//     console.log(this === window); // => true
//     return this.array.reduce((result, item) => result + item);
//   }
// };
// console.log(this === window); // => true  
// // Throws "TypeError: Cannot read property 'reduce' of undefined"
// calculate.sum();  
// function Orc(name) {  
//   this.orcName = name;
// }
// Orc.prototype.sayOrcName = () => {  
//   console.log(this === window); // => true
//   return this.orcName;
// };
// var orcish = new Orc('WOAAAAAA!');  
// orcish.sayOrcName(); // => undefined  
// const myFunc=()=>{
//   console.log(this);
// };
// myFunc();



// var myMethod = function () {
//   console.log(this.i);
//  };
//  var myObject = {
//   myMethod: myMethod,
//   i:10
//  };
//  var copyFunc = myMethod.bind(myObject)
//  copyFunc()

// const myObject = {
//   myArrowFunction: null,
//   myMethod: function () {
//     this.myArrowFunction = () => { console.log(this) };
//   }
// };
// myObject.myMethod() // this === myObject

// myObject.myArrowFunction() // this === myObject

// const myArrowFunction = myObject.myArrowFunction;
// myArrowFunction() // this === myObject


// const myMethod = () => {
//   console.log(this);
// };

// const myObject = {};

// myMethod.call(myObject, args1, args2, ...) // this === window or global object
// myMethod.apply(myObject, [array of args]) // this === window or global object

// const myMethodBound = myMethod.bind(myObject);

// myMethodBound(); // this === window or global object
// new myMethod(); // Uncaught TypeError: myMethod is not a constructor

// myObject = {
//   myMethod: function () {
//     helperObject.doSomethingAsync('superCool', () => {
//       console.log(this); // this === myObject
//     });
//   },
// };

// const reusabledCallback = () => {
//   console.log(this); // this === window or global object
// };

// myObject = {
//   myMethod: function () {
//     helperObject.doSomethingAsync('superCool', reusabledCallback);
//   },
// };

// function StartCounting(){
//   this.count=0;
//   this.addCount=function(){
//     this.OneUp=setTimeout(function(){
//       console.log(++this.count);
//       console.log(this);
//  },1000)
//   }
//     }
  
//   var countThisShit =new StartCounting();
//   countThisShit =new StartCounting();
//   countThisShit.addCount();

////HOUSTING///////////
// var x = 715; // x'i tanımladık ve 715 değerini atadık.
// var y = 815; // y'yi tanımladık ve 815 değerini atadık.

// alert(x + " ve " + y);

//  function hoist(){
//    a=20;
//    var b=100;
//  }

//  hoist();
//  console.log(a);
//  console.log(b);/////b is undefined diyecek.


// var arr= {"data":
// {"tournaments":[{
//     "event_count":1,
//     "events":{"19153938":19153938
// },
//     "id":55970,
//     "name":"Philippines - Pvl, Open Conference",
//     "order":5,"sport_id":23
// },
//     {"event_count":1,
//     "events":
//     {"17686592":17686592
// },
//     "id":79819,
//     "name":"International - Fiba World Cup, Group H","order":4,
//     "sport_id":2
// },
//     {"event_count":2,
//     "events":{"19348464":19348464,"19348466":19348466},
//     "id":85316,
//     "name":"Challenger - Jinan, China","order":3,"sport_id":5},
//     {"event_count":2,
//     "events":{"19348464":19348464,"19348466":19348466},
//     "id":45786,
//     "name":"Challenger - Fiba World Cup, Group J","order":1,
//     "sport_id":5
// }
// ]}};

// arr.sort(tournaments.order);
// console.log(tournaments.order);
// var arr=arr.filter(x => x.id > '60000');
// var sortArray = arr['tournaments'];
// sortArray.sort(function(a,b) {
//         if ( a.order < b.order )
//             return -1;
//         if ( a.order > b.order )
//             return 1;
//         return 0;
//     } );
//     /önce sıralayacaksın sonrada filter uygulayacaksın.


// arr = arr.sort(function(a,b){return b.number-a.number || b.rating.average-a.rating.average}).filter(function(a,b,c){return !b || c[b-1].number != a.number});
// console.log(arr);


// var dataArr = {  

//     "hello": [{
//     "id": 114,
//     "keyword": "zzzzzz",
//     "region": "Sri Lanka",
//     "supportGroup": "administrators",
//     "category": "Category2"
// }, {
//     "id": 115,
//     "keyword": "aaaaa",
//     "region": "Japan",
//     "supportGroup": "developers",
//     "category": "Category2"
// }]

// };
// var sortArray = dataArr['hello'];
// sortArray.sort(function(a,b) {
//     if ( a.region < b.region )
//         return -1;
//     if ( a.region > b.region )
//         return 1;
//     return 0;
// } );

// let arrayToSort = {
//     "data": {
//         "tournaments": [
//             {
//                 "event_count": 1,
//                 "events": {
//                     "19153938": 19153938
//                 },
//                 "id": 55970,
//                 "name": "Philippines - Pvl, Open Conference",
//                 "order": 5,
//                 "sport_id": 23
//             },
//             {
//                 "event_count": 1,
//                 "events": {
//                     "17686592": 17686592
//                 },
//                 "id": 79819,
//                 "name": "International - Fiba World Cup, Group H",
//                 "order": 4,
//                 "sport_id": 2
//             },
//             {
//                 "event_count": 2,
//                 "events": {
//                     "19348464": 19348464,
//                     "19348466": 19348466
//                 },
//                 "id": 85316,
//                 "name": "Challenger - Jinan, China",
//                 "order": 3,
//                 "sport_id": 5
//             },
//             {
//                 "event_count": 2,
//                 "events": {
//                     "19348464": 19348464,
//                     "19348466": 19348466
//                 },
//                 "id": 45786,
//                 "name": "Challenger - Fiba World Cup, Group J",
//                 "order": 1,
//                 "sport_id": 5
//             }
//         ]
//     }
// };
// ///sorting in place -----original arrayin üzeine yazıyorum
// arrayToSort.data.tournaments=arrayToSort.data.tournaments.sort((a,b)=>a.order-b.order);
// console.log("tournaments array sorted by order:");
// printArray(arrayToSort.data.tournaments);

// // sorting in place -- orijinal array'in üzerine yazıyorum
// arrayToSort.data.tournaments = arrayToSort.data.tournaments.filter(item => item.id <= 60000);
// console.log("Tournaments array without the items with id > 60000:");
// printArray(arrayToSort.data.tournaments);


// function printArray(array) {
//     for (i of array) {
//         console.log(i);
//     }
//     let separator = "";
//     for (let i = 1; i <= 50; i++) {
//         separator += "=";
//     }
//     console.log(separator);
// }


///normal function definition
// function hello(){
//     alert('Hello world');
// }
// hello();

// ///anonim function definition
//  var anon=function(){
//     var anon=function(){
//         alert('I am anonymous');
//     }
//     anon();
// }


//////ANONYMOUS FUNCTION///////
// $(document).ready(function(){
// });

/////callback in anonymous function

// function functionWithCallback(callback){
//     callback(3,4,5,6);
// }
// functionWithCallback(function(a,b,c,d){
//     console.log(a,b,c,d);
// })
// functionWithCallback(callbackFunctionfunction);

// function sum(...arguments) {
//     var s = 0;
//     for (var i=0; i < arguments.length; i++) {
//         s += arguments[i];
//     }
//     return s;
// }
//  sum(3,5);

// function sum(...sayilar){
//     return sayilar.reduce ((x,y) => x+y);
//   }
//   console.log(sum(1,2,3));
//   console.log(sum(1,2,3,4,5,6));
//   console.log(sum(1,2));
// const person1={
//   set name(newName){
//     console.log(newName);
// }
// }
// //this won't work
// const person2={}
// Object.assign(person2,person1)



// var Harry = new Potter('harry'); // Harry Potter!

// function Potter(name) {
//   console.log(name + ' Potter!');
// }
// console.log(Harry); // Potter function object


//accio('Harry'); // ReferenceError: not defined


// var x = 5; // Initialize x
// console.log( x + " " + y);           // Display x and y
// var y = 7; // Initialize y
// //y undefined verir
// //çünkü aşağıda tanımlanmış
// //sonuç
// //x is 5 and y is undefined
// var x = 5; // Initialize x
// var y; // declare y
// console.log( x + " " + y);           // Display x and y
// y = 7; // Initialize y
// //burda da y undefined verir

// var x = 5; // Initialize x
// var y = 7; // Initialize y
// console.log( x + " " + y);           // Display x and y


// x = 5; // Assign 5 to x

// // elem = document.getElementById("demo"); // Find an element
// // elem.innerHTML = x;                     // Display x in the element
// console.log(x + " ");
// var x = 5; // Initialize x
// var y;     // Declare y

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y

// y = 7;    // Assign 7 to y

// const person1={
//     set name(newName){
//       console.log(newName);
//   }
//   }
//   //this won't work
//   const person2={}
//   Object.assign(person2,person1)
  
//   //but this will work:
//   const person3 = {}
//   Object.defineProperties(person3,Object.getOwnPropertyDescriptors(person1));
//   ///as you can see with a simple console test
//   person1.name='x';


// console.log(b); ///aslında burada var b; demişiz gibi bu ifade
// var test3 = function test4() {
//  console.log(a);
// }
// var b = 3;
// var a = function test(){};
// test3();

// function hoist() {
//   a = 20;
//   var b = 100;
//  }
//  //hoist();
//  console.log(a);
//  /*
//  Accessible as a global variable outside hoist() function
//  Output: 20
//  */
//  console.log(b);
//  /*
//  Since it was declared, it is confined to the hoist() function scope.
//  We can't print it out outside the confines of the hoist() function.
//  Output: ReferenceError: b is not defined
//  */
 

// const PI = 3.142;

// PI = 22/7; // Let's reassign the value of PI

// console.log(PI); // Output: TypeError: Assignment to constant variable.


// function getCircumference(radius) {
//   console.log(circumference)
//   circumference = PI*radius*2;
//   const PI = 22/7;
// }

// getCircumference(2) // ReferenceError: circumference is not defined

// function sum(arguments){
// var toplam =0;
// for(var i in arguments){
//   toplam +=arguments[i];
// }
// return toplam;
// }
// console.log(sum(arguments));


// function sum(...theArgs) {
//   return theArgs.reduce((previous, current) => {
//     return previous + current;
//   });
// }
// console.log(sum(5,9,60));


// function multiply(...theArgs) {
//   return theArgs.reduce((previous, current) => {
//     return previous * current;
//   });
// }
// console.log(multiply(1,2,3,4,5,6,7,8,9,10));


// const person={
//   firstName:'Mosh',
//   lastName: 'Hamedani',
//   get fullName(){
//     return '${person.firstName} ${person.lastName'
//   },
//   set fullName(value){
//     value.split(' ');
//     this.firstName = parts[0];
//     this.lastName= parts[1];


//   }
// };

// person.fullName = 'John Smith';

// //getters =>
// //setters =>
// console.log(person.fullName);

// const person ={
//   firstName: "Aydın",
//   lastName: "Can",
//   get fullName(){
//       return '${person.firstName} ${person.lastName}'
//   },
//   set fullName(value) {
//       const parts = value.split(' ');
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//   }
// };
// person.fullName = "Mehmet Cem";
// console.log(person.fullName);
// //${person.firstName} ${person.lastName} //bunun başına ve sonuna back tick koy

// class Square{
//   constructor(_width){
//     this.width=_width;
//     this.height=_height;
//   }
//   set area(area){
//     this.width=Math.sqrt(area);
//     this.height=this.width;
//   }
// }

// class Person{
//   constructor(name){
//     this.name=name;
//   }
//   get name(){
//     return this.name
//   }
// }

// o = { bar: 42 };
// d = Object.getOwnPropertyDescriptor(o, 'bar');


// function cloneObject(obj) {
//   if (obj === null || typeof(obj) !== 'object')
//       return obj;
//   var temp = obj.constructor(); // changed
//   for (var key in obj) {
//       if (Object.prototype.hasOwnProperty.call(obj, key)) {
//           obj['isActiveClone'] = null;
//           temp[key] = cloneObject(obj[key]);
//           delete obj['isActiveClone'];
//       }
//   }
//   return temp;
// }

// let x = {
// a: new Date(),
// b: NaN,
// c: new Function(),
// d: undefined,
// e: function () { },
// f: Number,
// g: false,
// h: Infinity,
// i: Symbol(),
// j: { a: {'sth' : 'something'}, b: 56 }
// };


// var b = cloneObject(x); 
// b.j.a.sth ="else"//
// console.log(x)
// console.log(b)

// function clone(obj){
//   if(typeof obj != 'object'){ ///tipi obje değilse obje döndürsün
//     return obj;
//   }
//  let temp = obj.constructor();   ///// obje içinde obje olabilir.onun içine de girmek için
//  for(let key in obj){
//    if(obj.hasOwnProperty(key)){
//      temp[key] = clone(obj[key]);
//    }
//  }
//  return temp;
// };
// const obj = {
//  a: new Date(),
//  b:"10",
//  c:{
//    a:"5",
//    b:{
//      deneme:'5'
//    }
//  }
// };
// console.log(clone(obj))

// var a;
// var b = null;
// function check(x, name) {
//     if (x == null) {
//         console.log(name + ' == null');
//     }
//     if (x === null) {
//         console.log(name + ' === null');
//     }
//     if (typeof x === 'undefined') {
//         console.log(name + ' is undefined');
//     }
// }
// check(a, 'a');
// check(b, 'b');


// function sort(values) {
//   var origValues = values.slice();
//   var length = origValues.length - 1;
//   do {
//     var swapped = false;
//     for(var i = 0; i < length; ++i) {
//       if (origValues[i] > origValues[i+1]) {
//         var temp = origValues[i];
//         origValues[i] = origValues[i+1];
//         origValues[i+1] = temp;
//         swapped = true;
//       }
//     }
//   }
//   while(swapped === true);
//   return origValues
// }


//  function sum(...x) {
//    var s = 0;
   
//    theArgs.map(sum(...x){s+=x})
//  }
// console.log(s) // displays 25
// // console.log(sum(5,6,9,78,3));

// //var a = [10, 5, 3, 7]
/*
function sum(array){
  let sum=0;

  for(let i=0;i<array.length;i++){
    sum+=array[i];
  }
  return sum;
}
console.log(sum([3,4,5,6,7,8]));
*/

// function sum(array) {
//   if (array.length === 0) {
//     return 0;
//   } else {
//     let [head, ...tail] = array;
//     return head + sum(tail);
//   }
// }

// sum([1, 2, 3, 4, 5]); // 15


// function multiply(multiplier, ...theArgs) {
//   return theArgs.map(function(element) {
//     return multiplier * element;
//   });
// }

// var arr = multiply(2, 1, 2, 3,8,36); 
// console.log(arr); 


// function add(...array){
//   let sum = 0;
//   for(let i=0;i<array.length;i++){
//     sum+=array[i];
//   }
//   return sum;
// }
//  /* console.log(add(1,2)); //3
//  */ console.log(add(1,2,3)); //6
//   console.log(add(1,2,3,4,5,63,98,3657,5236,9845)); 


//   function multiply(m,n)
//   {
//     var result;
  
//     if (n == 1)
//       result =  m;
//     else
//       result =  m + multiply(m, n-1,);
//     return(result);
//   }
// console.log(multiply(8,9));


// function multiply( ...theArgs) {
//   var result=1,
//   return theArgs.map(function(element) {
//      result=element*result;
//   });
// }
 
// var arr = multiply(2, 1, 2, 3,8,36); 
// console.log(arr); 

// var arr=[1,23,4,5,6];
// var arr1=arr.map(x=>x*2);

// var numbers1 = [4,9,5,10];
// var numbers2 = numbers1.map(myFunction);
// function myFunction(value, index, array) {
//   for(i=0; i<index;i++){
//     value = array[i]*value;
       
//   }
//   return value;
// }

// console.log(numbers2[i]);


// /* FILTER FUNCTION   */

// let arr1=[1,2,5,6];
// arr1.flatMap(x=>[x*2]);
// console.log(arr1);

// arr1.flatMap(x=>[[x*2]]);
// console.log(arr1);

// let array=["have fun with javascript"," ","Istanbul"];

// array.map(x=>x.split(""));

// array.flatMap(x => x.split(" "));

///reduce ve concat flatMap'e alternatif
// let array1=[2,3,4,5,6];
// array1.flatMap(x=>[x*3]);

// let arrA = [1, 2, 3, 4];
// let arrB = arrA.flatMap(x => [x * 2]);
// console.log(arrB);

// var arr1=[3,4,5,6];
// arr1.flatMap(x=>[x*2]);
// arr1.reduce(acc,x)=>acc.concat([x=>x*2],[])

// var carpim=1;
// var array=[1,2,3,4];
// var array2=array.map(myFunction);
// function myFunction(value,index,array){
// for(i=0;i<index;i++){
//   value=value*array[i];
// }
// return value;
// }
// console.log(array2[i]);

// const flatMap=(a,f)=>a.map(f).reduce((xs,ys)=>[...xs,...ys]);
// [4,5,5].map(x=>[x,x+1]);
// flatMap([4,5,6],x=>[x,x+1]);

// Array.prototype.flatMap=function(lambda){
//   return Array.prototype.concat.apply([],this.map(lambda));

// };
 
/*
var cars = ['BMW', 'Volvo', 'Mini'];
var x;
for (x of cars) {
  document.write(x + "<br >");
}

*/


/*
let iterable=[10,20,30];
for(let value of iterable){
  value+=1;
  console.log(value);
}

*/


// var carpim=1;
// var arr1=[5,6,5];

// function multiply(arr){
  
//    for(var value of arr1){
   
//    carpim = value*carpim;
// }
//    if(value == arr1[arr1.length-1]){
//      return carpim;
//    }
  
// }

// console.log(multiply(arr1));

/*
var sum=0;
var arr1=[6,7,8,2];

function add(arr){
  for(var value of arr1){
    sum=value+sum;
  }
  if(value==arr1[arr1.length-1]){
    return sum;
  }

}
console.log(add(arr1));

*/

// var sum=0;
// var arr1=[6,7,8,2];

// function add(arr){
//   for(var value in arr1){
//     sum=value+sum;
//   }
//   if(value==arr1[arr1.length-1]){
//     return sum;
//   }

// }
// console.log(add(arr1));

// function test(){
//   if(a===undefined ){
//     return 'Undefine value!';
//   }
//   return a;
// }
// var x;
// console.log(test(x));

// var x;
// if(typeof x === 'undefined'){

// }
// if(x ===undefined){

// }

// //alternative
//  var x;
//  if(x ===void 0){

//  }
//  if(y===void 0){

//  }

// function Bird(name) {
//   this.name = name; //own property
//   this.numLegs = 2; //own property
// }

// Bird.prototype.numLegs = 2; // prototype property

// let duck = new Bird("Donald");
// let canary = new Bird("Tweety");

// let ownProps = [];
// for(let property in duck){
//   if(duck.hasOwnProperty(property)){
//     ownProps.push(property);
//   }
// }

// console.log(ownProps);


// var arr = [{
//   id: 3,
//   name: 'tournament3'
// }, {
//   id: 1,
//   name: 'tournament1'
// }]

// function filterFunc(arr){
//   var result=arr.filter(item => item.id > 1);
//   return result;

// }
// console.log(filterFunc(arr));






////BUBBLE SORT ALGORITHM

// var arr=[2,4,7,3,8,2,9];

// var myFunc=function bubbleSort(arr){
// var temp;
// var i,j=0;
// for(i=0;i<arr.length;i++){       ////bütün elemanların kontolünü sağlıyorum
//   for(j=0;j<arr.length-1;j++){   ///arrayin içinde dolaşıyorum
//     if(arr[j]>arr[j+1]){
//       temp = arr[j];
//       arr[j] = arr[j+1];
//       arr[j+1] = temp;

//     }
    
//   }
// }
// return arr;
// }

// console.log(myFunc(arr));


//SELECTION SORT
// var arr = [8,36,10,12,3];
// var len = arr.length;
// function selectionSort(arr){
  
// for(i=0; i<len-1; i= i+1){    ///her  elemanın kontolünü sağlıyorum
//      min = i;

//      for(j=i+1; j<len; j= j+1){
//        if(arr[j]<arr[min]){
//          min = j;
//        }
//        else{

//        }
//      }
//      if(min != i){
//        temp = arr[min];
//        arr[min] = arr[i];
//        arr[i] = temp;

//      }
//      else{

//      }

//     }
//     return arr;
    
//   }
// console.log(selectionSort(arr,len,0));


//////////////////Selection Sort (bu daha iyi)
// //array to sort
// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// // swap function helper
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// function selectionSort(array) {
//   for(var i = 0; i < array.length; i++) {
//     var min = i;
//     for(var j = i + 1; j < array.length; j++) {
//       if(array[j] < array[min]) {
//         min = j;
//       }
//     }
//     swap(array, i, min);  
//   }
//   return array;
// }

// console.log(selectionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]




//INSERION SORT
// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// function insertionSort(array) {
//   for(var i = 0; i < array.length; i++) {
//     var temp = array[i]; ///temp'i key gibi düşünebiliriz. dizinin i.elemanına 
//     var j = i - 1;  ///j değeri key değerinin solunda kalan sayıları kontrol edebilmemiz için kullandığımız bir değişken.i=1 ise j bir sağındaki sayıdan başlatıyorum key değerini.
//     while (j >= 0 && array[j] > temp) {  ///temel şart j değeri>key olmasıdır.döngü dönmesi için.kaydırma işlemi için
//       array[j + 1] = array[j];  ///j'yi bir ileri,sağa hareket ettir.kaydırır.tek adım kaydırma işlemi.
//       j--; ////her adımda bir azaltırız. j=j-1 'de diyebilirim.
//     }
//     array[j + 1] = temp; ///kaydırdık artık indexi yerleştirmeyi yani atamayı yapıyorum.Bu satır doğru pozisyona eleman ekleme işlemini gerçekleştiriyor.
//   }
//   return array;
// }

// console.log(insertionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]



// var arr =[5,6,8,20,3,63];
// var arr2= arr.map(x => x*2);
// console.log(arr2);

// var arr3 = arr.filter(function (element){
//   return element > 5;
// })
// console.log(arr3);


// var arr = [2,5,8,40];
// var arr2 = arr.reduce(function(result,value){
//   return result + value ;
// })
// console.log(arr2)

// const items = ["list", "of", "words"];
// const wordLengths = items.reduce(function(result,element){
//   result[element] = element.length;
//   return result;
// },{});
// console.log(wordLengths);


// var person= {
//   name:"John Doe",
//   age:42,
//   gender:'male',
//   bio:function(){
//       console.log('my name is '+this.name);
//   }
// };
// person.bio(); //"logs my name is john doe"
// var bio=person.bio;
// bio(); //logs my name is undefined

// person.bio();
// person.bio.call(person)
// person.bio.apply(person);




// var person = {
//   name:'John Doe',
//   age:42,
//   gender:'male',
//   bio: function(age) {
//       console.log("My name is " + this.name + " "+age)
//     }
//  };
//  var anotherPerson ={
//  name:"Aydın Can",
//  age:42
//  };
//  otherPerson = person.bio.bind(anotherPerson)
//  otherPerson(32)

// // Call
// var person ={
//   name: "John Doe",
//   age:42,
//   gender:"male",
//   bio: function() {
//     console.log("My name is " + this.name)
//   }
// };
// person.bio()
// var bio = person.bio
// bio.call(person);



// BİR DEĞİŞKENİN ARRAY OLUP OLMADIĞINI ANLAMAK İÇİN BİLDİĞİMİZ YÖNTEMLER
// var nums = [1,2,3]
// nums.constructor.toString().indexOf("Array") > -1
// //nums.constructor === Array

// var arr = []
// if(arr instanceof Array){
//   console.log("hey")
// }
// Array.isArray(nums)




//ARRAY Mİ DEĞİL Mİ ONU KONTROL EDİYOR.
// var array = [3,5,9,10];
// if(!Array.isArray(array)){
//  Array.isArray = function(obj){
//    return Object.prototype.toString.call(obj) == ['object Array'];
//  }
     
// }else{
//   console.log("this is not an array")
// }


// const items = new Array();   ///bad one

// const items = [ ];    ///good one

// function multiply(x,y,z){
//   return x*y*z;
// }
// const numbers = [1,2,3];
// console.log(multiply(...numbers));


// const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
// const arr = Array.from(arrLike);
// console.log(arrLike);

// Array.from("birşey");

// [2,3,4].map((x) =>x+1);


/*
console.log([1,2,3,4].slice(2));
console.log([1,2,3,4].find(x => x-2));
console.log([1,2,3,4].shift());
console.log([1,2,3,4].pop());
console.log([1,2,3,4].reduce(x => x));
console.log([1,2,3,4].reduce((x,y) => y));
console.log([1,2,3,4].reduce((x,y)= x+y,1));
console.log([1,2,3,4].reduce((x,y)= x*y,2));
console.log([1,2,3,4].map((x,y)=>x));
console.log([1,2,3,4].map((x,y)=>y));
console.log([1,2,3,4].map((x,y)=>x+y));
console.log([1,2,3,4].filter((x,y)=>x-2));
console.log([1,2,3,4].filter((x,y)=>y-2));
console.log([1,2,3,4].filter((x,y)=>y));
console.log([1,2,3,4].filter((x,y)=>y>2));
*/


/*
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array){
  for(var i=0;i<array.length;i++){
    var temp=array[i];
    var j=i-1;
    while(j>=0 && array[j] > temp){
      array[j+1]=array[j];
      j--;
    }
    array[j+1] = temp;
  }
  return array;
}
console.log(insertionSort(array));
*/


// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// function swap(array,i,j){
//   var temp =array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// function selectionSort(array){
//   for(var i=0;i<array.length;i++){
//     var min=i;
//     for(j=i+1;j<array.length;j++){
//       if(array[j]<array[min]){
//         min = j;

//       }
//     }
//    swap(array,i,min);
//   }
//   return array;
// }



// var arr=[2,4,7,3,8,2,9];
// var myFunc=function bubbleSort(arr){
// var temp;
// var i,j=0;
// for(i=0;i<arr.length;i++){
//  for(j=0;j<arr.length-1;j++){
//    if(arr[j]>arr[j+1]){
//      temp = arr[j];
//      arr[j] = arr[j+1];
//      arr[j+1] = temp;
//    }
//  }
// }
// return arr;
// }
// console.log(myFunc(arr));        //////[2, 2, 3, 4, 7, 8, 9]




// function insertionSort(array){
//   for(i=0;i<array.length; i++){
//     var temp =array[i];
//     var j= i-1;
//     while ( j >=0 && array[j]>temp){
//       array[j+1] = array[j];
//       j--

//     }
//     array [j+1] = temp;
//   }
//   return array;
// }

// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// function insertionSort(array){
//   for( i=0;i<array.length;i++){
//     var temp = array[i];
//     var j = i-1;
//     while( j >=0 && array[j]>temp){
//       array[j+1]= array[j];
//       j--;
//     }
//     array[j+1] = temp;
//   }
// return array;
// }
// console.log(insertionSort(array));


// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];


// function swap(array,i,j){
//   var temp = array[i];
//   array[i] = array[j];
//   array[j]= temp;
// }
// function selectionSort(array){
//   for (var i=0; i<array.length; i++){
//   var min = i;
//   for( var j = i+1; j<array.length;j++){
//     if(array[j] < array[min]){
//       min = j;
//     }
   
//   }
//  swap(array,i,min);
// }
//   return array;
// }


// //1.yöntem set objesini kullanmak
// const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
// /let unique = [...new Set(names)];
// console.log(unique);

// //2.yöntem filter() kullanmak
// const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
// let x = (names) => names.filter((v,i) => names.indexOf(v) ===i)
// x(names);

// //3.yöntem forEach()
// const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
// function removeDup(names){
//   let unique = {};
//   names.forEach(function(i){
//     if(!unique[i]){
//       unique[i] = true;
//     }
// });
// return Object.keys(unique);
// }

// function getData(data){//promise objesi döndüren fonksiyon
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){



//       //resolve("olumlu sonuç");//eğer promise'imiz bize olumlu bir değer dönecekse biz js'te kendi içinde dönen resolve kullanırız
//       //reject("Olumsuz sonuç"); //eğer promise'imiz bize olumsuz sonuç döndürecekse reject kullanıyoruz.
//     },5000 );

//   });

// }
// getData("merhaba").then(function(response){
//   console.log("Gelen değer"+ response);
// }).catch(function(err){
//   console.log(err);
// });



// const sozVerdik = new Promise(function(resolve, reject){
//   if (herseyYolunda) {
//     resolve('İşlem tamam!');
//   } else {
//     reject('Bir sıkıntı var...');
//   }
// })

// sozVerdik.then(function(cevap){
//   console.log(cevap) // 'İşlem tamam!' yazısını basar
// }).catch(function(hata){
//   console.log(hata) // 'Bir sıkıntı var...' yazısını basar
// })

// asenkronIslem()
// .then(sonuc => {
//   return baskaAsenkronIslem(sonuc);
// })
// .then(zincirSonuc => {
//   return zincirSonuc.json();
// })
// .catch(hata => {
//   console.log(hata);
// });
  

//promise zinciri

// const zincirES6 = () => {
//   return asenkronIslem1()
// .then(asenkronIslem2)
// .then(asenkronIslem3)
// }
// zincirES6()
// .then(cevap => console.log(cevap))
// .then(hata => console.log(hata))

// //Async/await

// const zincirES7 = async () => {
//   const sonuc1 = await asenkronIslem1();
//   const sonuc2 = await asenkronIslem2(sonuc1);
//   return asenkronIslem3(sonuc2);
// }

// try{
//   const cevap = await zincirES7();
//   console.log(cevap);
// }catch(hata){
//   console.log(hata);
// }



// function getData(data){//promise objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject){
//       setTimeout(function(){
//         if(typeof data === "string"){
//           resolve(data);
//         }
//         else{
//           reject(new Error("lütfen string bir değer girin"));
//         }
//       },5000);
//     });
//   }

//   getData(24)
//   .then(response =>console.log("gelen değer " + response))
//   .catch(err => console.log(err));



//     function addTwo(number){
//       return new Promise((resolve,reject) =>{
//         setTimeout(function(){
//           if(typeof number === "number"){
//             resolve(number + 2);
//           }
//           else{
//             reject(new Error("lütfen bir sayı girin "));
//           }
//         },3000);
//       });
//     }
//     addTwo(10)
//     .then(response =>{
//       console.log(response);
//       return response + 2;
//     }).then(response2 => console.log(response2))
//     .catch(err => console.error(err));
//     // 1 tane catch - birden çok then kullanabiliriz - Promise Chain
// //return ler ile thenleri bağlayarak promise chain yapabiliriz.




//ES 7 ile gelen async ve await keywordlerini öğrenmeye çalışıcaz.
//promise'leri bu iki anahtar kelime sayesinde daha güzel yönetebiliyoruz ve daha efektif kod yazabiliyoruz.
//  async function test (data){
//    //promise return new promise
//    //return data;

//    }
 
// test("merhaba").then(response => console.log(response));


/*
const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`)
    }, t)
  })
}

// Resolving a normal promise.
timeOut(1000)
 .then(result => console.log(result)) // Completed in 1000

// Promise.all
Promise.all([timeOut(1000), timeOut(2000)])
 .then(result => console.log(result))
 */

// function test(data){
// //promise return new promise

//  return data;//datayı promise'teki resolve'a koyuyor javascript.function'ın başına async yazdığımız için
// }
// console.log(test("merhaba"));

// //await anahtar kelimesi aslında bir promise'in resolve etmesini yani olumlu dönüş yapmasını bekleyen bir anahtar kelime.


// var p = new Promise(function (resolve,reject){
//   if(/* good action */){
//     resolve('başarılı!');
//   }
//   else{
//     reject('hata!');
//   }
// });
// p.then(function(){
//     /*do something with the result*/
// }).catch(function(){
//   /*error */
// })



/*
function get(url){
  return new Promise (function (resolve,reject){
    var req = new XMLHttpRequest();
    req.open('GET',url);
    req.onload = function(){
      if(req.status == 200){
        resolve(req.response);
      }
      else{
        reject(Error(req.statusText));
    }
  };
  //handle network errors
  req.onerror = function(){
    reject(Error("Network Error"));
  };
  //make the request
  req.send();
});
}


// Use it!
get('story.json').then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.error("Failed!", error);
});

*/


// new Promise (function (resolve,reject){
//   setTimeout(function() { 
//     resolve(10);
//   }, 3000);

// })
// .then(function(result){
//   console.log(result);
// });


// new Promise(function(resolve, reject) { 
//   // A mock async action using setTimeout
//   setTimeout(function() { resolve(10); }, 3000);
// })
// .then(function(num) { 
//   console.log('first then: ', num);
//    return num * 2; 
//   })
// .then(function(num) { 
//   console.log('second then: ', num);
//    return num * 2;
//    })
// .then(function(num) {
//    console.log('last then: ', num);
//   });


// Promise.all([promise1,promise2]).then(function (results){
//   //both promises resolved
// })
// .catch(function(error){
//    // one more promises was rejected
// });

// var request1 = fetch('/users.json');
// var request2 = fetch ('/articles.json');
// Promise.all([request1,request2]).then(function(results){
//   ///both promises done!
// });



// var req1 = new Promise(function(resolve, reject) { 
//   // A mock async action using setTimeout
//   setTimeout(function() {
//      resolve('First!');
//      }, 4000);
// });
// var req2 = new Promise(function(resolve, reject) { 
//   // A mock async action using setTimeout
//   setTimeout(function() {
//      reject('Second!');
//      }, 3000);
// });
// Promise.all([req1, req2]).then(function(results) {
//   console.log('Then: ', results);
// }).catch(function(err) {
//   console.log('Catch: ', err);
// });

// async function test(data){
//   let promise = new Promise(resolve,reject) => {
//     setTimeout(() =>{
//       resolve("Bu bir değerdir.");
//     },5000);
//   });

//   let response = await promise; // 5sn. bekleyecek

//   console.log(response);
//   console.log("naber");
// }
// test("merhaba").then(response => console.log(response));



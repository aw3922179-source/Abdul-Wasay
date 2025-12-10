// //VAR VARIABLE


// // var a = 6;
// // a = a + 54;
// // // document.write(a);


// // {
// //     var a = 3;
// //     a = a + 10;
// //     // document.write(a);
// // }

// // document.write(a);


// // LET VARIABLE

// // let a = 24;
// // a = a + 86;
// // // document.write(a);

// // {
// //     let a = 49;
// //     a = a + 21;
// //     // document.write(a);
// // }

// // document.write(a);



// // CONST VARIABLE

// // const a = "Pakistan";
// // a = a + " Karachi";
// // document.write(a);


// //MODULUS OPERATOR

// // let a = 62;
// // let b = 62;
// // document.write(a == b);

// //LOGICAL OPERATOR

// //AND OPERATOR
// // let p = true;
// // let q = true;
// // document.write( p && q );


// //OR OPERATOR
// // let p = false;
// // document.write( !p );


// //CONDITIONAL STATEMENT

// // let age = prompt ("ENTER YOUR AGE!!!");

// // if( age >= 15){
// //     document.write("Have a great ride....");
// // } else{
// //     document.write("Go to your age ride!!!");
// // };


// // let marks = prompt("Enter your marks");

// // if (marks >= 80 && marks <= 100) {
// //     document.write("A+");
// // } else if (marks >= 70 && marks <=79) {
// //     document.write("A")
// // } else if (marks >= 60 && marks <=69) {
// //     document.write("B")
// // } else if (marks >= 50 && marks <=59) {
// //     document.write("C")
// // } else if (marks >= 40 && marks <=49) {
// //     document.write("D")
// // } else if (marks >= 30 && marks <=39) {
// //     document.write("E")
// // } else if (marks > 100){
// //     document.write("out of range.........")
// // } 
// // else {
// //     document.write("FAIL!!!")
// // }


// //switch statements

// // let bike = 2;
// // let bikeName ;

// // switch(bike) {
// //     case 1 :
// //     bikeName = "NINJA ZX 10R"
// //     break;
// //     case 2 :
// //     bikeName = "KAWASAKI 1200 CC"
// //     break;
// //     case 3 :
// //     bikeName = "HONDA 125"
// //     break;
// //     default :
// //     bikeName = "Out Of Stock" 
// // };

// // document.write(bikeName);

// //LOOP

// //FOR LOOP

// // for( let i = 50 ; i <= 100000; i++) {
// //     document.write("Number is :", i , "<br>");
// // };


// //WHILE LOOP

// // let count = prompt ("Enter starting value!");

// // while (count <= 200) {
// //     document.write("while loop: " + count + "<br>");
// //     count++; 
// // }


// // DO WHILE LOOP

// // let count = prompt ("Enter starting value!");

// // do {
// //     document.write( count , "<br>");
// //     count++;
// // } while ( count <= 500 );


// //Flexible Functions
// // let name = prompt("Enter your name..")
// // function greet(name) {
// //     document.write("Hello! " , name , "<br>");
// // }
// // greet(name);



// //ARROW FUNCTION


// // let add = ( a , b ) => a + b;
// // document.write(add( 9 , 5));
// // document.write(add( 153 , 898));

// //ARRAYS

// // let cars = ["BMW" , "MECLAREN"  , "LAMBO" , "CIVIC"];
// // document.write(cars);

// // cars.push("COROLLA")
// // cars.pop("");
// // cars.shift("");
// // cars.unshift("COROLLA")
// // cars.splice(1 , 2)
// // document.write(cars);

// //OBJECT

// // let Bike = {
// //     name : " KAVASAKI NINJA ",
// //     model : "ZX 10R",
// //     year : 2022,
// //     greet : function () {
// //         document.write(`My bike name is : ${this.name}`);
// //     }
// // }

// // document.write(Bike.name,Bike.model);
// // // Bike.greet();\


// //EVENTS    


// // document.getElementById("APIBtn").addEventListener("click", function () {
// //     alert("Go To Footer And Click On The Link To Get More Info About API")
// // });

// //INLINE EVENT


// // function formSubmit() {
// //     alert("Form submited!"); 
// // };

// // let msg = document.querySelector(".message");
// // msg.innerHTML = "changed by using query selector";


// // let para = document.getElementById("message");
// // para.classList.add("highlight");
// // para.classList.remove("highlight");
// // para.classList.toggle("highlight");


// //BOM(BROWSER OBJECT MODEL)

// // document.write(navigator.userAgent)//detail of our browser
// // document.write(navigator.language)//language of your browser
// // document.write(navigator.onLine)//checking of internet connection
// // window.alert("hello from window")
// // document.write(location.href)
// // location.href="https://www.google.com/"

// // let Info = `
// // browser : ${navigator.appName}; <br>
// // version : ${navigator.appVersion}; <br>
// // platform : ${navigator.platform}; <br>
// // language : ${navigator.language} ;<br>
// // online : ${navigator.onLine}
// // `
// // document.getElementById("browserInfo").innerHTML=Info;


// //FORM VALIDATION

// // function validateform() {
// //     let name = document.getElementById("text").value;
// //     let email = document.getElementById("email").value;
// //     let errorMsg = document.getElementById("error");


// // if ( name === "" || email === "" ){
// //     errorMsg.innerHTML = "Please Fill All The Fields"
// //     errorMsg.style.color = "red"
// // } else {
// //     errorMsg.innerHTML = "Form Submitted"
// //     errorMsg.style.color = "green"
// // }
// // };


// //DESTRUCTURING ARRAY

// // let cars = ["BMW" , "MECLAREN"  , "LAMBO" , "CIVIC"];
// // // document.write(cars);
// // let  [first,second,third] = cars;
// // document.write(first,"<br>" , third)



// //DESTRUCTURING OBJECT

// // let Bike = {
// //     name : " KAVASAKI NINJA ",
// //     model : "ZX 10R",
// //     year : 2022,
// // }

// // // document.write(Bike.name  , Bike.model)

// // let { name , model , year } = Bike;
// // document.write( name , model );


// //SPREAD OPERATOR

// // let student = {name :"Ali", age : 19}
// // let newInfo = {...student, college : "For Men"}
// // document.write(newInfo.name)


// //REST OPERATOR

// // function showNames (first,...REST){
// //     document.write(first , "<br>")
// //     document.write(REST)
// // }

// // showNames("Maryam"  ,"Maham" , "Fatima" , "Tasbia" , "Zainab");



// //TEMPLATE LITERALS

// // let name = prompt("Enter Your Name : ")
// // let age = prompt("Enter Your Age : ")
// // document.write(`Hi ! ${name} You Can Enjoy Your ${age} Age Ride`)


// // function greet (name="guest"){
// //     document.write(`Hello! ${name}`, "<br>");
// // }

// // greet("alice");
// // greet();


// //Ternary Operator 

// // let age = prompt("Enter your Age :") ;
// // let message = ( age >= 18 ) ? "Adult" : "Teenager" ;
// // document.write( message );

// // class User {
// //     //CONSTRUCTORS
// //     constructor(name , email){
// //         this.name = name;
// //         this.email = email;
// //         this.loggedIn = false
// //     }
// //     // Methods
// //     login () {
// //         this.loggedIn = true ;
// //         console.log(`${this.name} Logged In.....`)
// //     }
// //     logOut () {
// //         this.loggedIn = true ;
// //         console.log(`${this.name} Logged Out.....`)
// //     }
// // }

// // //CREATE  OBJECTS FROM A CLASS

// // let user1 = new User ("Abdul Wasay" , "aw3922179@gmail.com")
// // user1.login();

// // let user2 = new User ("Maryam" , "maryam327@gmail.com")
// // user2.login();

// // user1.logOut();


// // class User {
// //     //CONSTRUCTORS
// //     constructor(name , email){
// //         this.name = name;
// //         this.email = email;
// //         this.loggedIn = false
// //     }
// //     // Methods
// //     login () {
// //         this.loggedIn = true ;
// //         console.log(`${this.name} Logged In.....`)
// //     }
// //     logOut () {
// //         this.loggedIn = true ;
// //         console.log(`${this.name} Logged Out.....`)
// //     }
// // }


// // const form = document.getElementById("loginform")
// // const welcomescreen = document.getElementById("welcomescreen")
// // const welcomemsg = document.getElementById("welcomemsg")
// // const logoutbtn = document.getElementById("logoutbtn")

// // let currentUser = null;


// // form.addEventListener('submit' , (event) =>{
// //     event.preventDefault();


// // const name = document.getElementById("name").value.trim();
// // const email = document.getElementById("email").value.trim();

// // if( name && email ) {
// //     currentUser = new User (name,email)
// //     currentUser.login();

// //     welcomemsg.textContent = `Hello, ${currentUser.name}!`;
// //     form.style.display = "none";
// //     welcomescreen.style.display = "block";
// // }
// // });


// // logoutbtn.addEventListener("click", () => {
// //     if(currentUser){
// //         currentUser.logOut();
// //         currentUser = null;

// //     form.style.display = "block";
// //     welcomescreen.style.display = "none";
// //     form.reset();
// //     }
// // } );



// //SYNCHRONOUS

// // console.log("step 1");
// // console.log("step 2");
// // console.log("step 3");


// //ASYNCHRONOUS

// // setTimeout(() =>{
// //     console.log("step 1")
// // }, 4000)
// // setTimeout(() =>{
// //     console.log("step 2")
// // }, 5000)

// // setTimeout(() =>{
// //     console.log("step 3")
// // }, 6000)



// //CALLBACKS

// //1 EXAMPLE

// // function sum (a ,b) {
// //     console.log( a + b );
// // }

// // function calculator (a , b , sumCallBack){
// //     sumCallBack(a , b);
// // }

// // calculator (1,4,sum)

// //2 EXAMPLE

// // let hello = () => {
// //     console.log("Hello!!")
// // }

// // setTimeout(hello,5000);

// //3 EXAMPLE

// // function boilegg(callBack){
// //     console.log("Egg is boiling....")
// //     setTimeout(() =>{
// //         console.log("Egg is ready to eat...");
// //         callBack();
// //     }, 5000);
// // }

// // function eategg() {
// //     console.log("I am eating Egg...")
// // }

// // boilegg(eategg);

// // console.log("While the egg is boiling, I'm playing game..");


// // function getdata(dataid, getnextdata){
// //     setTimeout(()=>{
// //         console.log("Data : " , dataid)
// //         if(getnextdata){
// //             getnextdata();
// //         }
// //     },3000)
// // }


// // getdata(1,() => {
// //     console.log("Getting data 2");
// //     getdata(2,() => {
// //         console.log("Getting data 3");
// //         getdata(3,()=>{
// //             console.log("Getting data 4");
// //             getdata(4,()=>{
// //                 console.log("Khatam Data")
// //             });
// //         })
// //     })
// // });


// // let promise = new Promise ((resolve , reject) =>{
// //     console.log("I am a promise");
// //     resolve("successful");
// // });



// // function getdata(dataid, getnextdata){
// //     return new Promise((resolve,reject) =>{
// //         setTimeout(()=>{
// //             console.log("Data : " , dataid);
// //             resolve("success")
// //             if(getnextdata){
// //                 getnextdata();
// //             }
// //         },3000)
// //     })
// // };




// // let getPromise = () => {
// //     return new Promise ((resolve, reject) =>{
// //         console.log("I am a promise");
// //         // resolve("successful");
// //         reject("rejected");
// //     })
// // };

// // let promise = getPromise ();
// // promise.then((res)=>{
// //     console.log("resolved",res);
// // });

// // promise.catch((err)=>{
// //     console.log("rejected",err);
// // });


// // function getdata(dataid, getnextdata){
// //     return new Promise((resolve,reject) =>{
// //         setTimeout(()=>{
// //             console.log(dataid);
// //             resolve("success")
// //             if(getnextdata){
// //                 getnextdata();
// //             }
// //         },3000)
// //     })
// // };

// // // getdata(1).then((res)=>{
// // //     console.log(res);
// // //     getdata(2).then((res)=>{
// // //         console.log(res);
// // //     })
// // // }) ;


// // getdata(1).then((res)=>{
// //     return getdata(2);
// // })
// // .then((res)=>{
// //     return getdata(3);
// // })
// // .then((res)=>{
// //     return getdata(4);
// // })
// // .then((res)=>{
// //     return getdata(res);
// // });


// // async function hello() {
// //     console.log("hello")
// // };


// // function api () {
// //     return new Promise((resolve, reject) =>{
// //         setTimeout(() =>{
// //             console.log("weather data...");
// //             resolve(200);
// //         },5000);
// //     })
// // };
// // async function getweatherdata() {
// //     await api();
// // }


// // function getdata(dataid, getnextdata){
// //     return new Promise((resolve,reject) =>{
// //         setTimeout(()=>{
// //             console.log("Data : " , dataid);
// //             resolve("success")
// //         },3000)
// //     })
// // };

// // async function getAllData() {
// //     console.log("Getting Data 1")
// //     await getdata (1)
// //     console.log("Getting Data 2")
// //     await getdata (2)
// //     console.log("Getting Data 3")
// //     await getdata (3)
// //     console.log("Getting Data 4")
// //     await getdata (4)
// //     console.log("End!!!!")
// // };


// // getAllData();



// // function addToCart() {
// //     return new Promise(resolve => {
// //         setTimeout(() => resolve("Item added to cart!!"), 3000);
// //     });
// // }

// // function processPayment() {
// //     return new Promise(resolve => {
// //         setTimeout(() => resolve("Payment successful...!"), 5000);
// //     });
// // }


// // function deliverOrder() {
// //     return new Promise(resolve => {
// //         setTimeout(() => resolve("Order delivered....."), 7000);
// //     });
// // }

// // async function buyProduct() {
// //     console.log(await addToCart());
// //     console.log(await processPayment());
// //     console.log(await deliverOrder());
// // }


// // buyProduct();


// // async function getrandomuser() {
// //     try {
// //         let response = await fetch ("https://randomuser.me/api/");
// //         if (!response) {
// //             throw new error ("failed to fetch user")
// //         }

// //         let data = await response.json();
// //         let user = data.results[0];

// //         document.write("Name: ", user.name.first , " " , user.name.last , "<br>");
// //         document.write("Email: ", user.email , "<br>");
// //         document.write("Picture: ", user.picture.large);

// //     } catch (error) {
// //         console.log("Error" , error.message);
// //     }
// // }

// // getrandomuser();


// // function divide (a,b ) {
// //     if(b===0) {
// //         throw new Error("You can not divide by zero");
// //     }
// //     return a/b
// // };

// // try {
// //    let div = divide (2,4);
// //    console.log(div);
// // } catch (error) {
// //     console.log(error.message)
// // };

// // const lazyimages = document.querySelectorAll(".lazy");

// // const observer = new IntersectionObserver((entries, observer) => {
// //     entries.forEach(entry => {
// //         if (entry.isIntersecting) {
// //             const img = entry.target;
// //             img.src = img.dataset.src;            
// //             observer.unobserve(img);
// //         }
// //     });
// // });

// // lazyimages.forEach(img => observer.observe(img));


// // let button = document.getElementById("start");
// // let result = document.getElementById("result");

// // button.addEventListener('click' , () => {
// //     let worker = new Worker ('worker.js') 
// //     worker.postMessage(500000);

// //     worker.onmessage = (e) => {
// //         result.textContent = `Sum : ${e.data}`
// //     };
// // });



// // let api = "117d2b95022c8629f6a46dc20a7dc84c";
// // let getweatherbtn = document.getElementById("getweatherbtn");
// // let cityInput = document.getElementById("cityInput");
// // let weatherResult = document.getElementById("weatherResult");

// // getweatherbtn.addEventListener('click' , () => {
// //     let city = cityInput.value;
// //     if(!city) {
// //         alert(`Please Enter a city`);
// //         return;
// //     }
// //     let url = `https://api.openweathermap.org/data/2.5/weather?=${city}&appid=${'117d2b95022c8629f6a46dc20a7dc84c'}`
// //     fetch(url)
// //     .then(response =>{
// //         if(!response) {
// //             throw new Error("City Not Found!!")
// //         }
// //         return response.json();
// //     })
// //     .then(data => {
// //         weatherResult.innerHTML=`
// //         <h2>${data.name}</h2>
// //         <p>Temperature : ${data.main.temp}°C</p>
// //         <p>Weather : ${data.weather[0].description}</p>
// //         <p>Humidity : ${data.main.humidity}</p>
// //         <p>Wind Speed : ${data.wind.speed}</p>
// //         `
// //     })
// //     .catch(error => {
// //         weatherResult.innerHTML`<p>${error}</p>`
// //     })
// // })





// let userScore = 0;
// let compScore = 0;


// function play(userchoice) {
//     let choices = ["Rock", "Paper", "Scissor"];
//     const computerchoice = choices[Math.floor(Math.random() * 3)];

//     let result = "";

//     if (
//         (userchoice === computerchoice)
//     ) { result = "It's draw" }
//     else if (
//         (userchoice === "Rock" && computerchoice === "Scissor") ||
//         (userchoice === "Paper" && computerchoice === "Rock") ||
//         (userchoice === "Scissor" && computerchoice === "Paper")

//     ) {
//         result = "you win the match"
//         userScore++;
//     } else {
//         result = "your opponent wins"
//         compScore++
//     }
//     document.getElementById("userScore").textContent = userScore;
//     document.getElementById("compScore").textContent = compScore;
//     document.getElementById("result").textContent = result;
//     document.getElementById("display").innerHTML = `You choose <strong>${icon(userchoice)} </strong> &nbsp;&nbsp:
//     computer choose : <strong> ${icon(computerchoice)}</strong>`;

// };

// function icon(choices) {
//     if (choices === "Rock") return "✊";
//     if (choices === "Paper") return "✋";
//     if (choices === "Scissor") return "✌️";
// }















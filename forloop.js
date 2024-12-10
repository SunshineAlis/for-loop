// // <// Exercise 1

// // Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check
// // if the current number is odd or even, and display a message to the screen.

// // Sample Output :
// // "0 is even"
// // "1 is odd"
// // "2 is even"
// // ----------
// // ----------
// for (let i = 0; i <= 15; i = i + 1) {
//   if (i % 2 == 0) {
//     console.log(i + `even`);
//   } else {
//     console.log(i + `odd`);
//   }
// }

// // Exercise 2
// // 7. Write a JavaScript program which iterates the integers from 1 to 100.
// // But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// // For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
// // 0 1 2 "Fizz" 4 "Buzz" "Fizz" 7 8 "Fizz" "Buzz" etc
// for (let i = 0; i <= 100; i = i + 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i + `fizzbuzz`);
//   } else if (i % 3 === 0) {
//     console.log(i + `fizz`);
//   }
// }
// // Exercise 3
// // Get the sum of two arrays…actually the sum of all their elements.
// // P.S. Each array includes only integer numbers. Output is a number too.
// // let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// // let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// // Example output:
// // 276 + 351 = 627
// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
// let sumOfFirstArray = 0;
// let sumOfSecondArray = 0;
// for (let i = 0; i < arr_1.length; i++) {
//   sumOfFirstArray = sumOfFirstArray + arr_1[i];
//   console.log(`this is first ${i}number`, arr_1[i]);
//   console.log(`this is the sum of first array${sumOfFirstArray}`);
//   sumOfSecondArray = sumOfSecondArray + arr_2[i];
//   console.log(`this is second ${i}number`, arr_2[i]);
//   console.log(`this is the sum of second array${sumOfSecondArray}`);
//   console.log(sumOfSecondArray + sumOfFirstArray);
// }
// // Exercise 4
// // Using a for loop print all even numbers up to and including n. Don’t include 0.
// // let n1 = 22;
// // Example output:
// // 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
// for (let n1 = 2; n1 <= 22; n1 = n1 + 1) {
//   if (n1 % 2 == 0) {
//     console.log(n1 + `even`);
//   }
// }

// // Exercise 5

// // Given a string change the every second letter to an uppercase ‘Z’. Assume
// // there are no space.

// // let str1 = "javascript";
// // Example output:
// // jZvZsZrZpZ OR each letter on a new line
// // HINT: You can use  if((i+1) % 2 == 0) to check for even indexes

// let str = "javaskript";
// let result = str
//   .split("") // array bolgoj bichih komand
//   .map((char, index) => (index % 2 === 1 ? "Z" : char)) //array elementig neg negeer shalgaj index-r bairlal todorhoiloh
//   .join(""); // uurchlult hiisen array-gaa butsaaj negtgen neg txt bolgoh
// console.log(result); //return
// // Exercise 6
// // Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
// // let str2 = "don’t know why";
// // Example output:
// // “yes”
// let str2 = "don’t know why";
// if (str2.includes("y")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
// // Exercise 7
// // Given a number n Calculate the factorial of the number
// // let n2 = 4; //  4 * 3 * 2 * 1 = 24
// // Example output:
// // 24
// let n = 4;
// let fact = 1;
// for (i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(`The factorial of ${n} is ${fact}.`);

// // //  Exercise 8
// // // Multiplication Tables
// // // Write a for loop that will iterate from 0 to 10. For each iteration of the
// // // for loop, it will multiply the number by 9 and log the result
// // // (e.g. "2 * 9 = 18").
// // // Bonus: Use a nested for loop to show the tables for every multiplier from
// // // 1 to 10 (100 results total).

// for (let n1 = 0; n1 <= 10; n1 = n1 + 1) {
//   let result = n1 * 9;
//   console.log(`${9} * ${n1} = ${result}`);
//   for (let j1 = 0; j1 <= 10; j1 = j1 + 1) {
//     let result = j1 * 10;
//     console.log(`${10} * ${j1} = ${result}`);
//   }
// }

// // // Exercise 9

// // // The Grade Assigner
// // // Check the results of your assignGrade function from the conditionals exercise
// // // by logging every value from 60 to 100: your log should show "For 88, you got a
// // // B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
// // // logging each grade point in the range.
// for (let n1 = 60; n1 <= 100; n1 = n1 + 1) {
//   if (n1 >= 60 && n1 < 70) console.log(`${n1},"D"`);
//   else if (n1 >= 70 && n1 < 80) console.log(`${n1},"C"`);
//   else if (n1 >= 80 && n1 < 90) console.log(`${n1},"B"`);
//   else if (n1 >= 90 && n1 <= 100) console.log(`${n1},"A"`);
// }

// // // Exercise 10

// // //Print Numbers from 1 to 10 Write a loop that prints numbers from 1 to 10.
// for (let n = 0; n <= 10; n++) {
//   console.log( n);}

// // // Example Output:
// // // 1 2 3 4 5 6 7 8 9 10

// // // Exercise 11

// // // Sum of Numbers from 1 to 20 Write a loop to calculate the sum of numbers from 1 to 20

// let sum= 0;

// for (let i = 0; i <= 20; i++){
//   sum +=  i;
// console.log (`Sum of Numbers from 1 to 20 is:${sum},`);}

// // // Example Output:
// // // The sum is 210
// // // Exercise 12
// // // Count Vowels in a String Write a loop to count how many vowels are in a given string.
// // // let str = "hello world";
// // // Example Output:
// // // Number of vowels: 3
// function countVowel(str) {
//   // find the count of vowels
//   let count = str.match(/[aeiou]/gi).length;
//   // return number of vowels
//   return count;
// }
// let string = "hello world";
// let vowel= "aeuio";
// let count = 0;
// for (let i=0;i<string.length;i++){if (vowel.includes(string[i].toLowerCase())){count++;
//   }}
//   console.log(`the number of vowels in the"Hello world" is:${count}`)
// // // Exercise 13
// // // Print Odd Numbers Write a loop to print all odd numbers from 1 to 15.
// // // Example Output:
// // // 1 3 5 7 9 11 13 15
// for(e=1;e<=15;e=e+2)(console.log(`${e},"Odd"`))
// // // Exercise 14
// // // Check if a Number is Prime Write a loop to check if a number n is prime.
// // // let n = 7;
// // // Example Output:
// // // 7 is a prime number
// let number=7;
// let isPrime=true
//   for (let i = 2; i <= number/2; i++) {
//     if (number % i == 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) {
//     console.log(`${number} is a prime number`);
// } else {
//     console.log(`${number} is a not prime number`);
// }

// // // Exercise 15

// // // Reverse a String Write a loop to reverse the characters in a string.

// // // let str = "javascript";
// // // Example Output: "tpircsavaj"
//  let s="javascript";
//  let sa1=s
//  .split("")// (txt- salgaj neg neger ni bichig)
//  . reverse(s)
//   .join(""); // uurchlult hiisen array-gaa butsaaj negtgen neg txt bolgoh
//  console.log(sa1)
// // // Exercise 16
// // // Calculate Power of a Number Write a loop to calculate base^exponent.

// // // let base = 2, exponent = 5;
// // // Example Output:
// // // 2^5 = 32
// let li=2
// console.log(li**5);
// // // Exercise 17
// // // Print Multiples of 5 Write a loop to print multiples of 5 up to 50.
// for ( let k = 1; k <= 10; k++)
//     {let k1=k*5;
//        console.log(`${5} * ${k} = ${k1}`);}
// // // Exercise 18
// // // Find the Largest Number in an Array Write a loop to find the largest number in an array.
// // // let arr = [3, 67, 15, 98, 23];
// let arr = [3, 67, 15, 98, 23];
// console.log(`Max numberis ${Math.max(...arr)}`);
// // // Exercise 19
// // // Count Specific Letter Write a loop to count how many times the letter "a" appears in a string.
// // // let str = "javascript is amazing";
// // // Example Output:
// // // Number of 'a': 4
// // let strings="javascript is amazing"
// // let a = strings.at(a);
//  let strings="javascript is amazing";
//  let counta=0;
//  for(let i=0;i<strings.length;i++){if(strings[i]==="a"){counta++}}
//  console.log(counta);
// // // Exercise 20
// // // Print Fibonacci Sequence Write a loop to print the first n numbers in the Fibonacci sequence.
// let q=7
// let a=0,b=1;
// for(let i=0;i<q;i++){
//   console.log(a);
//   let next=a+b;
//   a=b;
//   b=next;
// }
// // // Exercise 21
// // // Find All Divisors Write a loop to find all divisors of a number n.
// // // let n = 28;
// // // Example Output:
// // // 1 2 4 7 14 28
// let l=28
// let divisors=true
// for(let i=0;i<=l;i++)   if (l % i == 0) {
//   divisors = true;
// if (divisors)
// console.log(`${i} is divisors`);}
// // // Exercise 22
// // // Check Palindrome Write a loop to check if a string is a palindrome.
// // let str = "radar";
// // Example Output:
// // radar is a palindrome
let check = "radar";
let c = "radar";
if (check.match(c)) console.log(`this is Palindrome`);
else {
  console.log("this is't palindrome");
}
// // // Exercise 23
// // // Count Words in a Sentence Write a loop to count the number of words in a sentence.
// // // let sentence = "Loops are fun to learn";
// // // Example Output:
// // // Number of words: 5
// let sentence="Loops are fun to learn";
// let words = sentence.split(" ");
// let wordCount=words.length;
// console.log(`Oguulber deh ugiin too;${wordCount}`)

// // // Exercise 24
// // // Find Missing Number Write a loop to find the missing number in an array of integers from 1 to 10.
// // // let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// // // Example Output:
// // // Missing number: 4
// let arr1 = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// n=10;
// let missingNumber=-1;
// for (let i=1;i<=10;i++){if(!arr1.includes(i)){missingNumber=i;}}
// console.log(`alga bolson too;${missingNumber}`)
// // hoyr doh arga
// let ar1 = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// n=10;
// let totalSUm=(n*(n+1))/2;
// let arraysum=ar1.reduce((sum,num)=>sum+num,0);
// let Mssnumber=totalSUm-arraysum;
// console.log(`alga bolson too;${Mssnumber}`)
// // // Exercise 25

// // // Filter Positive Numbers Write a loop to filter out positive numbers from an array.

// // // let arr = [-3, 5, -2, 0, 9, -8];
// // // Example Output:
// // // [5, 9]
// let ar2 = [-3, 5, -2, 0, 9, -8];
// let positive=[];
// for(let i=0;i<ar2.length;i++){if(ar2[i]>0){positive.push(ar2[i]);}}
// console.log (positive)

// // // Exercise 26

// // // Create a Pyramid Pattern Write a loop to create the following pyramid pattern.
// // // Example Output:
// // // markdown
// // // Copy code
// // // *
// // // **
// // // ***
// // // ****
// // // *****

// let rows=5;
// for(let i=1 ;i<=rows;i++){let pattern='';
//   for(let j=1;j<=i;j++){pattern+="*";

//   }
//   console.log(pattern);
// }
// // // Exercise 27

// // // Sum of Digits Write a loop to calculate the sum of the digits of a number.

// // // let num = 12345;
// // // Example Output:
// // // Sum of digits: 15
// let num = [1,2,3,4,5];
// // .split['']
// let sm=0;
// for(let i=0; i<num.length; i++ ){
//   sm += num[i];
// }
//   console.log(`sum ni ${sm}`)

// // // Exercise 28

// // // Remove Duplicates from an Array Write a loop to remove duplicate elements from an array.

// // // let arr = [1, 2, 3, 2, 1, 4];
// // // Example Output:
// // // [1, 2, 3, 4]
// let arr3 = [1, 2, 3, 2, 1, 4];
// let rt = [...new Set (arr3)]; //new Set ni davhardsan utgig arilgadag.
// console.log(rt);
// // second
// let ars3 = [1, 2, 3, 2, 1, 4];
// let uq=[];
// for(let i=0;i<ars3.length;i++){if
//   (!uq.includes(ars3[i]))// include([i]) shalgah
//   {uq.push(ars3[i]);}}//.push([i])bol davhardlig arilgah
// console.log(`loop ashiglan bodoh; uq`)

// // // Exercise 29

// // // Find Second Largest Number Write a loop to find the second largest number in an array.

// // // let arr = [4, 10, 9, 2, 7];
// // // Example Output:
// // // Second largest number: 9
// let arr4 = [4, 10, 9, 2, 7];
// let uniquesort=[...new Set(arr4)].sort((a,b)=>b-a) //.sort((a,b)=>b-a) ene bol tomoos jijigruu erembeleh
// for(let i=0;i<arr4.length;i++){console.log(arr4)}
// let secondlargest=uniquesort[1];
// console.log(`second largest number is ${secondlargest}`)
// // // Exercise 30

// // // Sort an Array Write a loop to sort an array in ascending order without using built-in functions.

// // // let arr = [5, 3, 8, 1, 4];
// // // Example Output:
// // // [1, 3, 4, 5, 8]
// let ar3= [5, 3, 8, 1, 4];
// let uniqsort=[...new Set(ar3)].sort((a,b)=>a-b)
// console.log(uniqsort);

// // exercise 31
// // // Generate a Diamond Pattern Write a loop to create a diamond pattern.
// // // Example Output:
// // // markdown
// // // Copy code
// // //    *
// // //   ***
// // //  *****
// // //   ***
// // //    *script>Hello world</script>;
// let j=3;
// //deeshee urgusuh heseg
// for(let i=1; i<=j; i++){
//   let spaces= " ".repeat(j-i);
//   let stars= "*".repeat (2*i-1);
//   console.log(spaces+stars);
// }
// //dooshoo nariisah heseg
// for(let i=j-1; i>=1;i--){
//   let spaces= " ".repeat(j-i);
//   let stars= "*".repeat (2*i-1);
//   console.log(spaces+stars);

// }

// // Additional exercise
// // 1. 3 оронтой той ороход тухайн 3 оронтой тооны цифрүүдийн нийлбэрийг ол.
// let too=[1,2,3]
// let smp=0;
// for(let i=0;i<too.length;i++){
// smp += too[i];
//   } console.log (`sum ni ${smp}`)
// // 2. Монгол улсын иргэний бүртгэлийн дугаар болох регистрийн дугаар нь 10 оронтой эхний 2 орон нь үсэг үлдсэн нь тоо байдаг билээ.
// //    Тэгвэл хэрвээ хэрэглэгч гараас 10 тэмдэгт оруулахад эхлээд тухайн оруулсан утганы урт нь 10 байгаа эсэх дараа нь эхний
// //2 орон нь зөвхөн үсэг эсэх хамгийн эцэст нь үлдсэн 8 тэмдэгт нь бүхэлдээ тоо эсэхийг шалгана уу.
//  //Хэрвээ энэ бүх нөхцлүүд биелж байвал та монгол улсын регистрийн дугаарыг зөв орууллаа гэж харуулна уу.
//  //Хэрвээ аль нэг нөхцөл нь буруу байвал та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа гэж харуулна уу.

// //  let input=prompt("Regitriin dugaaraa oruulna uu");
// //  let regex =/[A-Za-z/{2}[0-9]{8}$/; //$^=buh utgig ehnes ni duustal shalgah temdeg. {2}{8} heden shirgeh bh ystoi zaaj ugnu
// //  //regex= regular expression regex.input (oruulsan utgig regex-r shalgana)regex der nuhtsuluu bichne
// //  if(regex.test(input)){
// //   console.log(`tanii burtgel zov bna ${input}`);}
// //   else{
// //     console.log(`ta burtgelee buruu oruulsan bn.`);
// //  }
// // 3. While loop ашиглан пирамид хийх. \*
// //    **\*
// //    \*\*\***
// //    **\*\*\*** \***\*\*\*\*** \***\*\*\*\*\*\***
// //    **\*\***\***\*\***
// //    **\*\***\*\*\***\*\***
// let ro=5;
// let space=" ";
// let stars="*"
// for(let i=1; i<=ro; i++){
//   let spaces= " ".repeat(ro-i);
//   let stars= "*".repeat (2*i-1);
//   console.log(spaces+stars);
// }
// // 4. While loop ашиглан 0-100 хүртэлх тооны бүх тэгш тоог олох.
// for(i=0;i<=100;i++){if(i%2==0)
//   console.log(`even is`,i)}
// // 5. Анх нэг тоо хадгалаад дараа нь Prompt ашиглан 1 утга аваад тэр тоог таах хүртэл зогсолтгүй ажиллах loop бичээрэй.
// // let target= Math.floor(Math.random()*100)+1;//math.random0-1 hoorond butarhai too uusgene(*100) 0-100 hoorond bolgon huvirgana.
// // //marth.floor butarhaig buhel too bolgon huvirgana +1;toog 0-100 hoorond uusgeh
// // let guess=null;//hereglegchin taasan too
// // while (guess !==target){ //while gedeg ni hereglegch toog oloh hurtel urgeljilne. guess!==target number:hereglegchin oruulsan too zov bh hurtel urgeljilne.
// //   guess=parseInt(prompt("ta 0-100 hoorond too taagarai"))} //parseInt ;promt ni text(string)bolgon butsaadag tul oruulsan utga buhel too boltol urgeljilne.
// //   //hereglegchin utgig shalgah;
// //   if(guess>target){console.log('tani oruulsan utga undur bn');}
// //   else if (guess<target){console.log('tanii oruulsan utga undur bn');}
// //   else if(guess===target){console.log('bayr hurgey',target);
// //     'break'; }else{console.log("buruu utga oruullaa zovhon oroolna uu")
// //   }
// //   // Анх санамсаргүй тоо хадгалах (1-100 хооронд)
// let targetNumber = 5
// let guess = null; // Хэрэглэгчийн таасан тоо
// // console.log("Нууц тоо үүсгэсэн. Одоо та таах ёстой!");
// // Давталт эхлэх
// while (guess !== targetNumber) {
//   // Prompt ашиглан хэрэглэгчээс утга авах
//   guess = parseInt(("Та 1-100 хооронд тоо таагаарай:"));
//   // Хэрэглэгчийн оруулсан утгыг шалгах
//   if (guess < targetNumber) {
//     console.log("Таны тоо бага байна.");
//   } else if (guess > targetNumber) {
//     console.log("Таны тоо их байна.");
//   } else if (guess === targetNumber) {
//     console.log("Баяр хүргэе! Та зөв тоог таалаа:", targetNumber);
//     break; // Давталтаас гарах
//   } else {
//     console.log("Буруу утга орууллаа. Зөвхөн тоо оруулна уу!");
// //   }
// }}
// // 6. Prompt - оор авсан тоог хэдэн оронтойг хэвлэж гарга. Example: input = 1234567; digit: = 7;
// let inputa=123;
// let digitcount=inputa.toString().length;
// console.log(digitcount);
// // 7. n - д prompt ашиглан утга оруулахад n\*n харьцаатай дөрвөлжин хэвлэх.
// let as= 5;  //parseInt ni txt-n ehend bga utgiig toon utga bolgon ugdug.
// //parseInt(string,radix)=> string ni txt-n ehend bga toog l too bolgono.radix;toog ymar toollin systemd horvuulehig zaana.
// //hervee console.log(number(abc123));gevel buh utgig too bolgohiig zaadag. (Nan butsan)
// //hervee console.log(parseInt(123abc)) bvl 123 butsana
// let squire ="";
// for(i=1; i<as;i++){
// for(let i=1; j<as ; i++)
//   {squire+="*";}//tuhain morond *bichne
// squire+="\n";}// mor buriin daraa shine mor nemeh "\n"
// console.log(squire)

// 8. prompt ашиглан n -д утга орууlахад palindrome тоо мөн эсэхийг шалгах.
//    Example1 : input: 111, output: true
//    Example2 : input: 110, output: false
//    Example3 : input: 101, output: true
// let pal=111
// let chec=0;
// if(pal===chec){console.log('this is palindrome')}

// 9. Заавар: n! - n факториал гэж уншина. Энэ нь 1,2,3,…,n тоонуудын үржвэр байна
//    n!=1⋅2⋅3⋅⋯⋅n
let la = [1, 2, 3, 4, 5];
let sim = 1;
for (i = 1; i < la.length; i++) {
  sim *= la[i];
}
console.log(sim);

//    5! = 120 / 1*2*3*4*5/

//    Бодлого :
//    prompt - оор гараас тоо авч тэр тооныхоо факториалыг олох.
// 10. example 1: input = "Hello World", output = "hELLO wORLD"
let input = "Hello World";
let output = swapCase(input);
function swapCase(input) {
  let result = "";
  for (let char of input) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
console.log(output);
//     example 2: input = "This Is STRING!", output = "tHIS iS string!"

let inp = "This Is STRING!";
let outp = swapCase(inp);
function swapCase(inp) {
  let result = "";
  for (let char of inp) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
console.log(outp);
// 11. Prompt - оор тоо авна. 1 ээс promp оор авсан тоо хүртэлх нийлбэрийг ол. example: input = 10 1+2+3+4+5+6+7+8+9+10 = 55;
let p = 10;
let sp = 0;
for (i = 1; i <= p; i++) {
  sp += i;
}
console.log(sp);
// 12. 3-аас дээш оронтой тоо зарлаад тухайн тоогоо тонгоргож харуулна уу. Жишээ нв Ийм утга 12345 -> 54321.
let nj = [1, 2, 3, 4, 5];
let unisort = [...new Set(nj)].sort((a, b) => b - a);
console.log(unisort);

// 13. Өгөгдсөн тоо хүртлэх цифрүүдийг зайгаар тусгаарлан хэвлээрэй. Жишээ нь:
//     Input: 4
//     Output: 0 1 2 3
// 14. Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
//     Input: 5
//     Output: - 1 - 1 2 - 1 2 3 - 1 2 3 4 - 1 2 3 4 5
//     15в
// 15. Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
//     Input: 5
//     Output:
//     - 5 4 3 2 1
//     - 5 4 3 2
//     - 5 4 3
//     - 5 4
//     - 5

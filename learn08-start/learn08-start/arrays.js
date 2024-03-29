function start() {

    /* Follow the directions in the comments to demonstrate the use of arrays */

    /* JavaScript Arrays:https://www.w3schools.com/js/js_arrays.asp */
    // write your name to the name h1

    // Create an array called months that holds all the months of the year
    const months = ["January", "February", "March", "April", "May", "June", "July" , "August", "September", "October", "November", "December"]; 

    // use the index to print the month May from the months array the may paragraph
   
    let month = months[4];
    document.getElementById("may").innerHTML = month;

    // print the length of the month array to the length paragraph
    let length = months.length;
    document.getElementById("length");

    // Loop through all of the months array and print each month to the months paragraph
    document.getElementById("months").innerHTML = months;
    let cal = months.length;

    let calendar = "<ul>";
    for ( let i = 0; i < cal; i++){
            calendar += "<li>" + months[i] + "</li>";
    }
    calendar += "<ul>";

    document.getElementById("months").innerHTML = calendar;
    //JS Array Methods:https://www.w3schools.com/js/js_array_methods.asp


    // convert the months array to a string and print to the string paragraph
    
    document.getElementById("string").innerHTML = months.toString();

    // create two new arrays - weekends and weekdays, add the appropriate days to each
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const weekend = [, "Saturday", "Sunday"];

    // join the two arrays into a new array - week
    const week = weekdays.toString() + weekend.toString();
   
    // print the contents of week to the week paragraph
    document.getElementById("week").innerHTML = week;

    // use the pop method to remove the last element of the week array, then print
    // the week array to the pop paragraph
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    days.pop();
    document.getElementById("pop").innerHTML = days; 

    // use the push function to add two fruits to the array fruits print to the fruits paragraph
    fruits = ["Apple", "Kiwi", "Mango"]
    document.getElementById("fruits").innerHTML = fruits;


        fruits.push("Bananas");
        document.getElementById("fruits").innerHTML = fruits;

  


    // use the shift function to add a fruit to the front of the list and print to the fruits2 paragraph
    fruits2 = [" Apple", "Kiwi", "Mango", "Bananas"]
    document.getElementById("fruits").innerHTML = fruits2;
    fruits2.shift("Bananas");
    document.getElementById("fruits").innerHTML = fruits2;



    // JS Array Sort  https://www.w3schools.com/js/js_array_sort.asp

    languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"]
        // sort the array languages and print to the paragraph sorted
        // reverse the array languages and print to the paragraph reversed
    document.getElementById("sorted").innerHTML = languages;
    languages.sort();

    document.getElementById("reversed").innerHTML = languages;
    languages.reverse();


    // use the compare function to sort the numbers  and print to the num-sorted paragraph
    const numbers = [42, 23, 21, 50, 20, 6, 31, 9];
    document.getElementById("num-sorted").innerHTML = numbers;

    numbers.sort(function(a, b){return b - a});
    document.getElementById("num-sorted").innerHTML = numbers;

    

    


    // Read the Array Iteration page https://www.w3schools.com/js/js_array_iteration.asp 
    // read the Array Const page https://www.w3schools.com/js/js_array_const.asp
}
# Calculator-In-SimpleWay
I made a calculator project, it is simple and easy the way I develop it, the logic simple and easy. Let me explain you how I build it.

###### JUST READ IT CAREFULLY, I EXPLAIN IT VERY CLEARLY WHAT IS GOING ON UNDERNEATH THE HOOD. YOU CAN UNDERSTAND BETTER.

first let's think about how we gonna make a calculator what are the functionality and what is the type of structure we want.
So the main concept here to learn,
Is validations and evaluations of numbers that user
press.

Everybutton in the calculator has a onClick function
to target the value of a button that user press.


erase and backSpace button have a seprate function.
While other have the same function.

why, bcz on the erase button we does't have any value
same for the backspace button. Understand.

So, when the user click on the buttons we target the 
value and that value we access in the Press Function.
that is the name of the function when the user click
on any button it goes on this Press function.

so if you go through my index.js file, I first validate
the value before storeing it in the Press function.
Before storing it to the expression we first check for the
validation, I'll pass these value in the validation Function.
After that I'm gonna store it or do further calculation.

what Validation ?

- The user doesn't use the operator twice at a time ['+', '-', '/', '*'];
- The user doesn't use the "." twice at a time.
- we check both like what the lastValue user press and what the Next value we are getting
current from the Press function.
for Examplee:- 5 ++ 6 -> Wrong
	       5..5 + 5.4 -> Wrong.
	so we check.
so we are checking it, lastvalue and operatorArray both have the same operator one after the another than we return false.

 var lastinput = expression.slice(-1) // checking for only the latest previous one.
    var operator = ['+', '-', '/', '*'];

    if(value == "." && lastinput == "."){  // then comparing for previous and current.
        return false;
    }
	//checking for operator also previous and current.
    if(operator.includes(value)){
        if(operator.includes(lastinput)){    
            return false;
        }else{
            return true;
        }
    }

That's how we Check.
Then after validation is successFul we are storing it in our Expression variable.
And Displaying it on screen whatever the button we are pressing that value.

Then we are gonna calculate our expression through one function in javascript
that is eval Function.
So simple understand that it gonna evaluate our code and generate a dynamic
output. we have to just pass the expression. eval(expression). keep in mind expression is just
a variable that i'm storing the values. You can use any other names also.

On erase function -> simple i just remove the values by setting expression as an empty string.
expression = " "
And also keep in mind eval(expression) taking a string our expression is also a string.
like "10 + 20" like that.

On backspace function -> simple i use the slice method to remove the last string inside the expression
I'm again telling whatever we storing the value after the validation are stored in the form of string in the
expression variable.
so we use expression.slice(0, -1) so it remove the last one.

That's how we are doing it.
Hope this explanation helps you.





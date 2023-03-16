# WEB - Masai Fetch Coffee Shop Menu

## Submission Instructions [Please note]

## Maximum Marks - 15

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the api call made - 1 marks.
 ✅ Student is able to loop through the data and append in the dom - 1 marks.
 ✅ Check the Sorting - 2 marks.
 ✅ Check the Filter Part  - 2 marks.
 ✅ Bought some Cofees - 2 marks.
 ✅ Buy same coffee again - 1 marks.
 ✅ Go To order page and check if able to show on dom - 1 marks.
 ✅ Increase-Decrease the quantity and check the total - 1 marks.
 ✅ Check the delete part  - 2 marks.
 ✅ Apply Cupon Code - 1 mark.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html(Home Page)
- order.html(Order Page)
- Please Ignore all the other files except for the above-mentioned files.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- In this application, we have 2 different pages:-
  1. index.html(Home Page)
  2. order.html(Order Page)

#### index.html(Home Page):-

- On loading this page make an API request with fetch in this API end-point:-
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`.
- On Successful API request, you will get a response of coffee data which is in form of  Array of Objects.
- Loop over the response data and create small cards and append them to div with an id:- `menu-container`(given in Template).
- Show 4 cards per row with a display grid.
- Refer to this image for better understanding:-
  ![image](https://i.imgur.com/HLYRXjp.png)
- You should also implement Filter functionality.
- There is a div with an id:- `filter`. Inside that div there are 2 input tags and a button.
- You should be able to filter the coffees by their price range using these two input tags.
- Example:-
  `let's say that the first input has value 100 and the second input has a value of 200 then only show the items that has price between 100-200 both values included.`
- Apply the filter onClick of the button.
  ![image](https://i.imgur.com/VF5nunw.png)

- In the template there is also a select tag with an id:- `sort`. You should be able to sort the coffee items by their price with this select tag.
- Please make sure you don't sort using built-in sort but use the url params:- 
- Use the below API-url to get the data in Descending order.
`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=price&order=desc`
- Use the below API-url to get the data in Ascending order:- 
`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=price&order=asc`.

- Each card should have a button with the text:- `Buy`.
- When clicked on this button that coffee data should be added to local storage with a key `buy`.
- The user should not be able to buy the same item multiple times.
- In this page we will also have a h1 tag with an id:- `alert`.
- If buying is successful the text of this above-mentioned h1 tag should be:- `Successfully Placed Order`, else the text should be:- `Already Placed Order`.

#### order.html(Order Page):-

- In this page get the data from the localStorage with key `buy`.
- Loop over the localStorage data and show them in smaller cards inside and div with id:- `order-container`(Given in the template).
- Each card should also have a button with text `Cancel`. Clicking on that this particular card should be deleted.
- Here each item will also have a quantity and two buttons to increase or decrease that quantity.
- The button with text `+` should be used to increase the quantity and the button with text `-` should be used to decrease the quantity.
- Please make sure all the buttons have the same text as the given structure.
- In the template we also have a span tag with id:- `order-total`.
- Here you have to show the total price of the order which is sum of (quantity*price).
- When quantity increases or decreases the total should also change.
- Please take a look at the below image for better understanding:- ![image](https://i.imgur.com/3kcLsy3.png)

- You will also have a div with an id:- `cupon`. Inside that you will have an input tag and a button.
- If the input tag's value is `Masai30` then decrease the total price by 30%(Use the floor value).
- If the input value is something other than `Masai30` it should not work.
- Also make sure this code is only applicable once.
![image](https://i.imgur.com/L5lXXR1.png)

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time

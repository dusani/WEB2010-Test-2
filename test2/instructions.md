Functional Programming Quiz

The ReadyMart is stocking FIVE new items. They want you as developer to create a few functions, packaged in a class, that they can use on their website. The class will take in an array of objects. Each object should contain the following properties and values.

Properties
1) item id
2) name
3) price
4) description

Values
1) Item id must have 6 numbers (i.e 324567). None must begin with an '0'. The value is not a string but a number.
2) A string that holds the name of the product
3) A price in dollars (i.e 6.99)
4) A string that contains a brief description of the product. How brief is up to you.

Next name the class NewProducts and add the following functions inside of the class.

Q1
Make a function named getNames that returns an array using the map function that orders alphabetically the names of the items. To do this, you need to get an array from the map function that grabs all the names of the items and then apply the sort function.
(i.e. [].sort())

Q2
Make a function called getSaleItems that uses the filter function to return an array for all items priced below $6

Q3
ReadyMart wants to buy 35 of each item. First use the reduce array to see how much it would cost to purchase one of each item. Then multiply that number by 35 and return it. Name the function orderItems.

# Zemuria Technical Interview Round - 1
- q1 - [Responsive Grid](./q1)
- q2 - [Global Toast Notification](./q2)
- q3 - [Copy Object with separate memory space](./q3)
- q4 - [Infinite Scroll](./q4)
- q5 - [Custom Object](./q5)
- q6 - [Rate limited Function](./q6)
- q7 - [A/B Testing using NextJS](./q7)

# Question - 1
Used display grid function to display grid and media queries to make it responsive

# Question - 2
the script in js file is responsible for the notification, it creates and deletes the notification after 3 seconds, It can be used anywhere in the project as long as the script is imported.

# Question - 3
used JSON.stringify to make the obj into a string and used JSON.parse to make it json again and assign it to new obj, making a copy which isn't the same memory

# Question - 4
the js file fetch's random data from dummyjson.com and display, using window.innerHeight and scroll position, When user is near the end, we fetch more data and it is literally Infinite Scrolling

# Question - 5
Customer Obj with custom functions when getting or setting the values of the object, using the get() and set() inside the object we can implement this.

# Question - 6
Rate limited Function, using Date.now() and the last call of the function, we see if the difference is greater than 2000, if yes, we run the function else it will not run.

# Question - 7
using NextJS, A/B testing is implemented using components and a math.random() and randomly display variant A or B. The boxes are clickable and when clicked will log a click in the local-storage as a way to store the conversions which can be later calculated into conversion rate and find which variant has more conversion rate. Tho local-storage isn't the best option for this, it works for this local development.

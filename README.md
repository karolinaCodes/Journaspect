

## DEMO

View our project submission and demo on DevPost here: https://devpost.com/software/journaspect

![image](https://user-images.githubusercontent.com/82968631/152710208-888191f5-85fa-4dac-b372-b3e07eafe632.png)


### Inspiration
Our inspiration stemmed from our observation of how the journalism industry has become more sensationalist, partisan and is spreading more propaganda- or “fake news”. The journalism industry seems to have little regard for society and has little to no accountability. Journaspect attempts to help hold journalists accountable for the information they broadcast.

### What it does
Users are able to search and see information regarding reviews and ratings of entered journalists. If users would like to add reviews or add a journalist profile they can only unlock those features if they have an account with journaspect.

Users with or without an account are able to search for journalists and see the journalists profile which includes the journalists overall rating, and their ethics, writing, accuracy, and political standing rating. On the journalist profile page users can also see a list of reviews for the journalist, a list of the journalists articles, and a section about the journalist. If a user wishes to add a review, there is an option to do so on this page. If a user chooses this option, a modal appears in which the user can leave a written review and category ratings for the journalist. Once the review is submitted, the information is stored in our database and the ratings of the journalist are updated and reflected on the journalists profile. If the user chooses to leave a review and there are not signed in to their journaspect account, they are directed to the sign in page. If the user does not have an account they have the option to create one. If a user creates an account, they are authorized and profile is saved in firebase.

If when a user searches for a journalist and a profile for that journalist does not exist, the user has the option to add a journalist to the site. If a user chooses to add a journalist they are directed to a form in which the user must input the journalists name and image. The journalist profile is added to firebase and users can now visit the journalists journaspect profile. If the user chooses to add a journalist and they are not signed in to their account, they are directed to the sign in page.

### How we built it
We build Journaspect using firebase, hosting, authentication, storage, firestore, react.js and material-ui.

### Challenges we ran into
Challenges we ran into are configuring the signup validations, creating the search menu, as well as the storing/authentication for the entire application. We ended up configuring a nice search menu and it works! As well as, storing sign up and search features in terms of cloud firestore.

### Accomplishments that we're proud of
We are proud of accomplishing the task of getting the search component working, as well as implementing the ratings system and the reviews functionality.

### What we learned
Each member learned something new while contributing to this project such as: material-ui, react.js concepts, firestore and authentication.

### What's next for Journaspect
We will continue to add on additional features for Journaspect such as expanding on the user profile page, adding website adds, and adding features that fit the needs of our website and it's users.

### Business Viability
The journalism industry is becoming more sensationalist, partisan and spreading more propaganda. With little regard for society and little to no accountability. Journaspect attempts to help hold Journalist to accountability. The website will be funded by advertisements.

### Best Use of Google Cloud
We used firebase authentication, firebase database, firebase storage and firebase hosting. We used firebase authentication for the signup / sign in page and for confirming whether the account already exists in the firestore database. We used the firebase database also storing the journalists and users information. Our site is also hosted via firebase and is deployed on it!


---
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Start the application by running:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Xmeme : A Meme Streaming Platform
This is a basic full stack application build completely from scratch for Crio's
assessment in Crio's Winter of Doing. #LearnByDoing

### Folder Structure
* #### Frontend Application

```
|-- xmeme-frontend
    |-- build
    |-- public
    |-- src
        |-- components
            |-- allmemes
            |-- memeForm
            |-- editForm
        |-- pages
            |-- homepage
            |-- navbar
        |-- App.css
        |-- App.js
        |-- App.test.js
        |-- index.css
        |-- index.js
        |-- reportWebVitals.js
        |-- setupTests.js
    |-- package.json
    |-- package-lock.json

```


* #### Backend Application

```
|-- xmeme-backend
    |-- api
        |-- memes
            |-- controller
            |-- index
            |-- model
    |-- config
        |-- db
    |-- middleware
        |-- async
        |-- error
    |-- public
    |-- util
    |-- package.json
    |-- server.js

```

### To Setup and Run this Project 

```
    - git clone 
    - cd xmeme-frontend 
        - npm install
        - npm start
    
    open new terminal 
    - cd xmeme-backend
        - npm install
        - npm start
        
    You can use it now after changing request URL to localhost:5000 in frontend apis calls.

```
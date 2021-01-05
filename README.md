# BW-africanMarketPlace-backEnd

base URL : https://bw-african-marketplace-app.herokuapp.com/

ENDPOINTS : 

owners endpoints: 

  GET /api/owners
  description: returns all owners in the database
  
  POST /api/register/owner
  requires body of: 
    { 
      username: "",
      password: "",
      store_name: "",
      store_category: "",
    }
  description: returns newly created owner
  
  POST /api/login/owner
  requires body of: 
    { 
      username: "",
      password: "",
    }
  description: returns token and welcome message
  
  users endpoints:
  
  GET /api/users
  description: returns all users in the database
  
  POST /api/register/user
  requires body of: 
    { 
      username: "",
      password: "",
    }
  description: returns newly created user
  
  POST /api/login/owner
  requires body of: 
    { 
      username: "",
      password: "",
    }
  description: returns token and welcome message

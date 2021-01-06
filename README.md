# BW-africanMarketPlace-backEnd

base URL : https://bw-african-marketplace-app.herokuapp.com/

ENDPOINTS

OWNERS ENDPOINTS: 

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
  
USERS ENDPOINTS:
  
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

ITEMS ENDPOINTS:

    GET /api/items
        no body
        RESTRICTED: requires token recieved when users/owners log in. Token should be in req.headers.authorization
        description: returns list of all items in the db. 

    POST /api/item 
        requires body of {
            owner_id: INTEGER (should save this to local storage when owner logs in)
            name: "",
            price: INTEGER,
            description: ""
        }
        RESTRICTED: requires token recieved when owners log in. Token should be in req.headers.authorization
        description: adds a new item to the db. 

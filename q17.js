use admin

db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [{ role: "root", db: "admin"}],
});

//c> Program Files> MongoDB> Server> 8.0> bin> mongod.cfg

//open mongod.cfg file in vs code
// add following lines:
security:
    authorization: enabled

//search bar>services> mongoDB> right click> then restart the mongodb server

//open mongosh and type show dbs

// mongosh --username admin --authenticationDatabase admin

/////creating a new user for the databasse gcet:

use gcet 

db.createUser({
    user: "john",
    pwd: "1234",
    roles: [{ role: "read", db: "gcet"}],
});

db.getUsers();

exit

// mongosh --username john --authenticationDatabase gcet
//following query will fail for john
db.employees.updateOne({ email: "mike@gmail.com" }, { $set: { salary: 23 } });

//Drop the user
db.dropUser("john")

//open mongoDB compass
//Add new connection 
//    mongodb://admin:admin@localhost:27017
//Create an ascending index on the email field
db.employees.createIndex({email:1})

//List all indexes on the employees collection
db.employees.getIndexes()

//Drop (remove) the email_1 index
db.employees.dropIndex("email_1")

// Run an explain plan for the query filtering by email
db.employees.find({email:'john@gmail.com'}).explain("executionStats")
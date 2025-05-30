//Update one document with email: "john@gmail.com" by setting age to 23.
db.employees.updateOne({ email: "john@gmail.com" }, { $set: { age: 23 } });

//Update all documents to add or overwrite the age field with value 23.
db.employees.updateMany({}, { $set: { age: 23 } });

//Add a points field with value 0 to all documents.
db.employees.updateMany({}, { $set: { points: 0 } });

//Increment the points field by 1 for all documents (use -1 to decrement).
db.employees.updateMany({}, { $inc: { points: 1 } }); //try -1

//Rename the field points to score in all documents.
db.employees.updateMany({}, { $rename: { points: "score" } });

//Remove the score field from all documents.
db.employees.updateMany({}, { $unset: { score: "" } });

//updating arrays
//Push "CL" to the location array of the document with email: "john@gmail.com" (allows duplicates).
db.employees.updateMany(
  { email: "john@gmail.com" },
  { $push: { location: "CL" } }
);

//Add "CL" to the location array only if it doesn't already exist (no duplicates).
db.employees.updateMany(
  { email: "john@gmail.com" },
  { $addToSet: { location: "CL" } }
);

//Remove the last element from the location array of john@gmail.com (use -1 for first element).
db.employees.updateMany({ email: "john@gmail.com" }, { $pop: { location: 1 } });

//deleting documents
//Delete the document with email: "brian@gmail.com".
db.employees.deleteOne({ email: "brian@gmail.com" });
//Delete all documents where dept is "admin"
db.employees.deleteMany({ dept: "admin" });


//CRUD Operation
//Create, Read, Update, Delete
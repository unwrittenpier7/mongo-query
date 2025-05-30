db.employees.insertMany([
  {
    name: "Brian C",
    email: "brian@gmail.com",
    department: "IT",
    salary: 2256,
    location: ["FL", "TX"],
    date: Date(),
  },
  {
    name: "Chastity J",
    email: "chastity@gmail.com",
    department: "HR",
    salary: 4556,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);

//Skip the first 2 documents in the employees collection and return the rest.
db.employees.find().skip(2);

//Limit the result to the first 2 documents in the employees collection.
db.employees.find().limit(2);

//Return the first document found in the employees collection.
db.employees.findOne();

//Sort all employee documents by name in ascending order (use -1 for descending).
db.employees.find().sort({ name: 1 }); //try -1

//Find all documents where department is "IT".
db.employees.find({ department: "IT" });

//Project only name and email fields (excluding _id) for all employees.
db.employees.find({}, { _id: 0, name: 1, email: 1 });

//Project only name and email fields (excluding _id) for all employees in the 'IT' department
db.employees.find({ department: "IT" }, { _id: 0, name: 1, email: 1 });

db.employees.find(
  { department: "IT" },
  { _id: false, name: true, email: true }
);

//Count the total number of documents in the employees collection.
db.employees.countDocuments()

//department is considered as dept and the department of each doc is shown
db.employees.find({},{dept:"$department"})
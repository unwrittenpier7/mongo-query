//1.Change the email of John to john@outlook.com
db.employees.updateOne({ name: "John Smith" },{ $set: { email: "john@outlook.com" } })

// 2. Display top 3 highest paid employees
db.employees.find().sort({ salary: -1 }).limit(3);

// 3. Increase salary of all employees by 1000
db.employees.updateMany({}, { $inc: { salary: 1000 } })

// 4. Insert a new employee to admin department
db.employees.insertOne({
  name: "Abcd",
  department: "admin"
})

// 5. Delete all employees in admin department
db.employees.deleteMany({ department: "admin" });
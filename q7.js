//find all employees in IT department(department= IT)
db.employees.find({ department: "IT" });

//equals operator
db.employees.find({ department: { $eq: "IT" } });

//not equals operator
db.employees.find({ department: { $ne: "IT" } });

//greater than
db.employees.find({ salary: { $gt: 4000 } });

//less than
db.employees.find({ salary: { $lt: 4000 } });

//greater than or equal to
db.employees.find({ salary: { $gte: 2456 } });

//less than or equal to
db.employees.find({ salary: { $lte: 2456 } });

//in operator(retrieve employees in HR and IT dept)
db.employees.find({ department: { $in: ["HR", "IT"] } });

//not in opeerator(retrieve employees not in HR and IT dept)
db.employees.find({ department: { $nin: ["HR", "IT"] } });

//and operator(find docs satisfying all conditions)
db.employees.find({
  $and: [{ salary: { $gt: 3000 } }, { department: { $eq: "IT" } }],
});

//or operator(find docs satisfying atleast 1 condition)
db.employees.find({
  $or: [{ salary: { $gt: 3000 } }, { department: { $eq: "HR" } }],
});

//nor operator(find docs not satisfying all conditions i.e. opposite of $and)
db.employees.find({
  $nor: [{ salary: { $gt: 3000 } }, { department: { $eq: "HR" } }],
});

//not operator(find docs with salary not less than 400)
db.employees.find({ salary: { $not: { $lt: 4000 } } });

//Find documents where department field does NOT exist
db.employees.find({ department: { $exists: false } });

//Find documents where department field DOES exist
db.employees.find({ department: { $exists: true } });

//Find employees whose name contains "Cathy"
db.employees.find({ name: { $regex: "Cathy" } });

//Find employees whose name starts with "C"
db.employees.find({ name: { $regex: "^C" } });

//Find employees whose name ends with "G"
db.employees.find({ name: { $regex: "G$" } });
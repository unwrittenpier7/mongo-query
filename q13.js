//Inserting docs into collection 'orders'
db.orders.insertMany([
  {
    empid: ObjectId('68372a6913c60dab9c6c4bd0'),
    items: { "1": 2, "3": 2 },
    orderValue: 454,
    status: "Pending"
  },
  {
    empid: ObjectId('68372a8213c60dab9c6c4bd1'),
    items: { "2": 1, "5": 3 },
    orderValue: 620,
    status: "Pending"
  },
  {
    empid: ObjectId('68372a8213c60dab9c6c4bd2'),
    items: { "4": 1 },
    orderValue: 150,
    status: "Pending"
  },
  {
    empid: ObjectId('68386a889f7afd6bab6c4bd3'),
    items: { "1": 1, "2": 2 },
    orderValue: 500,
    status: "Pending"
  },
  {
    empid: ObjectId('68386a889f7afd6bab6c4bd4'),
    items: { "3": 4 },
    orderValue: 800,
    status: "Pending"
  }
]);
 
//Displaying orders placed by all employees
db.orders.aggregate([
  {
    $lookup: {
      from: "employees",           
      localField: "empid",        
      foreignField: "_id",          
      as: "employee"                
    }
  },
  {
    $unwind: "$employee"            
  },
  {
    $project: {
      _id: 0,
      empName: "$employee.name",
      empEmail: "$employee.email",
      items: 1,
      orderValue: 1,
      status: 1
    }
  }
]);

//
//Get Employee Names and Their Orders' Values
db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "Ord",
    },
  },
  { $project: { name: 1, "Ord.orderValue": 1 } },
]);

//Same as above but with $unwind for one order per result
db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "Ord",
    },
  },
  { $unwind: "$Ord" },
  { $project: { name: 1, "Ord.orderValue": 1 } },
]);

//Join employees with both orders and address
db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "Ord",
    },
  },
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "Addr",
    },
  },
]);

//Get Chastity’s Order and Address Info
db.employees.aggregate([
  { $match: { email: "chastity@gmail.com" } },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "Ord",
    },
  },
  { $unwind: "$Ord" },
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "Addr",
    },
  },
  {
    $project: {
      _id: 0,
      name: 1,
      "Addr.residence.city": 1,
      "Ord.orderValue": 1,
      "Ord.status": 1,
    },
  },
]);
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
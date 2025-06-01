//Joining employees and orders collections to display name, email and totalOrderValue
db.orders.aggregate([
  {
    $group: {
      _id: "$empid",
      totalOrderValue: { $sum: "$orderValue" }
    }
  },
  {
    $lookup: {
      from: "employees",
      localField: "_id",
      foreignField: "_id",
      as: "emp"
    }
  },
  { $unwind: "$emp" },
  {
    $project: {
      _id: 0,
      name: "$emp.name",
      email: "$emp.email",
      totalOrderValue: 1
    }
  }
]);
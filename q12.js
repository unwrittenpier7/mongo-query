//Insert multiple address documents
db.address.insertMany([
  {
    empId: ObjectId("68372a6913c60dab9c6c4bd0"),
    residence: {
      doorNum: "A-135",
      street: "Verdin Ct",
      city: "Columbus",
      state: "OH",
    },
  },
  {
    empId: ObjectId("68372a8213c60dab9c6c4bd1"),
    residence: {
      doorNum: "AH-320",
      street: "Bay Meadows",
      city: "Jacksonville",
      state: "FL",
    },
  },
]);

//Join employees with address collection
db.employees.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "addr",
    },
  },
]);

//Find Mike's record and show his city
db.employees.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "empId",
      as: "addr",
    },
  },
  { $match: { email: "mike@gmail.com" } },
  { $unwind: "$addr" },
  { $project: { name: 1, "addr.residence.city": 1 } },
]);
//Assign grades based on salary using $cond
db.employees.aggregate([
  {
    $project: {
      name: 1,
      salary: 1,
      grade: { $cond: [{ $gte: ["$salary", 2000] }, "Grade A", "Grade B"] },
    },
  },
]);

// Assign grades using $cond with if, then, else keys 
db.employees.aggregate([
  {
    $project: {
      name: 1,
      salary: 1,
      grade: {
        $cond: {
          if: { $gt: ["$salary", 2000] },
          then: "Grade A",
          else: "Grade B",
        },
      },
    },
  },
]);

//Unwind (flatten) the location array into multiple documents
db.employees.aggregate([
    {$project:{name:1,email:1,location:1}},
    {$unwind:"$location"}
])
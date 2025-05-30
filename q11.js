//Display Top 3 Highest Paid Employees Using aggregate
db.employees.aggregate([
  { $sort: { salary: -1 } },     
  { $limit: 3 },                  
  { $project: { name: 1, salary: 1 } }  
]);

//Display Annual Salary of Each Employee
db.employees.aggregate([
  {
    $project: {
      name: 1,
      monthlySalary: "$salary",
      annualSalary: { $multiply: ["$salary", 12] }
    }
  }
]);

//If age>40 then display "Band A" else "Band B"
db.employees.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      band: {
        $cond: {
          if: { $gt: ["$age", 40] },
          then: "Band A",
          else: "Band B"
        }
      }
    }
  }
]);
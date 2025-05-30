//create collection
db.createCollection("products")

//insert docs
db.products.insertMany([
  {
    name: "Product1",
    description: "This is Product1",
    imgUrl:"https://picsum.photos/id/0/367/267",
    price: 45
  },
  {
    name: "Product2",
    description: "This is Product2",
    imgUrl:"https://picsum.photos/id/3/367/267",
    price: 45
  },
  {
    name: "Product3",
    description: "This is Product3",
    imgUrl:"https://picsum.photos/id/7/367/267",
    price: 45
  }  
])
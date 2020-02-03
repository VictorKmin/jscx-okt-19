
db.students.insert({
  model: "Kawasaki",
  price: 90000,
  year: 2008
})


db.students.insert({
  name: "Dima",
  profession: 'Barista',
  year: 1999,
  cars: [
    'Volvo', 'Lada', 'Audi'
  ]
})

db.teacher.find({
  class_curator: 7
}).pretty();


db.teacher.find({
  class_curator: {
    $gte: 5 // $gt -> >    // $lte -> <= // $lt -> < // $ne -> !=
  }
}).pretty();


db.teacher.find({
  class_curator: {
    $lt: 5
  }
}).pretty();


db.teacher.find(
  {
    class_curator: {
      $lt: 5
    }
  },
  {
    "name": true,
    "lesson": true,
    "_id": false
  }
).pretty();


db.teacher.find


db.teacher.find({
  $or: [
    {class_curator: 3},
    {class_curator: 4},
    {payment: 2000}
  ]
}).pretty()


db.teacher.find({
  $and: [
    {
      class_curator: {
        $gte: 5
      }
    },
    {
      class_curator: {
        $lt: 10
      }
    },
    {payment: 2000}
  ]
}).pretty()


// db.teacher.find().sort({"payment": -1}).pretty()
db.teacher.find().sort({"name": -1}).pretty()


// https://www.w3resource.com/mongodb-exercises/


db.students.find({
  "parents.name": 'Dima'
}).pretty()


db.teacher.find().sort({payment: -1}).limit(1).pretty()
db.teacher.find().sort({payment: -1}).skip(2).limit(1).pretty()


db.teacher.update(
  {}, // search object
  {}, // change object
  {} // options
)


db.teacher.update(
  {payment: 2000},
  {car: true}
)


db.teacher.update(
  {payment: 2500},
  {
    $set: {
      car: true,
      dog: 'Chrlie'
    }
  },
  {
    multi: true
  }
)


db.teacher.aggregate([
  {}, // 1
  {}, //2
  {} // 3
])

db.teacher.aggregate([
  {
    $match: {
      car: true
    }
  },
  {
    $group: {
      "_id": "$payment",
      "paySum": {
        $sum: "$payment"
      }
    }
  }
]).pretty()


db.teacher.aggregate([
  {
    $group: {
      "_id": "",
      "paySum": {
        $sum: "$payment"
      }
    }
  }
]).pretty()


db.teacher.aggregate([
  {
    $group: {
      "_id": "",
      "paySum": {
        $avg: "$payment"
      }
    }
  }
]).pretty()


db.teacher.aggregate([
  {
    $group: {
      "_id": "$car",
      "carsCount": {
        $sum: 1
      }
    }
  }
]).pretty();


db.teacher.remove({
  car: true
})

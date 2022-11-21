### Show all Database

```mongosh
show dbs
```

### Create Database

```mongosh
use shopDB
```

### Delete Database

```mongosh
db.dropDatabase()
```

### View Database

```mongosh
db
```

---

## Create Operations

#### Create Collections

```mongosh
db.products.insertOne({_id: 1, name: "Pen", price: 1.20})
```

```mongosh
db.products.insertOne({_id: 2, name: "Pencil", price: 0.8})
```

```mongosh
db.products.insertOne({_id: 3, name: "Rubber", price: 1.3, stock: 12, review: [{author: sally, rating: 5, review: "Awesome Rubber!"}, {author: john, rating: 5, review: "Best Rubber!"}]})
```

#### Show Collections

```mongosh
show collections
```

```
Output:

products
```

---

## Read Operations

#### Read all Collections

```mongosh
db.products.find()
```

```
Output:

{ "_id" : 1, "name" : "Pen", "price" : 1.2 }
{ "_id" : 2, "name" : "Pencil", "price" : 0.8 }
```

#### Read all Collections that have specific Field

```mongosh
db.products.find({name: "Pen"})
```

```
Output:

{ "_id" : 1, "name" : "Pen", "price" : 1.2 }
```

#### Read all Collections that Comparison Operator

```mongosh
db.products.find({price: ${gt: 1}}) - This is will find all collection that price is greater than 1
```

```
Output:

{ "_id" : 1, "name" : "Pen", "price" : 1.2 }
```

#### Read specific Field in Collections

```mongosh
db.products.find({_id: 1}, {name: 1, _id: 0}) - This is will show only the name of that collection. (name: 1) is equal to true (_id: 0) is equal to false
```

```
Output:

{ "name" : "Pen" }
```

---

## Update Operations

#### Updating the Collections to create a new Field and Data

```mongosh
db.products.updateOne({_id: 1}, {$set: {stock: 32}}) - ({$set: {stock: 32}}) for setting a new field and data
```

```
Output:

{ "_id" : 1, "name" : "Pen", "price" : 1.2, "stock" : 32 }
```

---

## Delete Operations

#### Deleting a Collection

```mongosh
db.products.deleteOne({_id: 1})

```

```
Output:

{ "\_id" : 2, "name" : "Pencil", "price" : 0.8 }

```

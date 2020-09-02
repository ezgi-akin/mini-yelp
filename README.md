# node-SQL-boilerplate
Node SQL sample project

1. If you haven't done it yet, create _POST_ _PUT_ and _DELETE_ routes for orders
2. Move the business logic of the orders in the `controllers/orders.js` as it's been done for users.
3. (OPTIONAL) Look into [sequelize](https://sequelize.org/master/), an ORM for SQL 

```
curl -d '{"name": "Jiggly", "surname": "Puff", "age": 100}' -H "Content-Type: application/json" -X POST http://localhost:3000/users
curl -d '{"surname": "Chu", "age": 100}' -H "Content-Type: application/json" -X POST http://localhost:3000/users // prompts error
curl -d '{"name": "Jiggly", "surname": "Puff", "age": 3}' -H "Content-Type: application/json" -X PUT http://localhost:3000/users/5f4f5726ddde594d290c80d1
curl -d '{"price": 10, "user": 2}' -H "Content-Type: application/json" -X POST http://localhost:3000/orders
curl -d '{"price": 12, "user": 5}' -H "Content-Type: application/json" -X PUT http://localhost:3000/orders/5
curl -X DELETE http://localhost:3000/users/5f4d7587bf290843cc1e7f95
```

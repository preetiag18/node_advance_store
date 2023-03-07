# Database class

This database class is a general purpose class for creating and using Mariadb/Mysql queries. The constructor takes all necessary information needed to open a database connection as parameter object. This layer is used between the database engine and our application.

Here is an example of the option object for constructor:

```js
{
    host: "127.0.0.1", //the host of db
    port: 3306, //the port of db
    user: "zeke",
    password: "1234",
    database: "employeeDb"
  }
```

## Method ** doQuery(sql,parameters)**

### Method usage

```js
const result = await db.doQuery("select * from employee");
```

```js
const result = await db.doQuery("select * from employee where id=?", [1]);
```

Select queries will return a promise with result a javascript object:

```js
{
  queryResult:[
    {
    id: 1,
    firstname: 'Preeti',
    lastname: 'Agrawal',
    department: 'ict',
    salary: '5000.00'
  }
  ],
  resultSet:true
}
```

For example an insert statement wll return on object:

```js
const result = await db.doQuery("insert into employee values(?,?,?,?,?)", [
  123,
  "Vera",
  "River",
  "ict",
  6000,
]);
```

The statement to be sent to database engine will be:

insert into employee values(123, "Vera", "River", "ict", 6000);

will return a promise with an object:

```js
{
    queryResult:{ rowsChanged:1,insertId:0, status:0},
    resultSet:false
}
```

In error case it rejects error-string

# REST

mozilla developer http
https://developer.mozilla.org/en-US/docs/Web/HTTP

http methods
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

http status code
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

## Methods

GET
POST
PUT
DELETE

OPTIONS
HEAD
PATCH

# Resources

For example:

```
http://localhost:4000/api/computers/2
```

The GET request would be:

GET http://localhost:4000/api/computers/2 HTTP/1.1

### GET

GET /api/computers

returns all computers as a json(or some other format) array

computer number 2

```
http://localhost:4000/api/computers/2
```

GET /api/computers/2

returns the computer with id 2

```json
{
  "id": 2,
  "name": "Cera 2400",
  "type": "laptop",
  "processor": "Brain 456",
  "amount": 25
}
```

### POST

add a new computer

POST /api/computer

```json
{
  "id": 2,
  "name": "Cera 2400",
  "type": "laptop",
  "processor": "Brain 456",
  "amount": 25
}
```

computer is given as json-object. Returns a status object

### PUT

update or add

PUT /api/computers/3

computer is given as json object. Returns a status object.
if the computer with given number doesn't exist,it will be added.
It the computer exists,then it will be updated.
The id must match the number given in URL.

### DELETE

remove computer

DELETE /api/computers/2

delete computer number 2 and Returns a status object

# javascript (fetch)

Let's assume `cors` situation:

### GET

```js
const option = {
  method: "GET",
  mod: "cors",
};
const allComputers = "http://localhost:4000/api/computers";
const oneComputer = "http://localhost:4000/api/computers/2";
const data = await fetch(allComputers, options);
const result = await data.json();

const data2 = await fetch(allComputers, { mode: "cors" });
const result2 = await data2.json();
```

### POST and PUT

```js
const option = {
  method: "POST",
  mod: "cors",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(computerObject);
};
const postComputers = "http://localhost:4000/api/computers";
const data = await fetch(postComputers, options);
const result = await data.json();

const putoption = {
  method: "PUT",
  mod: "cors",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(computerObject);
};
const putComputer = "http://localhost:4000/api/computers/2";
const data2 = await fetch(putComputer, putoptions);
const result2 = await data.json();
```

### DELETE

```js
const option = {
  method: "DELETE",
  mod: "cors",
};

const oneComputer = "http://localhost:4000/api/computers/2";
const data = await fetch(oneComputers, options);
const result = await data.json();
```

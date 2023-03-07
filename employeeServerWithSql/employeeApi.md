# Employee data storage

## employee.json

```json
[
  {
    "id": 1,
    "firstname": "Preeti",
    "lastname": "Agrawal",
    "department": "ict",
    "salary": 4000
  },
  {
    "id": 2,
    "firstname": "saurabh",
    "lastname": "Garg",
    "department": "ict",
    "salary": 3000
  }
]
```

id is unique!

### public API (methods of Datastorage class)

#### datastorageLayer.js

- getAll()
  - returns an array of all employees / []
- getOne(id)
  - returns an employee object / NOT_FOUND
- insert(newEmployee)
  - returns INSERT_OK / NOT_INSERTED / ALREADY_IN_USE
- update(updatedEmployee)
  - returns UPDATED_OK / NOT_UPDATED
- remove(id)
  - REMOVE_OK / NOT_FOUND / NOT_REMOVED
- getters for status codes
  - returns an array of status codes

### Private API

#### readerWriter.js

- readStorage(storageFile)

  - return an array of employees / []

- writeStorage(storageFile, data)
  - returns true/false

#### storageLayer.js
- getAllFromStorage()
  - returns an array of employees / []

- getFromStorage(id)

  - returns an employee object / null

- addToStorage(newEmployee)

  - returns true / false

- updateStorage(updatedEmployee)

  - returns true / false

- removeFromStorage(id)
  - returns true / false

#### statusCode.js

```js
const CODES={
  PROGRAM_ERROR:0,
  NOT_FOUND:1,
  INSERT_OK:2,
  ...
}
```

The format of an status/error meassage is:

```js
const MESSAGES = {
  PROGRAM_ERROR: () => ({
    message: "Sorry! Error in our program",
    code: CODES.PROGRAM_ERROR,
    type: "error",
  }),
  NOT_FOUND: (id) => ({
    message: `No employee found with id ${id}`,
    code: CODES.NOT_FOUND,
    type: "error",
  }),
  INSERT_OK: (id) => ({
    message: `Employee ${id} was inserted`,
    code: CODES.NOT_OK,
    type: "info",
  }),
};
```

status types are `error` or `info`

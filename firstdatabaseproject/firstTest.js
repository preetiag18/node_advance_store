"use strict";

const mariadb = require("mariadb");

// run testA function

testA();

//helper function

async function testA() {
  const options = {
    host: "127.0.0.1", //the host of db
    port: 3306, //the port of db
    user: "zeke",
    password: "1234",
    database: "employeeDb",
    allowPublicKeyRetrieval: true, //mysql
  };

  const connection = await mariadb.createConnection(options);

  console.log("------------------------- test1 ------------------------");
  let result = await connection.query("select * from employee");

  delete result.meta; //removing meta from result

  // console.log(result.map((item) => Object.values(item)));

  console.log("------------------------- test2 ------------------------");
  result = await connection.query({
    rowsAsArray: true,
    sql: "select * from employee",
  });
  delete result.meta;
  console.log(result);

  console.log("------------------------- test3 ------------------------");

  result = await connection.query("select * from employee where id=?", [1]);
  delete result.meta;
  console.log(result);

  // close connection
  connection.end();
}

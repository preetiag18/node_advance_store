"use strict";
//  "insert into computer (name, type, processor, amount, id)"
const toInsertArray = (computer) => [
  computer.name,
  computer.type,
  computer.processor,
  +computer.amount,
  +computer.id,
];

// "update computer set name=?, type=?, processor=?, amount=?"
// "where id=?"

const toUpdateArray = (computer) => [
  computer.name,
  computer.type,
  computer.processor,
  +computer.amount,
  +computer.id,
];

module.exports = { toInsertArray, toUpdateArray };

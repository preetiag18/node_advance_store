"use strict";

const { CODES, MESSAGES } = require("./statusCodes");
const {
  getAllFromstorage,
  getFromstorage,
  addToStorage,
  updateStorage,
  removeFromStorage,
} = require("./storageLayer");

// Datastorage class

module.exports = class Datastorage {
  get CODES() {
    return CODES;
  }

  getAll() {
    return getAllFromstorage();
  } // end getAll

  getOne(id) {
    return new Promise(async (resolve, reject) => {
      if (!id) {
        reject(MESSAGES.NOT_FOUND("--- empty---"));
      } else {
        const result = await getFromstorage(id);
        if (result) {
          resolve(result);
        } else {
          reject(MESSAGES.NOT_FOUND(id));
        }
      }
    });
  } // end of getOne

  insert(employee) {
    return new Promise(async (resolve, reject) => {
      if (employee) {
        if (!employee.id) {
          reject(MESSAGES.NOT_INSERTED());
        } else if (await getFromstorage(employee.id)) {
          reject(MESSAGES.ALREADY_IN_USE(employee.id));
        } else if (await addToStorage(employee)) {
          resolve(MESSAGES.INSERT_OK(employee.id));
        } else {
          reject(MESSAGES.NOT_INSERTED());
        }
      } else {
        reject(MESSAGES.NOT_INSERTED());
      }
    });
  } // end of insert

  update(employee) {
    return new Promise(async (resolve, reject) => {
      if (employee) {
        if (await updateStorage(employee)) {
          resolve(MESSAGES.UPDATE_OK(employee.id));
        } else {
          reject(MESSAGES.NOT_UPDATED());
        }
      } else {
        reject(MESSAGES.NOT_UPDATED());
      }
    });
  } //end updated

  remove(id) {
    return new Promise(async (resolve, reject) => {
      if (!id) {
        reject(MESSAGES.NOT_FOUND("--- empty ---"));
      } else if (await removeFromStorage(id)) {
        reject(MESSAGES.REMOVE_OK(id));
      } else {
        reject(MESSAGES.NOT_REMOVED(id));
      }
    });
  } // end of remove
};

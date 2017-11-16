import { extendObservable } from 'mobx';
var axios = require('axios');


export default class ShiftStore {
  constructor() {
    extendObservable(this, {
      shift: null,
      success: null,
      get retrieveShift() {
        return this.shift
      }
    })
    this.addNewShift = this.addNewShift.bind(this);
  }

  addNewShift(newShiftObj) {
    return new Promise((resolve, reject) => {
      axios.post("/open-shifts",
        {
          date: newShiftObj.date,
          day: newShiftObj.day,
          skill: newShiftObj.skill,
          claimed: newShiftObj.claimed,
          time: newShiftObj.time
        }
      ).then((shiftObj) => {
        if (shiftObj.data) {
          this.shift = shiftObj.data
        } else {
          console.log("shift add failed");
          reject(shiftObj);
        }
        console.log(shiftObj);
        resolve(shiftObj);
      })
    })
  }
}
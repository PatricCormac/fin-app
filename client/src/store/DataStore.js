import { makeAutoObservable } from 'mobx'

export default class DataStore {
  constructor() {
    this._data = [
      {id: 1, date: '01.02.21', sum: 30},
      {id: 2, date: '02.02.21', sum: 90},
      {id: 3, date: '03.02.21', sum: 45},
      {id: 4, date: '04.02.21', sum: 15}
    ]
    makeAutoObservable(this)
  }

  setData(data) {
    this._data = data
  }

  get data() {
    return this._data
  }
}
import { Injectable } from '@angular/core';

@Injectable()

export class StorageService {

  constructor() { }

  setItem(key,val){

    localStorage.setItem(key,JSON.stringify(val))
  }
  getItem(key){
    return JSON.parse(localStorage.getItem(key))
  }

  removeItem(key){
    localStorage.removeItem(key);
  }
}

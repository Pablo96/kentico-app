import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  getItem() {
    return this.http.get("https://deliver.kenticocloud.com/b7fdad86-853f-00d5-a02a-9cd75899664b/items/game_physics_1");
  }
}

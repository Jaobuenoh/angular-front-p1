import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:8080/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first()
    );
  }
 //Partial means that you are allowed to save without all the properties
  save(record: Partial <Course>){
    return this.httpClient.post<Course>(this.API, record);
  }

  delete(course: Course) {
    return this.httpClient.delete(`${this.API}?id=${course._id}`);
  }
}

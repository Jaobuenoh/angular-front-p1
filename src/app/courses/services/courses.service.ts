import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

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

  loadById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`)
  }

  findById(course: Course) {
    return this.httpClient.get<Course>(`${this.API}?id=${course._id}`);
  }

  //Partial means that you are allowed to save without all the properties
  save(record: Partial<Course>) {
    if (record._id) {
    return this.create(record);
    }
    return this.update(record); // for some reason the create will work right here to
  }

  delete(id: String) {
    console.log('3- couse.service' + 'id: ' + id)
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  private create(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record);
  }

   update(record: Partial<Course>) {
    console.log('works')
    return this.httpClient.put<Course>(`${this.API}/${record._id}`, record);
  }
}

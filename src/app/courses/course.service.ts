import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesEndpoint: string = 'http://localhost:3100/api/courses'

  constructor(private httpClient: HttpClient) {}

  retrieveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesEndpoint);
  }

  retrieveById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.coursesEndpoint}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.httpClient.put<Course>(`${this.coursesEndpoint}/${course.id}`, course);
    } else {
      return this.httpClient.post<Course>(this.coursesEndpoint, course);
    }
  }
}

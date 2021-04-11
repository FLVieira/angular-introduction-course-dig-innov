import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  _filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy: string = '';

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this._filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value;
    this._filteredCourses = this._courses.filter((course: Course) =>
      course.name.toLowerCase().
        indexOf(this._filterBy
        .toLowerCase())
      > -1)
  }

  get filter() {
    return this._filterBy;
  }
}

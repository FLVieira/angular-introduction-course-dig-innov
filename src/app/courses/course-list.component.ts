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
   this.retrieveAll()
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: (res) => {
        this._courses = res
        this._filteredCourses = this._courses;
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  deleteById(id: number): void {
    this.courseService.deleteById(id).subscribe({
      next: (res) => {
        console.log(res)
        this._filteredCourses.splice(this._filteredCourses.findIndex((course) => course.id === id), 1);
      },
      error: (err) => {
        console.log(err)
      }
    })
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

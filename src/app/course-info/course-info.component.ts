import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../courses/course";
import { CourseService } from "../courses/course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course = new Course();

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    const id: any = this.activatedRoute.snapshot.paramMap.get('id')
    if (id)
      this.courseService.retrieveById(Number(id)).subscribe({
        next: (res) => {
          this.course = res;
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}

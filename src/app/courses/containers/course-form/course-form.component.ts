import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../model/course';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  isToggleOn: boolean = false;

  //not to be null
  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    category: ['']
  });
  //not to be null
  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data['course'];
    console.log(course);
    this.form.setValue({
      _id: course._id,
      name: course.name,
      category: course.category
    });
  }

  onToggleChange(event: MatSlideToggleChange) {
    this.isToggleOn = event.checked;
    console.log('Toggle is now: ', event.checked); // true (on) or false (off)
  }

  onSubmit() {
    if (this.isToggleOn === true) {
      this.service.save(this.form.value).subscribe(() => {
        this.router.navigate([''], { relativeTo: this.route });
      }
      );
    }
    this.service.save(this.form.value).subscribe();
  }



  onCancel() {

  }


}

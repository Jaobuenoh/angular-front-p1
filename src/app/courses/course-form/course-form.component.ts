import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  //not to be null
  form = this.formBuilder.group({
    name: [''],
    category:['']
});
  //not to be null
  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService) {

  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => console.log(result));

  }

  onCancel(){

  }

}

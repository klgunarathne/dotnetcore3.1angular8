import { HouseService } from './../../services/house.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.scss']
})
export class HouseFormComponent implements OnInit {
  types = [{ name: 'Full House' }, { name: 'Shared House' }];
  houseForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private houseService: HouseService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.houseForm = this.fb.group({
      city: ['', Validators.required],
      bedRooms: ['', Validators.required],
      guest: [''],
      beds: [''],
      rentPerNight: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onSubmit() {
    this.houseService.addHouse(this.houseForm.value).subscribe(
      res => {
        this.toastrService.success('House added', 'House', { closeButton: true });
        this.router.navigate(['/']);
      });
  }
}

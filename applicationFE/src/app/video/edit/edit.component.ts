import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit, OnDestroy {
  constructor(private modal: ModalService) {}

  ngOnInit() {
    this.modal.register('editClip');
  }

  ngOnDestroy() {
    this.modal.unregistered('editClip');
  }
}
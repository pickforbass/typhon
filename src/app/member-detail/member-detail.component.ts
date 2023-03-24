import { Component, Input } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent {
 
  @Input() member?: Member;

  closeMember(): void{
    this.member = undefined;
  }

}

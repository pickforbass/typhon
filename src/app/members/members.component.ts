import { Component } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {
  members = MEMBERS;
  selectedMember?: Member;

  getMember(member: Member): void {
    this.selectedMember = member;
  }

  }


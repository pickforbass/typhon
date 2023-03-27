import { Component } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MEMBERS } from '../members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})

export class MembersComponent {
  members: Member[] = [];
  selectedMember?: Member;

  getMember(member: Member): void {
    this.selectedMember = member;
  }

  getMembers(): void {
    this.MemberService.getMembers()
        .subscribe(members => this.members = members);
  }

  constructor(private MemberService:MemberService) {}

  ngOnInit(): void {
    this.getMembers();
  }

  }


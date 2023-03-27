import { Injectable } from '@angular/core';
import { Member } from './member';
import { Observable, of } from 'rxjs';
import { MEMBERS } from './members';


@Injectable({
  providedIn: 'root'
})

export class MemberService {

  constructor() { }

  getMembers(): Observable<Member[]> {
    const members = of(MEMBERS)
    return members;
  }
}

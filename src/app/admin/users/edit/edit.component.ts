import { Component, OnInit } from '@angular/core';
import {FirebaseObjectObservable} from 'angularfire2';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {IUser, UserService, INewUser} from "../../../shared/services/user.service";


@Component({
  selector: 'app-user-edit',
  templateUrl: './edit.component.html',
  styleUrls: []
})

export class EditUserComponent implements OnInit {
  private firebaseUser: FirebaseObjectObservable<IUser>;
  public user: INewUser;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let vm = this;

      let id = params['id'];

      this.user = {
        name: '',
        email: '',
        isAdmin: false
      };

      this.firebaseUser = this.userService.getUser(id);

      this.firebaseUser.subscribe((user : IUser) => {
        vm.user.name = user.name;
        vm.user.email = user.email;
        vm.user.isAdmin = user.isAdmin;
      });
    });
  }

  saveUser() {
    let vm = this;

    this.firebaseUser.update(this.user).then(() => {
      vm.router.navigate(['admin/users']);
    });
  }
}

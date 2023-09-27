1. module intro

2. how an angular app gets loaded and started

3. components are important!

4. creating a new component

5. understanding the role of appmodule and component declaration

6. using custom components

7. creating components with thr cli & nesting components

8. working with component styles

9. fully understanding the component selector
so Typescript doesn't support use of ID selectors and things like hover.

10. assignment: component basics (prob)

11. assignment: component basics (soln)

12. what is databinding?

13. string interpolation

14. property binding

15. property binding vs string interpolation

16. event binding

17. passing & using data with event binding

18. 2-way databinding

19. combining all forms of databinding

20. assignment: data & event binding (prob)
a. add an input field which updates a property ('username') via 2-way binding
b. output the username property vis string interpolation (in a paragraph below the input)
c. add a button which may only be clicked if the username is NOT an empty string
d. upon clicking the button, the username should be reset to an empty string

21. assignment: data & event binding (soln)
app.component.html
<div class="container">
<div class="row">
<div class="col-xs-12">
<ol>
<li>add an input field which updates a property ('username') via 2-way binding</li>
<li>output the username property vis string interpolation (in a paragraph below the input)</li>
<li>add a button which may only be clicked if the username is NOT an empty string</li>
<li>upon clicking the button, the username should be reset to an empty string</li>
</ol>
<hr>
<label>username</label>
<input type="text" class="form-conrol" [(ngModel)]="username">
<p>{{ username }}</p>
<button class="btn btn-primary [disabled]="username === ''"
(click)="username = ''">reset user</button>
</div>
</div>
</div>

app.module.ts
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

app.component.ts
import { Component } from '@angular.core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    username = '';
}

22. understanding directives

23. using nglf with an else condition

24. styling elements dynamically with ngStyle

25. applying css classes dynamically with ngClass

26. outputting lists with ngFor

27. assignment: directives (prob)
a. add a button which says 'display details'
b. add a paragraph with any content of your choice (e.g. 'secret passwod = tuna')
c. toggle the displaying of that paragraph with the button created in the first step
d. log all button clicks in an array anf output that array below the secrey paragraph (maybe log a tomestamp or simply an increment number)
e. starting at the 5th log item, give all future log items a blue background (via ngStyle) anf white color (ngClass)

28. assignment: directives (soln)

app.component.html
<button class="btn btn-primary" (click)="showSecret = !showSecret">display details</button>
<p *ngIf="showSecret">secret passord = tuna</p>

<button class="btn btn-primary" (click)="onToggleDetails">display details</button>
<p *ngIf="showSecret">secret passord = tuna</p>
<div *ngFor="let logItem of log"
[ngStyle]="{backgroundColor: logItem >= 5 ? 'blue' : 'transparent'}"
[ngClass]="{'white-text'= logItem >=5}"
>{{ logItem }}</div>

app.component.ts
export class AppComponent {
    showSecret = false;
    log = [];

    onToggleDetails() {
        this.showSecret = !this.showSecret;
        this.log.push(this.log.length + 1);
    }
}

app.component.css
.white-text {
    color: white;
}




29. getting the index when using ngFor
import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'jdhm-nav-bar',
})
@View({
  templateUrl: './app/components/navbar/navbar.component.html',
  directives: [ROUTER_DIRECTIVES],

})
export class NavbarComponent {
}

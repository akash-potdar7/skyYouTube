import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  printUser(event) {
    console.log(event);
  }

  printError(event) {
    console.error(event);
  }
}

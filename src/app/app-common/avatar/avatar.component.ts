import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-avatar",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./avatar.component.html",
	styleUrls: ["./avatar.component.scss"]
})
export class AvatarComponent {
	@Input() imageSrc = "assets/Svgs/avatar_male.svg";
}

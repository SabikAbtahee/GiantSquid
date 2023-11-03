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
	@Input() avatarConfig: AvatarConfig = {
		Id: "DefaultAvatar",
		ImageSrc: "assets/Svgs/avatar_male.svg",
		Name: "G",
		ShowBorder: false,
		IsSelected: false,
		CssClass: "avatar"
	};
}

export interface AvatarConfig {
	Id?: string | number;
	ImageSrc?: string;
	Name: string;
	ShowBorder?: boolean;
	IsSelected?: boolean;
	CssClass?: string;
}

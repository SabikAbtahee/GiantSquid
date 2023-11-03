import { Component } from "@angular/core";
import { ChatMember } from "../../interfaces/ChatMember.interface";

@Component({
	selector: "app-chat-side-bar",
	templateUrl: "./chat-side-bar.component.html",
	styleUrls: ["./chat-side-bar.component.scss"]
})
export class ChatSideBarComponent {
	chatmembers: Array<ChatMember> = [
		{
			Name: "Sabik",
			IsActive: true,
			PictureUrl: ""
		},
		{
			Name: "Abtahee",
			IsActive: true,
			PictureUrl: ""
		}
	];
}

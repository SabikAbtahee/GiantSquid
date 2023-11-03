import { Component, Input } from "@angular/core";
import { ChatMember } from "../../interfaces/ChatMember.interface";
import { AvatarConfig } from "@common";

@Component({
	selector: "app-chat-list-bar",
	templateUrl: "./chat-list-bar.component.html",
	styleUrls: ["./chat-list-bar.component.scss"]
})
export class ChatListBarComponent {
	@Input() chatMembers: Array<ChatMember> = [];

	avatarConfig: AvatarConfig = {
		Name: "Sabik",
		CssClass: "chat-member-avatar",
		ImageSrc: ""
	};
}

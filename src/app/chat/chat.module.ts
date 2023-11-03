import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatListBarComponent } from "./components/ChatListBar/chat-list-bar.component";
import { AvatarComponent } from "../app-common/avatar/avatar.component";
import { ChatSideBarComponent } from "./containers/ChatSideBar/chat-side-bar.component";
import { AppSharedModule } from "../app-shared/app-shared.module";

@NgModule({
	declarations: [ChatListBarComponent, ChatSideBarComponent],
	exports: [ChatSideBarComponent],
	imports: [CommonModule, AvatarComponent, AppSharedModule]
})
export class ChatModule {}

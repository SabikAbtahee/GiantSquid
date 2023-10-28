import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./containers/navigation/navigation.component";
import { MaterialModule } from "@material";
import { AppSharedModule } from "@shared";
import { AvatarComponent } from "../app-common/avatar/avatar.component";

@NgModule({
    declarations: [NavigationComponent],
    exports: [NavigationComponent],
    imports: [CommonModule, MaterialModule, AppSharedModule, AvatarComponent]
})
export class NavigationModule {}

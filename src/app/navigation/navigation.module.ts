import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./containers/navigation/navigation.component";
import { MaterialModule } from "@material";
import { AppSharedModule } from "@shared";

@NgModule({
	declarations: [NavigationComponent],
	imports: [CommonModule, MaterialModule, AppSharedModule],
	exports: [NavigationComponent]
})
export class NavigationModule {}

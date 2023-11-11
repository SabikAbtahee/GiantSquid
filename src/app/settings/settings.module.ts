import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SchemeSwitchDirective } from "./directives/scheme-switch.directive";
import { SettingsComponent } from "./containers/settings/settings.component";
import { AppSharedModule } from "../app-shared/app-shared.module";
import { MaterialModule } from "@material";
import { SideDrawerComponent } from "../app-common/side-drawer/side-drawer.component";
import { SettingsViewComponent } from "./components/settings-view/settings-view.component";

@NgModule({
    declarations: [SchemeSwitchDirective, SettingsComponent, SettingsViewComponent],
    exports: [SettingsComponent],
    imports: [CommonModule, AppSharedModule, MaterialModule, SideDrawerComponent]
})
export class SettingsModule {}

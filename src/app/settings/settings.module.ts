import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SchemeSwitchDirective } from "./directives/scheme-switch.directive";

@NgModule({
	declarations: [SchemeSwitchDirective],
	imports: [CommonModule],
	exports: [SchemeSwitchDirective]
})
export class SettingsModule {}

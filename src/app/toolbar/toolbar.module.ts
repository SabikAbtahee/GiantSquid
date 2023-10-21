import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppSharedModule } from "../app-shared/app-shared.module";
import { MaterialModule } from "../app-shared/material.module";
import { ToolbarComponent } from "./container/toolbar/toolbar.component";

@NgModule({
	declarations: [ToolbarComponent],
	exports: [ToolbarComponent],
	imports: [CommonModule, MaterialModule, AppSharedModule]
})
export class ToolbarModule {}

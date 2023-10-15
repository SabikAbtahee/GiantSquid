import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClassicLayoutComponent } from "./components/classic-layout/classic-layout.component";
import { EmptyLayoutComponent } from "./components/empty-layout/empty-layout.component";
import { RouterModule } from "@angular/router";
import { ClassyLayoutComponent } from "./components/classy-layout/classy-layout.component";
import { CompactLayoutComponent } from "./components/compact-layout/compact-layout.component";
import { DenseLayoutComponent } from "./components/dense-layout/dense-layout.component";
import { FuturisticLayoutComponent } from "./components/futuristic-layout/futuristic-layout.component";
import { ThinLayoutComponent } from "./components/thin-layout/thin-layout.component";
import { CenteredLayoutComponent } from "./components/centered-layout/centered-layout.component";
import { EnterpriseLayoutComponent } from "./components/enterprise-layout/enterprise-layout.component";
import { ModernLayoutComponent } from "./components/modern-layout/modern-layout.component";
import { MaterialLayoutComponent } from "./components/material-layout/material-layout.component";
import { LayoutComponent } from "./containers/layout/layout.component";

@NgModule({
	declarations: [
		ClassicLayoutComponent,
		EmptyLayoutComponent,
		ClassyLayoutComponent,
		CompactLayoutComponent,
		DenseLayoutComponent,
		FuturisticLayoutComponent,
		ThinLayoutComponent,
		CenteredLayoutComponent,
		EnterpriseLayoutComponent,
		ModernLayoutComponent,
		MaterialLayoutComponent,
		LayoutComponent
	],
	imports: [CommonModule, RouterModule],
	exports: [LayoutComponent]
})
export class LayoutModule {}

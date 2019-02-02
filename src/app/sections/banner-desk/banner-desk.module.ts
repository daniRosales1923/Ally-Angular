import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BannerDeskComponent } from './banner-desk.component';

export const COMMON_IMPORTS = [
    FlexLayoutModule
];
export const COMMON_DECLARATIONS = [BannerDeskComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})

export class BannerDeskModule{}

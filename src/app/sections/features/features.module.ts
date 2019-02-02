import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FeaturesComponent } from './features.component';

export const COMMON_IMPORTS = [
    FlexLayoutModule
];
export const COMMON_DECLARATIONS = [FeaturesComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})

export class FeaturesModule{}

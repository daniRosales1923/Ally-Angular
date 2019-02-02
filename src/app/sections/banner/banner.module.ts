import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BannerComponent } from './banner.component';
import { FragmentScrollModule } from 'src/app/directives/fragment-scroll/fragment-scroll.module';

export const COMMON_IMPORTS = [
    FlexLayoutModule,
    FragmentScrollModule
];
export const COMMON_DECLARATIONS = [BannerComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})

export class BannerModule{}

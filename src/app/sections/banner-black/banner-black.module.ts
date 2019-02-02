import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CounterModule } from 'src/app/directives/counter/counter.module';
import { InViewportModule } from 'src/app/directives/in-viewport/in-viewport.module';
import { BannerBlackComponent } from './banner-black.component';

export const COMMON_IMPORTS = [
    FlexLayoutModule,
    CounterModule,
    InViewportModule
];
export const COMMON_DECLARATIONS = [BannerBlackComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})

export class BannerBlackModule{}

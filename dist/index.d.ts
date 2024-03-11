import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import type { Directive } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

declare module 'vue3-tooltip' {
    const _default: {
        install: (app: any) => void;
    };
    export default _default;

    export const install: (app: any) => void;

    export const TooltipComponent: DefineComponent<{
        disable: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        position: {
            type: () => TooltipPosition;
            required: false;
            default: string;
        };
        clickable: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }, {
        isShowTooltip: Ref<boolean>;
        afterEnter: (el: Element) => void;
        hideTooltip: () => void;
    }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{
        disable: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
        position: {
            type: () => TooltipPosition;
            required: false;
            default: string;
        };
        clickable: {
            type: BooleanConstructor;
            required: false;
            default: boolean;
        };
    }>>, {
        disable: boolean;
        position: TooltipPosition;
        clickable: boolean;
    }, {}>;

    export const TooltipDirective: Directive<HTMLElement, string>;

    type TooltipPosition = 'bottom' | 'top' | 'left' | 'right';

    export { }
}

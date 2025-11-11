import type { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import type { Directive } from 'vue';
import { ExtractPropTypes } from 'vue';
import type { Plugin as Plugin_2 } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

/**
 * Check if element would overflow viewport
 */
export declare const checkOverflow: (rect: Rect) => {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
};

/**
 * Check if element fits in viewport with given position
 */
export declare const checkPosition: (triggerRect: Rect, tooltipRect: Rect, position: Position, offset?: number) => boolean;

/**
 * Get best position that fits in viewport
 */
export declare const getBestPosition: (triggerRect: Rect, tooltipRect: Rect, preferredPosition: Position, offset?: number) => PositionResult;

/**
 * Get element's bounding rect
 */
export declare const getRect: (element: HTMLElement) => Rect;

export declare const install: (app: App) => void;

/**
 * Detect if device is touch-enabled
 */
export declare const isTouchDevice: () => boolean;

export declare type Position = 'top' | 'bottom' | 'left' | 'right';

export declare interface PositionResult {
    position: Position;
    shouldFlip: boolean;
}

export declare interface Rect {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
}

export declare const TooltipComponent: DefineComponent<{
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
    autoPosition: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    adaptiveTouch: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    isShowTooltip: Ref<boolean>;
    onTooltipHover: Ref<boolean>;
    actualPosition: Ref<Position>;
    isTouch: Ref<boolean>;
    triggerRef: Ref<HTMLElement>;
    tooltipRef: Ref<HTMLElement>;
    afterEnter: (el: Element) => Promise<void>;
    onTriggerInteract: (event: Event) => void;
    onTriggerClick: () => void;
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
    autoPosition: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    adaptiveTouch: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    disable: boolean;
    position: TooltipPosition;
    clickable: boolean;
    autoPosition: boolean;
    adaptiveTouch: boolean;
}, {}>;

export declare const TooltipDirective: Directive<HTMLElement, TooltipValue>;

declare type TooltipPosition = 'bottom' | 'top' | 'left' | 'right';

declare type TooltipValue = string | null | undefined;

declare const VueTooltipPlugin: Plugin_2;
export default VueTooltipPlugin;

export { }

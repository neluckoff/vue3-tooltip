export type Position = 'top' | 'bottom' | 'left' | 'right';

export interface Rect {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export interface PositionResult {
  position: Position;
  shouldFlip: boolean;
}

/**
 * Check if element fits in viewport with given position
 */
export const checkPosition = (
  triggerRect: Rect,
  tooltipRect: Rect,
  position: Position,
  offset: number = 10
): boolean => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  switch (position) {
    case 'top':
      return triggerRect.top - tooltipRect.height - offset >= 0;
    
    case 'bottom':
      return triggerRect.bottom + tooltipRect.height + offset <= viewportHeight;
    
    case 'left':
      return triggerRect.left - tooltipRect.width - offset >= 0;
    
    case 'right':
      return triggerRect.right + tooltipRect.width + offset <= viewportWidth;
    
    default:
      return true;
  }
};

/**
 * Get best position that fits in viewport
 */
export const getBestPosition = (
  triggerRect: Rect,
  tooltipRect: Rect,
  preferredPosition: Position,
  offset: number = 10
): PositionResult => {
  // Try preferred position first
  if (checkPosition(triggerRect, tooltipRect, preferredPosition, offset)) {
    return { position: preferredPosition, shouldFlip: false };
  }

  // Try opposite position
  const opposites: Record<Position, Position> = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
  };

  const opposite = opposites[preferredPosition];
  if (checkPosition(triggerRect, tooltipRect, opposite, offset)) {
    return { position: opposite, shouldFlip: true };
  }

  // Try other positions
  const allPositions: Position[] = ['top', 'bottom', 'left', 'right'];
  for (const pos of allPositions) {
    if (pos !== preferredPosition && pos !== opposite) {
      if (checkPosition(triggerRect, tooltipRect, pos, offset)) {
        return { position: pos, shouldFlip: true };
      }
    }
  }

  // If nothing fits, use preferred (will be clipped but user chose it)
  return { position: preferredPosition, shouldFlip: false };
};

/**
 * Detect if device is touch-enabled
 */
export const isTouchDevice = (): boolean => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore - for older browsers
    (navigator.msMaxTouchPoints || 0) > 0
  );
};

/**
 * Get element's bounding rect
 */
export const getRect = (element: HTMLElement): Rect => {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.width,
    height: rect.height,
  };
};

/**
 * Check if element would overflow viewport
 */
export const checkOverflow = (rect: Rect): {
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
} => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  return {
    top: rect.top < 0,
    bottom: rect.bottom > viewportHeight,
    left: rect.left < 0,
    right: rect.right > viewportWidth,
  };
};


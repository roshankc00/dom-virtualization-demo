import { useCallback, useState } from "react";

interface UseVirtualListProps {
    count: number;
    itemHeight: number;
    viewportHeight: number;
    overscan?: number;
}

export const useVirtualList = ({ count, itemHeight, viewportHeight, overscan = 5 }: UseVirtualListProps) => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = useCallback(
        (e: React.UIEvent<HTMLDivElement>) => setScrollTop(e.currentTarget.scrollTop),
        []
    );

    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const end = Math.min(count, Math.ceil((scrollTop + viewportHeight) / itemHeight) + overscan);

    return { onScroll, start, end, offsetY: start * itemHeight, totalHeight: count * itemHeight };
}
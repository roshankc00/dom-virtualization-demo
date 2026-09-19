## What happens without virtualization

I rendered all 500k rows first. Next.js just kept saying "rendering..." and the page never really loaded. Way too many DOM nodes.

## What happens with it

Same 500k rows, but only ~30 are in the DOM. Page loads instantly and scrolling is smooth.

## Things I learned

The browser is slow at the DOM, not at JS arrays. 500k objects sitting in memory? Totally fine. 500k rows in the DOM? Boom, tab dead haha.

Fixed row height makes the math super easy. Scroll 4000px with 40px rows and you're at row 100. That's it, that's the whole trick.

Overscan is a few extra rows above and below the visible ones. Without it, scroll fast and you see blank white flashes. With it, boom, smooth.

Ctrl+F only finds rows that are on screen, because the rest don't exist in the DOM. Funny how that works.

Also test with `next build && next start`. Dev mode is slower and made me think it was worse than it is.

# What happens without virtualization

i rendered all 500k rows first. nextjs just kept saying "rendering... rendering .... haha" and the page really loaded super slow and was not responsive too it was lagging so much. way too many DOM nodes.

# What happens with it

Same 500k rows, but only ~30 are in the DOM. Page loads instantly and scrolling is smooth.

# Things I learned

the browser is slow at the dom, not at JS arrays. 500k objects sitting in memory????? totally fine. 500k rows in the DOM? Boom, tab dead haha.

fixed row height makes the math super easy. scroll 4000px with 40px rows and you are at row 100. thats it and yooo thats the whole trick.

overscan is a few extra rows above and below the visible ones. Without it, scroll fast and you see blank white flashes. With it, boom, smooth.

ctrl+F only finds rows that are on screen because the rest are in rest haha they dont exist in dom !

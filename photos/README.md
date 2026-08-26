# Photos go in this folder

## The ten filenames the site is expecting

`js/rabbits.js` is already pointing at these exact names. Save each photo
here with the matching name and it appears straight away — no other change
needed.

| Rabbit   | Save the photo as   |
|----------|---------------------|
| Bertie   | `photos/bertie-1.jpg` |
| Buffy    | `photos/buffy-1.jpg` |
| Cornel   | `photos/cornel-1.jpg` |
| Furina   | `photos/furina-1.jpg` |
| Misty    | `photos/misty-1.jpg` |
| Pinto    | `photos/pinto-1.jpg` |
| Powder   | `photos/powder-1.jpg` |
| Sizzler  | `photos/sizzler-1.jpg` |
| Sooty    | `photos/sooty-1.jpg` |
| Stolas   | `photos/stolas-1.jpg` |

Until a file is there, that rabbit shows a "photo coming soon" placeholder,
so the site never looks broken while you work through them.

## More than one photo per rabbit

Add `-2`, `-3` and so on (`photos/bertie-2.jpg`), then list them all in
`js/rabbits.js`:

```js
photos: ["photos/bertie-1.jpg", "photos/bertie-2.jpg"],
```

The first is used on the card; all of them show on the rabbit's own page.

## Tips

**Names must match exactly**, including the `.jpg` at the end. Lowercase, no
spaces. If your phone saved them as `.jpeg` or `.HEIC`, either rename the
file or change the line in `rabbits.js` to match.

**Size.** Photos from a phone are often 4–8 MB, which makes the page slow.
Resizing to about 1200 pixels wide gets them under 500 KB with no visible
loss. Mac: open in Preview → Tools → Adjust Size. Windows: open in Photos →
Resize.

**Cropping.** Cards crop to a landscape shape and keep the middle of the
picture. Your photos are portrait, so if a rabbit ends up half cut off, add
a focus line to that rabbit in `rabbits.js`:

```js
focus: "bottom",     // or "top"
```

**Getting a better photo.** The ones you have are perfectly usable, but a
few of the rabbits are dark-coated and photographed inside a shaded hutch,
which makes them hard to make out. If you get a chance, tempt them out into
open daylight, get down to their level rather than shooting from above, and
take far more than you think you need. A clear photo of a rabbit looking at
the camera does more to find them a home than any amount of writing.

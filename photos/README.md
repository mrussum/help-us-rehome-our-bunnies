# Photos go in this folder

## The photos are in

All ten are here and wired up in `js/rabbits.js`:

| Rabbit   | Save the photo as   |
|----------|---------------------|
| Bertie   | `photos/Bertie.jpg` |
| Buffy    | `photos/Buffy.jpg` |
| Cornel   | `photos/Cornel.jpg` |
| Furina   | `photos/Furina.jpg` |
| Misty    | `photos/Misty.jpg` |
| Pinto    | `photos/Pinto.jpg` |
| Powder   | `photos/Powder.jpg` |
| Sizzler  | `photos/Sizzler.jpg` |
| Sooty    | `photos/Sooty.jpg` |
| Stolas   | `photos/Stolas.jpg` |

**Capitalisation matters.** The web server is case-sensitive, so
`photos/Bertie.jpg` and `photos/bertie.jpg` are different files. If you
replace a photo, either keep the name identical or update the line in
`js/rabbits.js` to match.

If a file is ever missing, that rabbit falls back to a "photo coming soon"
placeholder rather than showing a broken image.

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

**Cropping.** Cards crop to a landscape shape. Your photos are portrait, so
several already have a `focus` line in `rabbits.js` to control which part is
kept — this is what stops Bertie's face being cut off and keeps the
handwritten names out of frame:

```js
focus: "68%",    // 0% = top of the photo, 100% = bottom
```

Bertie, Buffy, Furina, Misty and Sooty are set; the rest use the middle. If
you swap a photo and it crops badly, adjust or add that line.

**Getting a better photo.** The ones you have are perfectly usable, but a
few of the rabbits are dark-coated and photographed inside a shaded hutch,
which makes them hard to make out. If you get a chance, tempt them out into
open daylight, get down to their level rather than shooting from above, and
take far more than you think you need. A clear photo of a rabbit looking at
the camera does more to find them a home than any amount of writing.

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

**Capitalisation matters.** The web server is case-sensitive, so
`photos/Bertie.jpg` and `photos/bertie.jpg` are different files. If you
replace a photo, either keep the name identical or update the line in
`js/rabbits.js` to match.

**These are already the right shape** (4:3 landscape) and sized for the web,
so they need no cropping. If you swap one for a taller picture and it crops
badly, add a `focus` line to that rabbit in `js/rabbits.js`:

```js
focus: "65%",    // 0% = top of the photo, 100% = bottom
```

**Size.** Photos straight from a phone are often 4–8 MB, which makes the page
slow. Resizing to about 1200 pixels wide gets them under 500 KB with no
visible loss.

## The original hutch photos

The first set of photos is kept in `photos/original/`. Nothing on the site
uses them, but they're there if you want to go back, or to show a rabbit in
their real surroundings as a second picture:

```js
photos: ["photos/Bertie.jpg", "photos/original/Bertie.jpg"],
```

The first photo is used on the card; all of them appear on the rabbit's own
page.

# Photos go in this folder

## The quick version

1. Drop your photos into this folder.
2. Open `js/rabbits.js` and list the file names for each rabbit.

```js
{
  name: "Clover",
  photos: ["photos/clover-1.jpg", "photos/clover-2.jpg"],
  ...
}
```

Until you do, each rabbit shows a friendly "photo coming soon" placeholder,
so the site never looks broken while you're still taking pictures.

## Tips

**Naming.** Use lowercase names with no spaces — `clover-1.jpg`, not
`Clover Photo (1).JPG`. Spaces and capitals cause problems on some web hosts.
The name in the file must match the name in `rabbits.js` exactly, including
the `.jpg` at the end.

**Size.** Photos straight from a phone are often 4–8 MB each, which makes the
page slow to load. Resizing them to about 1200 pixels wide gets them under
500 KB with no visible loss. On a Mac, open the photo in Preview →
Tools → Adjust Size. On Windows, open in Photos → Resize.

**Shape.** The cards crop to a 4:3 landscape shape, so a photo with the
rabbit roughly in the middle works best. Portrait photos still work — they
just get cropped top and bottom.

**Getting a good rabbit photo.** Get down to their level rather than
shooting from above, use daylight instead of flash, and take far more than
you need. A photo where they're looking at the camera does more to find them
a home than any amount of writing.

You can list as many photos per rabbit as you like. The first one is used on
the card; all of them appear when someone opens that rabbit.

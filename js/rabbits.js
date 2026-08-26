/* =========================================================================
   THE RABBITS
   =========================================================================
   All ten of yours are here. Edit the words between the quote marks and
   leave the punctuation — the commas, brackets and colons — where it is.

   PHOTOS
     Put the files in the "photos" folder using exactly the names in each
     "photos:" line below. A rabbit whose photo isn't there yet shows a
     friendly placeholder, so the site never looks broken while you work.

     More than one per rabbit is fine:
       photos: ["photos/bertie-1.jpg", "photos/bertie-2.jpg"]
     The first is used on the card; all of them show on their own page.

   STILL TO FILL IN
     age is deliberately left blank. While it's empty the site simply doesn't
     mention it, rather than printing a guess — nobody should read something
     about these rabbits that isn't true.
       age: "3 years old"

     neutered is set to false for all ten, which is the true position today.
     If any of them are done later, change that one to true.

   TAGS
     Little badges on the card, which also become the filter buttons. Add
     whatever fits once you've decided:
       tags: ["Bonded pair", "Good with children", "Needs experienced home",
              "Older & gentle", "Shy at first", "Indoor", "Outdoor"]
     A filter button appears for any tag shared by two or more rabbits.

   BONDED PAIRS
     If two of them must be rehomed together, put each one's name in the
     other's bondedWith, e.g. bondedWith: "Misty". The site then flags it
     on the card, on their page, and next to the form checkbox.

   FOCUS
     Cards crop to a landscape shape. If a photo crops badly, add
     focus: "top" or focus: "bottom" to shift which part is kept.

   To remove a rabbit, delete its whole block from "{" to "},".
   ========================================================================= */

const RABBITS = [

  {
    name: "Bertie",
    photos: ["photos/Bertie.jpg"],
    focus: "68%",
    breed: "Lop",
    age: "6 years old",
    sex: "Male",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: [],                         // <-- add once you've decided
    summary: "A big, dense, charcoal-black lop who takes life at his own pace.",
    bio: "Bertie is the darkest of the group \u2014 a deep charcoal-black all over, with a thick plush coat and proper heavy lop ears framing the face. A solidly built rabbit, who tends to settle in the doorway of the hutch and keep an eye on whatever is going on outside. [Add a few lines here about what he's like with people, what makes him happy, and anything a new home would need to know.]",
    likes: [],
    needs: ""
  },

  {
    name: "Buffy",
    photos: ["photos/Buffy.jpg"],
    focus: "62%",
    breed: "Lop cross",
    age: "3 years old",
    sex: "Female",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: [],                         // <-- add once you've decided
    summary: "Dark chocolate coat, one ear up and one down \u2014 permanently mid-question.",
    bio: "Buffy has a rich near-black coat with a warm brown cast to it in the sun, and the most distinctive ears here: one sits properly lopped while the other stands straight up, giving the constant impression of having just heard something interesting. Very keen on the food bowl. [Add a few lines here about what she's like with people, what makes her happy, and anything a new home would need to know.]",
    likes: [],
    needs: ""
  },

  {
    name: "Cornel",
    photos: ["photos/Cornel.jpg"],
    breed: "Lop",
    age: "5 years old",
    sex: "Male",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: [],                         // <-- add once you've decided
    summary: "Warm sandy-brown, with darker shading around the face and flanks.",
    bio: "Cornel is a lovely warm colour \u2014 sandy chestnut through the body, shading to a deeper smoky brown around the face, ears and feet, with big dark eyes. A neat, compact, tidy-looking rabbit who tends to tuck into a corner and watch. [Add a few lines here about what he's like with people, what makes him happy, and anything a new home would need to know.]",
    likes: [],
    needs: ""
  },

  {
    name: "Furina",
    photos: ["photos/Furina.jpg"],
    focus: "58%",
    breed: "Lop",
    age: "3 years old",
    sex: "Female",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: [],                         // <-- add once you've decided
    summary: "Cream-white with smoky ears and nose, and pale blue-grey eyes.",
    bio: "Furina is the palest of the group and rather striking with it \u2014 a soft cream-white coat with smoky grey shading on the ears, nose and feet, and unusual pale blue-grey eyes. Extremely serious about mealtimes. [Add a few lines here about what she's like with people, what makes her happy, and anything a new home would need to know.]",
    likes: [],
    needs: ""
  },

  {
    name: "Misty",
    photos: ["photos/Misty.jpg"],
    focus: "64%",
    breed: "Lop",
    age: "4 years old",
    sex: "Female",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: [],                         // <-- add once you've decided
    summary: "Silver and charcoal \u2014 the colouring the name came from.",
    bio: "Misty has beautiful smoky colouring: a dark charcoal head and ears blending into a silvered grey saddle, so she looks slightly frosted from above. A calm-looking rabbit, seemingly happy to sit and be admired. [Add a few lines here about what she's like with people, what makes her happy, and anything a new home would need to know.]",
    likes: [],
    needs: ""
  },

  {
    name: "Pinto",
    photos: ["photos/Pinto.jpg"],
    breed: "Lop",
    age: "3 years old",
    sex: "Male",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: [],                         // <-- add once you've decided
    summary: "Pure snow-white with soft pink-toned ears and dark button eyes.",
    bio: "Pinto is white from nose to tail \u2014 a bright, clean white coat with delicately pink-lined lop ears and dark, alert eyes that stand out against it. One of the smaller, neater rabbits here, and usually found sitting somewhere he has decided is his. [Add a few lines here about what he's like with people, what makes him happy, and anything a new home would need to know.]",
    likes: [],
    needs: ""
  },

  {
    name: "Powder",
    photos: ["photos/Powder.jpg"],
    breed: "Lop",
    age: "3 years old",
    sex: "Female",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: [],                         // <-- add once you've decided
    summary: "Soft cream-white with fawn-grey ears and a smudge of grey on the nose.",
    bio: "Powder is a gentle, powdery colour all over \u2014 creamy white through the body with warm fawn-grey ears and a soft grey smudge across the nose, as though she has been into something. Compact, round and rather serene-looking. [Add a few lines here about what she's like with people, what makes her happy, and anything a new home would need to know.]",
    likes: [],
    needs: ""
  },

  {
    name: "Sizzler",
    photos: ["photos/Sizzler.jpg"],
    breed: "Lop",
    age: "4 years old",
    sex: "Male",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: [],                         // <-- add once you've decided
    summary: "A handsome silver-ticked coat \u2014 the most unusual colouring of the ten.",
    bio: "Sizzler has a really lovely silvered coat: each hair banded so the whole rabbit looks frosted with silver over a darker undercoat, with grey lop ears and a wise-looking face. The kind of colouring people stop and ask about. [Add a few lines here about what he's like with people, what makes him happy, and anything a new home would need to know.]",
    likes: [],
    needs: ""
  },

  {
    name: "Sooty",
    photos: ["photos/Sooty.jpg"],
    focus: "66%",
    breed: "Lop",
    age: "4 years old",
    sex: "Female",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: [],                         // <-- add once you've decided
    summary: "Warm caramel and cream, with a neat white bib at the chest.",
    bio: "Sooty is a lovely warm sandy-caramel over the back and head, fading to cream down the sides, with a tidy white bib at the chest and darker shading on the ears. Round, soft and very easy on the eye. [Add a few lines here about what she's like with people, what makes her happy, and anything a new home would need to know.]",
    likes: [],
    needs: ""
  },

  {
    name: "Stolas",
    photos: ["photos/Stolas.jpg"],
    breed: "Lop",
    age: "3 years old",
    sex: "Male",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: [],                         // <-- add once you've decided
    summary: "Cream-white with a dark chocolate mask and matching ears.",
    bio: "Stolas has the classic pointed colouring \u2014 a pale cream-white body with a distinct dark chocolate-grey mask across the nose and matching shading on the ears, which makes for a very expressive face. Tends to settle quietly in a corner and watch what is happening. [Add a few lines here about what he's like with people, what makes him happy, and anything a new home would need to know.]",
    likes: [],
    needs: ""
  },

];

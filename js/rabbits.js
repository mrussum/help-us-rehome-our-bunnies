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

   BONDED PAIRS AND GROUPS
     For a pair, put each one's name in the other's bondedWith:
       bondedWith: "Misty",
     For a group, use a list, and say what they are to each other:
       bondedWith: ["Furina", "Powder"],
       bondedLabel: "sisters",
       bondedNote: "One sentence explaining the situation.",
     The site then flags it on the card, on their page, and next to their
     checkbox on the form. Furina, Powder and Buffy are set up this way.

   FOCUS
     The photos are already the right shape for the cards. If you swap one
     for a taller picture that crops badly, add focus: "top", "bottom" or a
     percentage like "65%" to shift which part is kept.

   WRITING THE BIOS
     Each bio below describes how the rabbit looks and then ends with a
     bracketed prompt for you to replace. There are nine worked examples,
     notes on what makes a bio work, and a list of questions per rabbit in
     "writing-the-bios.md" in the main folder.

   To remove a rabbit, delete its whole block from "{" to "},".
   ========================================================================= */

const RABBITS = [

  {
    name: "Bertie",
    photos: ["photos/Bertie.jpg"],
    breed: "Lop",
    age: "6 years old",
    sex: "Male",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: ["Loves a cuddle", "Affectionate"],                         // <-- add once you've decided
    summary: "A big, dense, charcoal-black lop who takes life at his own pace.",
    bio: "Bertie is the darkest of the group — a deep charcoal-black all over, with a thick plush coat and proper heavy lop ears framing the face. He's very soppy and loves a cuddle. He can get a little too excited, but he's mostly calm once he's settled.",
    likes: [],
    needs: "Someone who enjoys a soppy, affectionate rabbit."
  },

  {
    name: "Buffy",
    photos: ["photos/Buffy.jpg"],
    breed: "Lop cross",
    age: "3 years old",
    sex: "Female",
    neutered: false,                  // none of them are neutered yet
    bondedWith: ["Furina", "Powder"],
    bondedLabel: "sisters",
    bondedNote: "They have lived together all their lives, and we would most like all three to go to one home. Any two of them could be paired instead if a trio isn't possible. Being sisters there is no risk of litters between them, though spaying is still strongly recommended.",
    tags: ["Bonded sisters", "Shy at first", "Curious"],                         // <-- add once you've decided
    summary: "Dark chocolate coat, one ear up and one down \u2014 permanently mid-question.",
    bio: "Buffy has a rich near-black coat with a warm brown cast to it in the sun, and the most distinctive ears here: one sits properly lopped while the other stands straight up. She likes her space — very curious, but very shy with it. She is one of three sisters, alongside Furina and Powder.",
    likes: [],
    needs: "Somewhere calm, and people who'll let her come to them. Ideally rehomed with her sisters Furina and Powder."
  },

  {
    name: "Cornel",
    photos: ["photos/Cornel.jpg"],
    breed: "Lop",
    age: "5 years old",
    sex: "Male",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: ["Shy at first", "Needs a calm home"],                         // <-- add once you've decided
    summary: "Warm sandy-brown, with darker shading around the face and flanks.",
    bio: "Cornel is a lovely warm colour — sandy chestnut through the body, shading to a deeper smoky brown around the face, ears and feet, with big dark eyes. He can be very shy and doesn't enjoy being smothered with fuss, but he will come over for some attention in his own time and at his own pace.",
    likes: [],
    needs: "A patient household that won't crowd him."
  },

  {
    name: "Furina",
    photos: ["photos/Furina.jpg"],
    breed: "Lop",
    age: "3 years old",
    sex: "Female",
    neutered: false,                  // none of them are neutered yet
    bondedWith: ["Powder", "Buffy"],
    bondedLabel: "sisters",
    bondedNote: "They have lived together all their lives, and we would most like all three to go to one home. Any two of them could be paired instead if a trio isn't possible. Being sisters there is no risk of litters between them, though spaying is still strongly recommended.",
    tags: ["Bonded sisters", "Shy at first", "Needs patience"],                         // <-- add once you've decided
    summary: "Cream-white with smoky ears and nose, and pale blue-grey eyes.",
    bio: "Furina is the palest of the group and rather striking with it — a soft cream-white coat with smoky grey shading on the ears, nose and feet, and unusual pale blue-grey eyes. Very shy, and would benefit from patient handling and training. She is one of three sisters, alongside Powder and Buffy.",
    likes: [],
    needs: "Patient handling. Ideally rehomed with her sisters Powder and Buffy."
  },

  {
    name: "Misty",
    photos: ["photos/Misty.jpg"],
    breed: "Lop",
    age: "4 years old",
    sex: "Female",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: ["Curious", "Wants attention", "Shy at first"],                         // <-- add once you've decided
    summary: "Silver and charcoal \u2014 the colouring the name came from.",
    bio: "Misty has beautiful smoky colouring: a dark charcoal head and ears blending into a silvered grey saddle, so they look slightly frosted from above. Very mischievous, but wants fuss and attention — a little shy, though well behaved with it.",
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
    tags: ["Shy at first", "Food-motivated", "Could be paired"],                         // <-- add once you've decided
    summary: "Pure snow-white with soft pink-toned ears and dark button eyes.",
    bio: "Pinto is white from nose to tail — a bright, clean white coat with delicately pink-lined lop ears and dark, alert eyes that stand out against it. He likes his food and watching everything going on. He's very shy, and might do well paired with another rabbit.",
    likes: ["Food", "Watching the world go by"],
    needs: "A patient home. Might benefit from being paired with another rabbit."
  },

  {
    name: "Powder",
    photos: ["photos/Powder.jpg"],
    breed: "Lop",
    age: "3 years old",
    sex: "Female",
    neutered: false,                  // none of them are neutered yet
    bondedWith: ["Furina", "Buffy"],
    bondedLabel: "sisters",
    bondedNote: "They have lived together all their lives, and we would most like all three to go to one home. Any two of them could be paired instead if a trio isn't possible. Being sisters there is no risk of litters between them, though spaying is still strongly recommended.",
    tags: ["Bonded sisters", "Shy at first", "Loves a cuddle"],                         // <-- add once you've decided
    summary: "Soft cream-white with fawn-grey ears and a smudge of grey on the nose.",
    bio: "Powder is a gentle, powdery colour all over — creamy white through the body with warm fawn-grey ears and a soft grey smudge across the nose. She's very shy, but she will sit nicely for a cuddle. She is one of three sisters, alongside Furina and Buffy.",
    likes: [],
    needs: "A quiet home and a bit of patience. Ideally rehomed with her sisters Furina and Buffy."
  },

  {
    name: "Sizzler",
    photos: ["photos/Sizzler.jpg"],
    breed: "Lop",
    age: "4 years old",
    sex: "Male",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: ["Curious", "Prefers watching"],                         // <-- add once you've decided
    summary: "A handsome silver-ticked coat \u2014 the most unusual colouring of the ten.",
    bio: "Sizzler has a really lovely silvered coat: each hair banded so the whole rabbit looks frosted with silver over a darker undercoat, with grey lop ears and a wise-looking face. He's a curious sort, though he'd rather sit and watch than cuddle.",
    likes: [],
    needs: "Someone happy with a rabbit who watches rather than snuggles."
  },

  {
    name: "Sooty",
    photos: ["photos/Sooty.jpg"],
    breed: "Lop",
    age: "4 years old",
    sex: "Female",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: ["Shy at first", "Food-motivated", "Could be paired"],                         // <-- add once you've decided
    summary: "Warm caramel and cream, with a neat white bib at the chest.",
    bio: "Sooty is a lovely warm sandy-caramel over the back and head, fading to cream down the sides, with a tidy white bib at the chest. She is very shy, but food and treats win her over. She has a sibling she was separated from, and the two of them could be paired again once both are neutered.",
    likes: ["Food", "Treats"],
    needs: "A patient home. Could be reunited with her sibling once both are neutered."
  },

  {
    name: "Stolas",
    photos: ["photos/Stolas.jpg"],
    breed: "Lop",
    age: "3 years old",
    sex: "Male",
    neutered: false,                  // none of them are neutered yet
    bondedWith: "",
    tags: ["Curious", "Shy at first", "Needs patience"],                         // <-- add once you've decided
    summary: "Cream-white with a dark chocolate mask and matching ears.",
    bio: "Stolas has the classic pointed colouring — a pale cream-white body with a distinct dark chocolate-grey mask across the nose and matching shading on the ears, which makes for a very expressive face. He is very curious and will watch everything going on. He can be very shy, but is friendly with patient handling.",
    likes: [],
    needs: "Patient handling while he settles in."
  },

];

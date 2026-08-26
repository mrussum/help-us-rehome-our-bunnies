/* =========================================================================
   THE RABBITS
   =========================================================================
   Nine placeholder rabbits are set up below. Replace the details with your
   real ones. The layout is the same for every rabbit, so the safest way to
   edit is to change the words between the quote marks and leave the
   punctuation (the commas, brackets and colons) exactly where it is.

   PHOTOS
     Put your photos in the "photos" folder, then list the file names here.
     e.g.  photos: ["photos/clover-1.jpg", "photos/clover-2.jpg"]
     Any rabbit with no photo yet shows a friendly placeholder instead,
     so the site never looks broken while you're still taking pictures.

   TAGS
     Short labels shown as little badges, and used by the filter buttons.
     Use whatever suits — "Bonded pair", "Indoor", "Good with children",
     "Needs experienced home", "Older & gentle", "Nervous", "Neutered".

   To have FEWER than nine rabbits, delete a whole block from its opening
   "{" down to its closing "}," — including the comma.
   ========================================================================= */

const RABBITS = [

  {
    name: "Clover",
    photos: [],                       // e.g. ["photos/clover-1.jpg"]
    breed: "Mini Lop",
    age: "3 years old",
    sex: "Female",
    neutered: true,
    bondedWith: "",                   // name of their partner, or "" if single
    tags: ["Indoor", "Gentle", "Good with children"],
    summary: "A calm, biscuit-coloured lop who supervises everything from the sofa arm.",
    bio: "Clover is the sensible one. She was hand-reared and has never met a person she didn't like, though she'd rather come to you than be picked up. She'll follow you from room to room, flop over dramatically when she's content, and she has strong opinions about coriander. She lives happily indoors and is fully litter-trained. Clover would suit a household that's around a fair bit and doesn't mind being gently bossed about.",
    likes: ["Coriander", "Cardboard castles", "Being brushed"],
    needs: "Indoor home, litter tray, someone patient with her nail trims."
  },

  {
    name: "Pepper",
    photos: [],
    breed: "Dutch",
    age: "2 years old",
    sex: "Male",
    neutered: true,
    bondedWith: "Nutmeg",
    tags: ["Bonded pair", "Playful", "Outdoor or indoor"],
    summary: "Half of an inseparable double act. Where Pepper goes, Nutmeg follows.",
    bio: "Pepper is all legs and enthusiasm. He binkies sideways across the lawn for no reason anyone has ever established, and he's the first to investigate anything new. He is devoted to Nutmeg — they eat together, groom each other and sleep in a single rabbit-shaped heap — so the two of them must be adopted as a pair. Separating them would break both their hearts.",
    likes: ["Running laps", "Digging boxes", "Nutmeg"],
    needs: "Must go with Nutmeg. Lots of space to run — he really does use it."
  },

  {
    name: "Nutmeg",
    photos: [],
    breed: "Dutch cross",
    age: "2 years old",
    sex: "Female",
    neutered: true,
    bondedWith: "Pepper",
    tags: ["Bonded pair", "Shy at first", "Outdoor or indoor"],
    summary: "Thoughtful, watchful, and completely devoted to Pepper.",
    bio: "Nutmeg takes her time with new people. Give her a week of quiet company and she'll be nudging your hand for strokes; rush her and she'll retreat under the nearest piece of furniture. She's clever with puzzle feeders and remarkably tidy. She and Pepper are bonded for life and are looking for one home together.",
    likes: ["Dandelion leaves", "Tunnels", "A predictable routine"],
    needs: "Must go with Pepper. A calm home without much sudden noise."
  },

  {
    name: "Biscuit",
    photos: [],
    breed: "Lionhead",
    age: "5 years old",
    sex: "Male",
    neutered: true,
    bondedWith: "",
    tags: ["Older & gentle", "Indoor", "Needs regular grooming"],
    summary: "A distinguished gentleman with an excellent mane and no urgency whatsoever.",
    bio: "Biscuit has reached the age where he sees no reason to hurry. He'd like a warm spot, a hay rack within reach, and someone to read next to. His long coat needs brushing two or three times a week — he grumbles, but he permits it. He's been a wonderful companion and deserves a gentle retirement with people who'll enjoy his company rather than expect entertainment.",
    likes: ["Sunny windowsills", "Banana (rationed)", "Sitting near people"],
    needs: "Regular grooming. An adopter happy to take on an older rabbit."
  },

  {
    name: "Willow",
    photos: [],
    breed: "English Spot",
    age: "1 year old",
    sex: "Female",
    neutered: true,
    bondedWith: "",
    tags: ["Energetic", "Needs experienced home", "Outdoor or indoor"],
    summary: "Bright, busy and full of opinions. Not a beginner's rabbit.",
    bio: "Willow is the cleverest rabbit here and the most work. She can open a latch, she rearranges her enclosure nightly, and she gets genuinely frustrated when she's bored. In the right home — one with proper space, plenty of enrichment and someone who finds her mischief funny rather than annoying — she is a joy. In too small a space she will make her feelings known.",
    likes: ["Solving things", "Willow branches", "Rearranging furniture"],
    needs: "An experienced adopter, a large secure space, and daily enrichment."
  },

  {
    name: "Marmalade",
    photos: [],
    breed: "Rex",
    age: "4 years old",
    sex: "Male",
    neutered: true,
    bondedWith: "",
    tags: ["Affectionate", "Indoor", "Good with children"],
    summary: "Velvet-coated, endlessly friendly, and convinced he is a small dog.",
    bio: "Marmalade will greet you at the door. He has the plush velveteen coat Rex rabbits are known for and he knows exactly how good it feels to stroke. He's confident with visitors, tolerant of gentle children, and has never so much as grumbled. Of all nine, he's the one who will settle into a new home fastest.",
    likes: ["Head scratches", "Company", "Apple twigs"],
    needs: "Soft flooring — Rex rabbits have thin fur on their feet. Plenty of attention."
  },

  {
    name: "Poppy",
    photos: [],
    breed: "Netherland Dwarf",
    age: "2 years old",
    sex: "Female",
    neutered: true,
    bondedWith: "",
    tags: ["Small", "Shy at first", "Indoor"],
    summary: "Tiny, cautious, and utterly charming once she trusts you.",
    bio: "Poppy is the smallest of the nine and takes the longest to warm up. She spent her first months somewhere unkind before she came to us, and loud households frighten her. But she has come a long way: she now takes food from a hand and will sit beside a quiet person for as long as they'll stay still. She needs an adopter with patience and no expectations of a cuddly rabbit on day one.",
    likes: ["Hiding boxes", "Quiet", "Being talked to softly"],
    needs: "A calm adult household. Patience. No young children."
  },

  {
    name: "Rosie",
    photos: [],
    breed: "Continental Giant cross",
    age: "3 years old",
    sex: "Female",
    neutered: true,
    bondedWith: "",
    tags: ["Large breed", "Gentle", "Needs lots of space"],
    summary: "A very big rabbit with a very soft nature. Needs room to match.",
    bio: "Rosie weighs the better part of six kilos and is the gentlest animal in the house. Giant rabbits are wonderful, but they are a serious commitment: she needs an enclosure the size of a small shed, a large litter tray, and considerably more hay and vegetables than a normal rabbit. Her vet bills are bigger too. For someone who has the space, she is the loveliest company imaginable.",
    likes: ["Stretching out full length", "Kale", "Leaning on people"],
    needs: "Genuinely large accommodation. An adopter who understands giant breeds."
  },

  {
    name: "Thistle",
    photos: [],
    breed: "Crossbreed",
    age: "6 years old",
    sex: "Male",
    neutered: true,
    bondedWith: "",
    tags: ["Older & gentle", "Special care", "Indoor"],
    summary: "Our old soul. Slightly wonky, entirely wonderful.",
    bio: "Thistle has a slight head tilt from an ear infection a few years ago. It doesn't bother him — he eats well, gets about fine, and grooms himself perfectly — but it means he needs a checkup a little more often than most and shouldn't be startled. He is the most affectionate rabbit here and spends most of his day flopped somewhere warm. We would love to see him spend his last few years thoroughly spoiled.",
    likes: ["Warmth", "Gentle company", "Readily accepting treats"],
    needs: "An adopter comfortable with an older rabbit and occasional vet visits."
  },

];

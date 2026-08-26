# Help Us Rehome Our Bunnies

A small website for finding good homes for nine rabbits: a page introducing
each of them, and a thorough application form so you can tell which
applicants are genuinely set up to care for a rabbit.

It's plain HTML, CSS and JavaScript — no build step, no frameworks, nothing
to install. Open `index.html` in a browser and it works.

---

## Getting it going

### 1. Your details — `js/config.js`

Open it and change the values between the quote marks: your location, your
email, and (optionally) a phone number.

### 2. The rabbits — `js/rabbits.js`

Nine placeholder rabbits are set up, with example bios showing the sort of
thing that works well. Replace them with the real ones. Keep the punctuation
— the commas, brackets and colons — exactly where it is, and only change the
words inside the quote marks.

To have fewer than nine, delete a whole block from its opening `{` to its
closing `},`.

### 3. Photos — the `photos` folder

Drop them in, then list the filenames in `rabbits.js`. See
`photos/README.md` for how to size them. Rabbits without photos show a
placeholder, so you can put the site live before you've photographed
everyone.

### 4. Turn off the reminder strip

Once your real content is in, set `showSetupBanner: false` in
`js/config.js`.

---

## Making the form reach your inbox

**This is the one part that needs a few minutes of setup**, so it's worth
explaining why.

A website on its own cannot send email. Sending email needs a mail server,
and a page sitting in a browser doesn't have one. So the form hands your
answers to a small free service that emails them on to you.

### Right now, with no setup

The form opens the visitor's own email app with every answer filled in,
addressed to you. They just press send. This works immediately and costs
nothing — but it relies on the visitor having email set up on their device,
and some people on phones don't. You'll lose a few applications this way.

### Recommended — Web3Forms (free, about two minutes)

1. Go to [web3forms.com](https://web3forms.com)
2. Enter `mmmrussum@gmail.com` — they email you an **access key**
3. Paste that key into `formAccessKey` in `js/config.js`

Done. Applications now arrive in your inbox automatically. The free tier
covers 250 submissions a month, which is far more than you'll need.

### Or — Formspree

[formspree.io](https://formspree.io) does the same job. Sign up, create a
form, and it gives you a URL like `https://formspree.io/f/abcdwxyz`. Put
that in `formEndpoint` and leave `formAccessKey` empty. The free tier allows
50 submissions a month.

**Whichever you choose, send yourself a test application before sharing the
link.** Check your spam folder if it doesn't arrive — the first one
sometimes lands there, and marking it "not spam" fixes it for good.

---

## Putting it on the internet

### GitHub Pages — free, and the code is already here

1. In this repository on GitHub, go to **Settings → Pages**
2. Under "Build and deployment", set **Source** to *Deploy from a branch*
3. Choose the branch and the `/ (root)` folder, then **Save**

A minute or so later the site is live at
`https://mrussum.github.io/help-us-rehome-our-bunnies/`

### Netlify — free, and slightly easier to get a nicer address

Go to [netlify.com](https://netlify.com), drag this whole folder onto the
page, and it's live. You can then set a custom address like
`ourbunnies.netlify.app` in the site settings.

Either way it costs nothing.

---

## What's in the box

```
index.html          the page itself
css/styles.css      all the styling — colours are grouped at the top
js/config.js        your settings          ← edit this
js/rabbits.js       the nine rabbits       ← edit this
js/app.js           the workings (no need to touch)
photos/             your photos go here    ← add these
```

### Changing the colours

They're all at the top of `css/styles.css`, in the `:root` block. Change
`--sage` and `--pink` and the whole site re-tints.

---

## About the application form

The form is deliberately long. Rabbits are the third most abandoned pet, in
large part because people take them on without knowing what's involved. The
questions are the ones proper rescues ask, and they cover:

- Contact details and location
- Which rabbit, and whether they could take a bonded pair
- Housing — type, **measurements**, security, whether it's ready
- Household — who lives there, children's ages, hours the rabbit is alone
- Other pets, and how dogs and cats would be kept separate
- Previous rabbit experience — including what happened to previous rabbits
- Diet, vet registration, and whether they can cover emergency vet costs
- Holiday cover, foreseeable life changes, and what they'd do if they
  couldn't keep the rabbit
- Willingness to have the space checked

Two things worth knowing about how it behaves:

- **Answers save as they type.** The form is long, and people get
  interrupted. Their progress is kept on their own device so they can come
  back and finish, which noticeably reduces abandoned applications.
- **There's a hidden spam trap.** An invisible field that people never see
  but automated bots fill in. Anything with it filled is silently discarded.

The answers arrive as a plain readable email — one question and answer per
block, in the order above.

### The questions that tell you most

If you're skimming an application, these three are the ones that matter:

1. **The housing measurements.** A specific answer ("6ft hutch with an 8ft
   run attached, open all the time") means someone who has thought about it.
   A vague one ("a big hutch") usually means they haven't.
2. **What happened to previous rabbits.** Honest answers here are a very
   good sign, including sad ones.
3. **What they'd do if they couldn't keep it.** "Bring them back to you" is
   the answer you're hoping for.

---

Made with a lot of love, and a certain amount of sadness, for nine very good
rabbits. 🐰

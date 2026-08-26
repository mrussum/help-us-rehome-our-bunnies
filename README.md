# Help Us Rehome Our Bunnies

A small website for finding good homes for ten rabbits: a page introducing
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

All ten are in, with their names, sexes and a description written from the
photos. Keep the punctuation — the commas, brackets and colons — exactly
where it is, and only change the words inside the quote marks.

Each rabbit still needs:

- **`age`** — left blank for now
- **`neutered`** — set `true` or `false`
- **`bio`** — each ends with a bracketed prompt to replace
- **`tags`** — optional badges like `"Good with children"`. Any tag shared
  by two or more rabbits becomes a filter button; with none set, the filter
  bar stays hidden.
- **`bondedWith`** — if any two must be rehomed together

**For the bios, see [`writing-the-bios.md`](writing-the-bios.md)** — nine
worked examples to model, notes on what makes a rescue bio work, and a set
of questions per rabbit to jog your memory. It doesn't affect the site.

`age` is deliberately blank rather than guessed. The site simply doesn't
mention it until you fill it in, so it never tells an adopter something
untrue. `neutered` is set to `false` on all ten, which is the true position
— change an individual one to `true` if it gets done later.

To remove a rabbit, delete its whole block from `{` to `},`.

### 3. Photos — the `photos` folder

Drop them in, then list the filenames in `rabbits.js`. See
`photos/README.md` for how to size them. Rabbits without photos show a
placeholder, so you can put the site live before you've photographed
everyone.

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

### Checking the form is wired up

Open the page, press `F12` for the browser console, and look for the line
beginning `[bunnies]`. It states exactly how the form will send.

### "I added my key, but it still opens my email app"

Almost always your browser showing an older copy of `config.js`. Hosts tell
browsers to keep files for around ten minutes, so an ordinary refresh
re-uses the cached one.

**Hard-refresh the page: `Ctrl` + `Shift` + `R`** (`Cmd` + `Shift` + `R` on a
Mac). The banner should flip to the green message.

**The check that settles it:** open the config file on your live site
directly —

```
https://mrussum.github.io/help-us-rehome-our-bunnies/js/config.js
```

Scroll to `formAccessKey`. That is exactly what the live server is handing
out, with no page caching in the way.

- **The key is there** → the server is fine, your browser is holding an old
  copy of the page. Hard-refresh, or bump the `?v=` number (below).
- **It's empty** → the site hasn't rebuilt yet. Check the **Actions** tab of
  the repository: a "pages build and deployment" run must have *finished*
  since you made the edit. It usually takes a minute or two.

### Forcing an update after you edit a file

At the bottom of `index.html` the script tags end in `?v=1`:

```html
<script src="js/config.js?v=1"></script>
<script src="js/rabbits.js?v=1"></script>
<script src="js/app.js?v=1"></script>
```

Change all three to `?v=2`, then `?v=3` next time. To a browser that is a
brand new file, so your change shows up straight away instead of after the
ten-minute cache expires. Worth doing whenever you add photos or edit a
bio and don't see the change.

If it doesn't, check in this order:

1. Did the change actually get saved and uploaded? On GitHub, open
   `js/config.js` in the repository and look at line 53 — the key should be
   there.
2. If you're on GitHub Pages, give it a minute. **Settings → Pages** shows
   when the last build finished.
3. Are you opening the file from your own computer rather than the live
   site? A downloaded copy won't have your later edits.
4. Open the browser console (`F12`) and look for the line starting
   `[bunnies]` — it states exactly how the page will send, and why.

---

## Putting it on the internet

### GitHub Pages — free, and the code is already here

1. In this repository on GitHub, go to **Settings → Pages**
2. Under "Build and deployment", set **Source** to *Deploy from a branch*
3. Choose the branch and the `/ (root)` folder, then **Save**

Make sure the **folder** dropdown says **`/ (root)`** and not `/docs` —
this site keeps its files at the top level, and pointing Pages at `/docs`
makes every build fail.

A minute or so later the site is live at
`https://mrussum.github.io/help-us-rehome-our-bunnies/`

The `.nojekyll` file in the repository root tells Pages to publish these
files exactly as they are, instead of running them through Jekyll (a blog
engine this site has no use for). Without it, ordinary text in a rabbit's
bio — anything containing `{{` or `{%` — would break the whole build.
Please leave that file in place.

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
- Whether they'll arrange neutering, since none of yours are done
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

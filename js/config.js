/* =========================================================================
   SITE CONFIG  —  edit this file first
   =========================================================================
   Everything you need to personalise the site lives here.
   Change the values between the quote marks, save, refresh the page.
   ========================================================================= */

const CONFIG = {

  /* ---- Who you are ---------------------------------------------------- */

  // Shown in the page title and header.
  siteName: "Help Us Rehome Our Bunnies",

  // One friendly line under the big heading.
  tagline: "Nine much-loved rabbits looking for their next chapter",

  // Where the rabbits are. Helps people know if they're close enough.
  location: "Please add your town / county here",

  // Contact email. The form sends here, and it's shown in the footer.
  email: "mmmrussum@gmail.com",

  // Optional phone number. Leave as "" to hide it completely.
  phone: "",


  /* ---- Where the form goes -------------------------------------------- */
  /*
     A website on its own cannot send email — that needs a mail server.
     So the form hands your answers to a free forwarding service, which
     emails them to the address above.

     RIGHT NOW  (formEndpoint is empty):
       The form opens the visitor's own email app with every answer
       pre-filled, addressed to you. This works with zero setup, but it
       relies on the visitor having email set up on their device.

     BETTER  (2 minutes, free, recommended):
       1. Go to https://web3forms.com  — enter mmmrussum@gmail.com
       2. They email you an "access key". Copy it.
       3. Paste it into formAccessKey below.
          Leave formEndpoint exactly as it is.

     OR, if you'd rather use Formspree (https://formspree.io):
       1. Sign up, create a form, it gives you a URL like
          https://formspree.io/f/abcdwxyz
       2. Paste that URL into formEndpoint.
       3. Leave formAccessKey empty.
  */

  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: "e0ff7c49-f9d8-4d30-8f29-5d7e32c222b9",   // <-- paste your Web3Forms key here


  /* ---- Reminder banner ------------------------------------------------ */

  // A small strip at the top reminding you the demo text is still in place.
  // Once you've put in your real rabbit details, change this to false.
  showSetupBanner: true,

};

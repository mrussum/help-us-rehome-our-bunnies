/* =========================================================================
   Help Us Rehome Our Bunnies — page behaviour
   You shouldn't need to edit this file. Rabbit details live in rabbits.js
   and your settings live in config.js.
   ========================================================================= */
(function () {
  "use strict";

  /* config.js and rabbits.js declare these with `const`, which is scoped to
     the script rather than hung off `window` — so read them directly, with a
     fallback in case a file is missing or has a typo in it. */
  var cfg  = (typeof CONFIG  !== "undefined" && CONFIG)  ? CONFIG  : {};
  var bunnies = (typeof RABBITS !== "undefined" && RABBITS) ? RABBITS : [];

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* A friendly stand-in shown wherever a photo hasn't been added yet. */
  function placeholderMarkup(name) {
    return '<div class="photo-placeholder">' +
      '<svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">' +
      '<ellipse cx="13.5" cy="12" rx="4" ry="9"/><ellipse cx="26.5" cy="12" rx="4" ry="9"/>' +
      '<circle cx="20" cy="26" r="11"/></svg>' +
      '<span>' + esc(name) + "'s photo coming soon</span></div>";
  }

  /* An <img> that falls back to the placeholder if the file isn't there yet,
     so a missing photo never looks like a broken site.

     The swap is wired up in JS rather than an inline onerror= attribute:
     the placeholder markup contains double quotes, which would close the
     attribute early and leave a syntax error on every missing photo. */
  function mediaMarkup(rabbit, cls, overlays) {
    var wrap = '<div class="' + cls + '">';
    if (rabbit.photos && rabbit.photos.length) {
      var focus = rabbit.focus ? ' style="object-position:center ' + esc(rabbit.focus) + '"' : "";
      wrap += '<img src="' + esc(rabbit.photos[0]) + '" alt="' + esc(rabbit.name) + '"' +
              focus + ' loading="lazy" data-fallback="' + esc(rabbit.name) + '">';
    } else {
      wrap += placeholderMarkup(rabbit.name);
    }
    return wrap + (overlays || "") + "</div>";
  }

  /* Call after inserting any markup containing rabbit photos. Handles images
     that failed before the listener was attached, which is the common case
     for a cached 404. */
  function wirePhotoFallbacks(root) {
    $$("img[data-fallback]", root).forEach(function (img) {
      function swap() {
        if (img.dataset.swapped) return;
        img.dataset.swapped = "1";
        img.insertAdjacentHTML("afterend", placeholderMarkup(img.dataset.fallback));
        img.remove();
      }
      img.addEventListener("error", swap);
      if (img.complete && img.naturalWidth === 0) swap();
    });
  }

  /* ---------------------------------------------------------------------
     1. Apply the settings from config.js
     --------------------------------------------------------------------- */
  /* How will this page send an application? The submit handler and the setup
     banner both ask this, so they can never disagree. */
  function deliveryMethod() {
    var endpoint = cfg.formEndpoint || "";
    if (!endpoint) return { mode: "mailto", why: "No formEndpoint is set in config.js." };
    if (endpoint.indexOf("web3forms") !== -1) {
      return cfg.formAccessKey
        ? { mode: "web3forms", why: "" }
        : { mode: "mailto", why: "formAccessKey is empty in the config.js this page loaded." };
    }
    return { mode: "formspree", why: "" };
  }

  var NUMBERS = ["no","one","two","three","four","five","six","seven","eight","nine","ten",
                 "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen",
                 "eighteen","nineteen","twenty"];
  function numberWord(n) { return NUMBERS[n] || String(n); }
  function capitalise(w) { return w.charAt(0).toUpperCase() + w.slice(1); }

  function applyConfig() {
    var c = cfg;

    /* Written out from the actual list, so adding or removing a rabbit can
       never leave the page saying "nine" while ten are shown below. */
    var n = bunnies.length;
    $$("[data-count]").forEach(function (el) {
      el.textContent = el.dataset.count === "caps" ? capitalise(numberWord(n)) : numberWord(n);
    });
    if (c.siteName) {
      document.title = c.siteName;
      $("#brand-text").textContent = c.siteName;
      $("#footer-name").textContent = c.siteName;
    }
    if (c.tagline)  $("#hero-tagline").textContent = c.tagline;
    if (c.location) $("#hero-location").textContent = "📍 " + c.location;
    if (c.email) {
      var a = $("#footer-email");
      a.textContent = c.email;
      a.href = "mailto:" + c.email;
    }
    if (c.phone) {
      var p = $("#footer-phone");
      p.innerHTML = '<a href="tel:' + esc(c.phone.replace(/\s/g, "")) + '">' + esc(c.phone) + "</a>";
      p.hidden = false;
    }
    // Same answer in the console, for checking without the banner on.
    try {
      var dm = deliveryMethod();
      console.log("[bunnies] Applications will be sent via: " + dm.mode + (dm.why ? " \u2014 " + dm.why : ""));
    } catch (e) { /* ignore */ }
  }

  /* ---------------------------------------------------------------------
     2. Rabbit cards + tag filters
     --------------------------------------------------------------------- */
  var grid = $("#rabbit-grid");

  /* true -> say so, false -> say so, unset -> say nothing. Silence on a
     false would read as "neutered" to anyone skimming. */
  function neuterLabel(r) {
    if (r.neutered === true) return "neutered";
    if (r.neutered === false) return "not yet neutered";
    return "";
  }

  function cardMarkup(rabbit, index) {
    var meta = [rabbit.breed, rabbit.age].filter(Boolean).join(" · ");
    var tags = (rabbit.tags || []).map(function (t) {
      return '<span class="tag">' + esc(t) + "</span>";
    }).join("");
    var pair = rabbit.bondedWith
      ? '<span class="pair-flag">Bonded with ' + esc(rabbit.bondedWith) + "</span>" : "";
    var count = (rabbit.photos && rabbit.photos.length > 1)
      ? '<span class="photo-count">' + rabbit.photos.length + " photos</span>" : "";

    return '<button class="rabbit-card" data-index="' + index + '" data-tags="' +
      esc((rabbit.tags || []).join("|")) + '" type="button">' +
      mediaMarkup(rabbit, "card-media", pair + count) +
      '<div class="card-body">' +
        '<div class="card-head"><h3>' + esc(rabbit.name) + "</h3>" +
        '<span class="card-sex">' +
          esc([rabbit.sex, neuterLabel(rabbit)].filter(Boolean).join(" · ")) + "</span></div>" +
        (meta ? '<p class="card-meta">' + esc(meta) + "</p>" : "") +
        '<p class="card-summary">' + esc(rabbit.summary || "") + "</p>" +
        '<div class="tags">' + tags + "</div>" +
        '<span class="card-link">Read ' + esc(rabbit.name) + "'s story →</span>" +
      "</div></button>";
  }

  function renderRabbits() {
    if (!bunnies.length) {
      grid.innerHTML = '<p class="no-results">No rabbits listed yet — add them in <code>js/rabbits.js</code>.</p>';
      return;
    }
    grid.innerHTML = bunnies.map(cardMarkup).join("");
    wirePhotoFallbacks(grid);
    grid.addEventListener("click", function (e) {
      var card = e.target.closest(".rabbit-card");
      if (card) openModal(bunnies[+card.dataset.index]);
    });
  }

  function renderFilters() {
    var bar = $(".filters");

    /* Only offer a filter for tags shared by two or more rabbits. A chip that
       narrows nine rabbits down to one isn't a filter, it's just clutter —
       and every tag still shows on the cards themselves. */
    var counts = {}, order = [];
    bunnies.forEach(function (r) {
      (r.tags || []).forEach(function (t) {
        if (!counts[t]) { counts[t] = 0; order.push(t); }
        counts[t]++;
      });
    });
    var useful = order.filter(function (t) { return counts[t] > 1; })
                      .sort(function (a, b) { return counts[b] - counts[a]; });

    if (!useful.length) { bar.hidden = true; return; }
    bar.hidden = false;
    bar.innerHTML += useful.map(function (t) {
      return '<button class="chip" data-filter="' + esc(t) + '" type="button">' + esc(t) + "</button>";
    }).join("");

    bar.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      $$(".chip", bar).forEach(function (c) { c.classList.toggle("is-active", c === chip); });

      var want = chip.dataset.filter, shown = 0;
      $$(".rabbit-card", grid).forEach(function (card) {
        var match = want === "all" || card.dataset.tags.split("|").indexOf(want) !== -1;
        card.style.display = match ? "" : "none";
        if (match) shown++;
      });
      $("#no-results").hidden = shown > 0;
    });
  }

  /* ---------------------------------------------------------------------
     3. Rabbit detail dialog
     --------------------------------------------------------------------- */
  var modal = $("#modal"), modalBody = $("#modal-body"), lastFocus = null;

  function openModal(r) {
    if (!r) return;
    lastFocus = document.activeElement;

    var gallery = (r.photos && r.photos.length)
      ? '<div class="modal-gallery' + (r.photos.length > 1 ? " multi" : "") + '">' +
          r.photos.map(function (src) {
            var f = r.focus ? ' style="object-position:center ' + esc(r.focus) + '"' : "";
            return '<div class="modal-media"><img' + f + ' src="' + esc(src) + '" alt="' +
              esc(r.name) + '" data-fallback="' + esc(r.name) + '"></div>';
          }).join("") + "</div>"
      : '<div class="modal-gallery"><div class="modal-media">' + placeholderMarkup(r.name) + "</div></div>";

    var facts = "";
    if (r.likes && r.likes.length) {
      facts += '<div class="fact"><h4>Favourite things</h4><ul>' +
        r.likes.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") + "</ul></div>";
    }
    if (r.needs) facts += '<div class="fact"><h4>What they need</h4><p>' + esc(r.needs) + "</p></div>";

    var pairNote = r.bondedWith
      ? '<p class="pair-note">💞 ' + esc(r.name) + " is bonded with " + esc(r.bondedWith) +
        ". They've lived together their whole lives and must be adopted as a pair — we're afraid we can't separate them.</p>"
      : "";

    modalBody.innerHTML = gallery +
      '<div class="modal-content">' +
        '<h2 id="modal-name">' + esc(r.name) + "</h2>" +
        (function () {
          var m = [r.breed, r.age, r.sex, neuterLabel(r)].filter(Boolean).join(" · ");
          return m ? '<p class="modal-meta">' + esc(m) + "</p>" : "";
        })() +
        (r.summary ? '<p class="modal-summary">' + esc(r.summary) + "</p>" : "") +
        pairNote +
        (r.bio ? '<p class="modal-bio">' + esc(r.bio) + "</p>" : "") +
        (facts ? '<div class="modal-facts">' + facts + "</div>" : "") +
        '<button class="btn btn-primary" type="button" data-apply-for="' + esc(r.name) + '">' +
          "Apply to adopt " + esc(r.name) + " 🐇</button>" +
      "</div>";

    wirePhotoFallbacks(modalBody);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $(".modal-close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  modal.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) return closeModal();

    var apply = e.target.closest("[data-apply-for]");
    if (apply) {
      var name = apply.dataset.applyFor;
      closeModal();
      // Tick that rabbit's box, then take them to the form.
      var box = $$('#rabbit-choices input[type=checkbox]').filter(function (b) {
        return b.value === name;
      })[0];
      if (box) { box.checked = true; saveDraft(); }
      $("#apply").scrollIntoView({ behavior: "smooth" });
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---------------------------------------------------------------------
     4. Mobile menu
     --------------------------------------------------------------------- */
  var toggle = $("#nav-toggle"), mobileNav = $("#mobile-nav");
  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
  });
  mobileNav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    }
  });

  /* ---------------------------------------------------------------------
     5. The application form
     --------------------------------------------------------------------- */
  var form = $("#adopt-form");
  var statusBox = $("#form-status");
  var DRAFT_KEY = "bunny-application-draft";

  /* One checkbox per rabbit, built from rabbits.js so the list can never
     fall out of step with the rabbits shown above. */
  function renderRabbitChoices() {
    var box = $("#rabbit-choices");
    box.innerHTML = bunnies.map(function (r) {
      var note = r.bondedWith ? " (pair with " + esc(r.bondedWith) + ")" : "";
      return '<label><input type="checkbox" name="Rabbits of interest" value="' + esc(r.name) + '"> ' +
        esc(r.name) + note + "</label>";
    }).join("") +
      '<label><input type="checkbox" name="Rabbits of interest" value="Not sure yet — open to suggestions"> ' +
      "Not sure yet — help me choose</label>";
  }

  /* -- saving progress, because this form is long ------------------------ */
  function saveDraft() {
    try {
      var data = {};
      $$("input, select, textarea", form).forEach(function (el) {
        if (el.name === "website") return;               // never store the spam trap
        if (el.type === "checkbox" || el.type === "radio") {
          if (el.checked) (data[el.name] = data[el.name] || []).push(el.value);
        } else if (el.value) {
          data[el.name] = el.value;
        }
      });
      if (Object.keys(data).length) {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
        $("#form-saved").hidden = false;
      }
    } catch (err) { /* private browsing, storage full — not worth bothering anyone about */ }
  }

  function restoreDraft() {
    try {
      var raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      $$("input, select, textarea", form).forEach(function (el) {
        var v = data[el.name];
        if (v == null) return;
        if (el.type === "checkbox" || el.type === "radio") {
          if ([].concat(v).indexOf(el.value) !== -1) el.checked = true;
        } else {
          el.value = v;
        }
      });
      $("#form-saved").hidden = false;
    } catch (err) { /* ignore */ }
  }

  function clearDraft() {
    try { localStorage.removeItem(DRAFT_KEY); } catch (err) { /* ignore */ }
    $("#form-saved").hidden = true;
  }

  /* -- validation -------------------------------------------------------- */
  function validate() {
    var firstBad = null;

    $$("[required]", form).forEach(function (el) {
      if (el.type === "radio" || el.type === "checkbox") return;
      var ok = el.value.trim() !== "" &&
               (el.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value));
      el.classList.toggle("invalid", !ok);
      if (!ok && !firstBad) firstBad = el;
    });

    // Radio groups: at least one option chosen.
    var groups = [];
    $$('input[type=radio][required]', form).forEach(function (el) {
      if (groups.indexOf(el.name) === -1) groups.push(el.name);
    });
    groups.forEach(function (name) {
      var set = $$('input[name="' + name + '"]', form);
      if (!set.some(function (el) { return el.checked; }) && !firstBad) firstBad = set[0];
    });

    // At least one rabbit ticked.
    var anyRabbit = $$('#rabbit-choices input').some(function (b) { return b.checked; });
    $("#err-rabbits").hidden = anyRabbit;
    if (!anyRabbit && !firstBad) firstBad = $$('#rabbit-choices input')[0];

    // Consent.
    var consent = $("#f-consent");
    $("#err-consent").hidden = consent.checked;
    if (!consent.checked && !firstBad) firstBad = consent;

    if (firstBad) {
      firstBad.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(function () { firstBad.focus({ preventScroll: true }); }, 320);
      return false;
    }
    return true;
  }

  /* -- gather the answers ------------------------------------------------ */
  function collect() {
    var out = {};
    $$("input, select, textarea", form).forEach(function (el) {
      if (!el.name || el.name === "website") return;
      if (el.type === "checkbox" || el.type === "radio") {
        if (el.checked) out[el.name] = out[el.name] ? out[el.name] + ", " + el.value : el.value;
      } else if (el.value.trim()) {
        out[el.name] = el.value.trim();
      }
    });
    return out;
  }

  function asPlainText(data) {
    return Object.keys(data).map(function (k) { return k + ":\n  " + data[k]; }).join("\n\n");
  }

  /* -- fallback: no forwarding service, so offer the answers to the visitor --
     Deliberately does NOT redirect to mailto: on its own. On a machine where
     email isn't set up, that throws up an unconfigured mail client over the
     page and the application is simply lost. Offer the choice instead, and
     always offer copy-and-paste as a route that works everywhere. */
  function mailtoFallback(data) {
    var c = cfg;
    var text = "Adoption application\n====================\n\n" + asPlainText(data);
    var href = "mailto:" + encodeURIComponent(c.email || "") +
      "?subject=" + encodeURIComponent("Rabbit adoption application — " + (data.Name || "")) +
      "&body=" + encodeURIComponent(text);

    pendingText = text;

    showStatus("ok",
      "<strong>Almost there — one last step 💌</strong>" +
      "<p>Your answers are ready to send to <strong>" + esc(c.email) + "</strong>. " +
      "Please pick whichever is easier:</p>" +
      '<div class="fallback-actions">' +
        '<a class="btn btn-primary" href="' + href.replace(/"/g, "&quot;") + '">Open my email app</a>' +
        '<button type="button" class="btn btn-ghost" id="copy-answers">Copy my answers</button>' +
      "</div>" +
      '<p class="fallback-hint">If your email app doesn\u2019t open, or you use webmail, ' +
      "press <strong>Copy my answers</strong>, then paste them into a new email to " +
      '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>.</p>" +
      '<details class="fallback-details"><summary>Show my answers</summary>' +
        '<textarea id="answers-text" readonly rows="12"></textarea></details>');

    var box = $("#answers-text");
    if (box) box.value = text;

    var copyBtn = $("#copy-answers");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        copyToClipboard(pendingText, copyBtn);
      });
    }
  }

  var pendingText = "";

  /* navigator.clipboard needs a secure context and isn't there on file:// or
     older browsers, so fall back to selecting the text for a manual copy. */
  function copyToClipboard(text, btn) {
    function done(ok) {
      btn.textContent = ok ? "Copied ✓" : "Press Ctrl+C to copy";
      if (!ok) {
        var d = $(".fallback-details");
        if (d) d.open = true;
        var ta = $("#answers-text");
        if (ta) { ta.focus(); ta.select(); }
      }
      setTimeout(function () { btn.textContent = "Copy my answers"; }, 4000);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    } else {
      done(false);
    }
  }

  function showStatus(kind, html) {
    statusBox.className = "form-status " + kind;
    statusBox.innerHTML = html;
    statusBox.hidden = false;
    statusBox.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  form.addEventListener("input", saveDraft);
  form.addEventListener("change", saveDraft);

  $("#clear-btn").addEventListener("click", function () {
    if (!confirm("Clear everything you've written so far?")) return;
    form.reset();
    clearDraft();
    $$(".invalid", form).forEach(function (el) { el.classList.remove("invalid"); });
    statusBox.hidden = true;
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Spam trap — a real person never sees this field, so a filled one is a bot.
    if ($("#f-website").value) return;

    if (!validate()) return;

    var c = cfg;
    var data = collect();
    var btn = $("#submit-btn");

    // No forwarding service configured yet? Use the visitor's email app.
    var delivery = deliveryMethod();
    if (delivery.mode === "mailto") {
      console.warn("[bunnies] Falling back to the visitor's email app \u2014 " + delivery.why);
      return mailtoFallback(data);
    }
    var usingWeb3 = delivery.mode === "web3forms";

    btn.disabled = true;
    btn.textContent = "Sending…";

    var payload = {};
    Object.keys(data).forEach(function (k) { payload[k] = data[k]; });
    payload.subject = "🐇 Rabbit adoption application — " + (data.Name || "someone lovely");
    if (usingWeb3) {
      payload.access_key = c.formAccessKey;
      payload.from_name = data.Name || "Adoption application";
      payload.replyto = data.Email || "";
    } else {
      payload._replyto = data.Email || "";
    }

    fetch(c.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        return res.json().catch(function () { return { success: res.ok }; })
          .then(function (json) { return { ok: res.ok && json.success !== false, json: json }; });
      })
      .then(function (result) {
        if (!result.ok) throw new Error((result.json && result.json.message) || "Submission rejected");
        clearDraft();
        form.reset();
        form.style.display = "none";
        $("#form-saved").hidden = true;
        showStatus("ok",
          "<strong>Thank you — that's sent 🐰</strong>" +
          "<p>We've got your application and we'll read it properly. You'll hear back from us either way, " +
          "usually within a few days.</p>");
      })
      .catch(function (err) {
        console.error(err);
        showStatus("bad",
          "<strong>That didn't go through, sorry.</strong> " +
          "Nothing you did wrong — the sending service didn't respond. " +
          'Please email us directly at <a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a> " +
          "and we'll take it from there. Your answers are still saved on this page.");
      })
      .finally(function () {
        btn.disabled = false;
        btn.textContent = "Send my application 🐇";
      });
  });

  /* ---------------------------------------------------------------------
     Start everything up
     --------------------------------------------------------------------- */
  applyConfig();
  renderRabbits();
  renderFilters();
  renderRabbitChoices();
  restoreDraft();
})();

(function () {
  "use strict";
  var KEY = "gga-state-v1";
  var P = window.PILLARS, B = window.BANDS, S = window.SITE, SRC = window.SOURCES;
  var state = { lean: {}, notes: {} };

  // Nothing is stored. Choices live in this page only and disappear when it is closed or refreshed.
  function load() {}
  function save() {}

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function ic(n, c) { return window.icon(n, c); }

  function optHtml(p, d, o, i) {
    var lean = state.lean[d.id] === i;
    var gl = (window.GROUP_LEANING || {})[d.id] || [];
    var grp = gl.indexOf(o.name) !== -1;
    var ai = (window.AI_PICKS || {})[d.id];
    var aiPick = !!(ai && ai.name === o.name);
    var red = !!(o.flag || o.needsChange);
    var tags = "";
    if (grp) tags += '<span class="tag tag-group">' + ic("users") + "Group is leaning here</span>";
    if (aiPick) tags += '<span class="tag tag-ai">' + ic("info") + "Suggested by Claude (AI)</span>";
    if (o.needsChange) tags += '<span class="tag tag-red">' + ic("x") + "Needs a contract change</span>";
    if (o.flag) tags += '<span class="tag tag-red">' + ic("x") + "Unlikely to meet the contract</span>";
    if (o.current) tags += '<span class="tag tag-current">' + esc(o.current) + "</span>";
    var notes = "";
    if (o.needsChange) notes += '<div class="note note-red"><p>' + esc(o.needsChange) + '</p><p class="note-small">Marked red because the contract is not expected to change during its term.</p></div>';
    if (o.flag) notes += '<div class="note note-red"><p>' + esc(o.flag) + "</p></div>";
    if (aiPick) notes += '<div class="note note-ai"><p><strong>Why Claude suggests this:</strong> ' + esc(ai.why) + "</p></div>";
    return '<div class="opt' + (lean ? " lean" : "") + (red ? " red" : aiPick ? " ai" : grp ? " group" : "") + '">' +
      "<h4>" + esc(o.name) + "</h4>" +
      (tags ? '<div class="tags">' + tags + "</div>" : "") +
      '<p class="looks">' + esc(o.looks) + "</p>" +
      '<ul class="pc pros" aria-label="Pros">' + o.pros.map(function (x) { return "<li>" + ic("check") + "<span>" + esc(x) + "</span></li>"; }).join("") + "</ul>" +
      '<ul class="pc cons" aria-label="Cons">' + o.cons.map(function (x) { return "<li>" + ic("minus") + "<span>" + esc(x) + "</span></li>"; }).join("") + "</ul>" +
      '<p class="best"><strong>Works best when:</strong> ' + esc(o.bestWhen) + "</p>" +
      notes +
      '<button type="button" class="btn lean-btn" data-decision="' + d.id + '" data-opt="' + i + '" aria-pressed="' + lean + '">' + (lean ? ic("check") + "I lean this way" : "Mark that I lean this way") + "</button>" +
      "</div>";
  }

  function detailHtml(p) {
    var h = '<div class="d-top"><div><h3>Why it matters</h3><p>' + esc(p.why) + "</p></div>";
    h += '<div class="side-box">';
    h += "<h4>What the region will look for</h4><p>" + esc(p.region) + "</p>";
    if (S.showContractNotes && p.contract && p.contract.length) {
      h += "<h4>Notes from our draft contract</h4><ul>" + p.contract.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
    }
    h += "</div></div>";
    if (p.related && p.related.length) {
      h += '<div class="related"><h3>Related topics</h3><ul>' + p.related.map(function (r) {
        var t = P.filter(function (x) { return x.id === r.id; })[0];
        return t ? '<li><a href="#' + esc(r.id) + '" data-goto="' + esc(r.id) + '">' + esc(t.title) + "</a>: " + esc(r.text) + "</li>" : "";
      }).join("") + "</ul></div>";
    }
    p.decisions.forEach(function (d) {
      h += '<section class="decision" aria-labelledby="h-' + d.id + '"><h3 id="h-' + d.id + '">' + esc(d.title) + "</h3>" +
        '<p class="d-intro">' + esc(d.intro) + "</p>" +
        '<div class="opts">' + d.options.map(function (o, i) { return optHtml(p, d, o, i); }).join("") + '</div><p class="alt-idea">' + ic("message-circle") + "Have a different idea? Message David and he will add it as an option.</p></section>";
    });
    h += '<div class="cols"><div><h3>Questions for the group</h3><ul>' + p.questions.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
      "<div><h3>Watch out for</h3><ul>" + p.watch.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div></div>";
    h += '<div class="mine">' +
      '<div><label class="lbl" for="n-' + p.id + '">My notes on this topic</label><textarea id="n-' + p.id + '" data-note="' + p.id + '" placeholder="Thoughts, questions, things to ask a lawyer">' + esc(state.notes[p.id] || "") + "</textarea></div>" +
      '<p class="src">Sources: ' + (p.sources || []).map(function (k) { return SRC[k] ? '<a href="' + esc(SRC[k].url) + '" target="_blank" rel="noopener">' + esc(SRC[k].title) + "</a>" : ""; }).filter(Boolean).join("; ") + "</p></div>";
    return h;
  }

  function render() {
    var main = $("#bands");
    main.innerHTML = '<div class="tools"></div>' + B.map(function (b) {
      var items = P.filter(function (p) { return p.band === b.id; });
      return '<section class="band" data-band="' + b.id + '" aria-labelledby="b-' + b.id + '"><div class="band-head"><h2 id="b-' + b.id + '">' + esc(b.name) + "</h2><p>" + esc(b.blurb) + '</p></div><div class="grid">' +
        items.map(function (p) {
          return '<article class="tile' + (p.hot ? " hot" : "") + '" id="' + p.id + '" data-id="' + p.id + '">' +
            '<button type="button" class="tile-btn" aria-expanded="false" aria-controls="d-' + p.id + '">' +
            '<span class="tile-ico">' + ic(p.icon) + "</span>" +
            '<span class="tile-title">' + esc(p.title) + "</span>" +
            '<span class="tile-side"><span class="dot" title="Raised by members" role="img" aria-label="Raised by members"></span>' + ic("chevron-down", "chev") + "</span>" +
            '<span class="tile-q">' + esc(p.question) + "</span></button>" +
            '<div class="detail" id="d-' + p.id + '" hidden></div></article>';
        }).join("") + "</div></section>";
    }).join("");
  }

  function setOpen(tile, open) {
    var btn = $(".tile-btn", tile), det = $(".detail", tile), p = P.filter(function (x) { return x.id === tile.dataset.id; })[0];
    if (open && !det.dataset.built) { det.innerHTML = detailHtml(p); det.dataset.built = "1"; }
    tile.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    det.hidden = !open;
  }

  function refreshDetail(tile) {
    var det = $(".detail", tile), p = P.filter(function (x) { return x.id === tile.dataset.id; })[0];
    det.innerHTML = detailHtml(p);
  }

  function summaryText() {
    var out = [], any = false;
    P.forEach(function (p) {
      var leans = [];
      p.decisions.forEach(function (d) { if (state.lean[d.id] !== undefined) leans.push(d.title + ": " + d.options[state.lean[d.id]].name); });
      var note = (state.notes[p.id] || "").trim();
      if (leans.length || note) {
        any = true;
        out.push({ title: p.title, leans: leans, note: note });
      }
    });
    return any ? out : null;
  }

  function summaryPlain() {
    var s = summaryText();
    if (!s) return "No marks or notes yet.";
    return "My summary: group agreement discussion\n\n" + s.map(function (x) {
      return x.title + "\n" + x.leans.map(function (l) { return "  Leaning: " + l; }).join("\n") + (x.leans.length ? "\n" : "") + (x.note ? "  Notes: " + x.note + "\n" : "");
    }).join("\n");
  }

  function openSummary() {
    var s = summaryText(), body = $("#summary-body");
    body.innerHTML = s ? s.map(function (x) {
      return "<h3>" + esc(x.title) + "</h3>" +
        (x.leans.length ? "<ul>" + x.leans.map(function (l) { return "<li>Leaning: " + esc(l) + "</li>"; }).join("") + "</ul>" : "") +
        (x.note ? "<p>" + esc(x.note).replace(/\n/g, "<br>") + "</p>" : "");
    }).join("") : '<p class="empty">Nothing here yet. Open a topic, mark the options you lean toward, or add notes, and they will show up in this summary.</p>';
    $("#dlg-status").textContent = "";
    var d = $("#summary-dialog");
    if (d.showModal) d.showModal(); else d.setAttribute("open", "");
  }

  function status(msg) { $("#dlg-status").textContent = msg; }

  function init() {
    load();
    if (S.banner) $("#banner").textContent = S.banner;
    if (S.version) {
      var vt = "Version " + S.version + (S.updated ? ", updated " + S.updated : "");
      $$(".version-line").forEach(function (el) { el.textContent = vt; });
    }
    $("#changelog").innerHTML = (window.CHANGELOG || []).map(function (c) {
      return "<li><strong>Version " + esc(c.version) + "</strong> <span class=\"cl-date\">" + esc(c.date) + "</span><ul>" + c.changes.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></li>";
    }).join("");
    render();

    $$(".how-ico[data-icon]").forEach(function (el) { el.innerHTML = ic(el.dataset.icon); });
    $("#open-summary").innerHTML = ic("file-text") + "See my summary";
    $("#toggle-all").innerHTML = ic("expand") + "Expand all topics";
    $("#copy-summary").innerHTML = ic("copy") + "Copy as text";
    $("#print-summary").innerHTML = ic("printer") + "Print the full page";
    $("#close-summary").innerHTML = ic("x");

    $("#hk-list").innerHTML = (window.HOUSEKEEPING || []).map(function (h) { return "<li><h3>" + esc(h.title) + "</h3><p>" + esc(h.text) + "</p></li>"; }).join("");
    $("#steps").innerHTML = (window.PROCESS || []).map(function (h) { return "<li><h3>" + esc(h.title) + "</h3><p>" + esc(h.text) + "</p></li>"; }).join("");
    $("#source-list").innerHTML = Object.keys(SRC).map(function (k) { return '<li><a href="' + esc(SRC[k].url) + '" target="_blank" rel="noopener">' + esc(SRC[k].title) + "</a></li>"; }).join("");

    var main = $("#bands");
    main.addEventListener("click", function (e) {
      var t = e.target.closest(".tile-btn");
      if (t) {
        var tile = t.closest(".tile"), open = !tile.classList.contains("open");
        setOpen(tile, open);
        try { history.replaceState(null, "", open ? "#" + tile.id : location.pathname + location.search); } catch (x) {}
        if (open) tile.scrollIntoView({ block: "nearest" });
        return;
      }
      var gt = e.target.closest("[data-goto]");
      if (gt) {
        e.preventDefault();
        var dest = document.getElementById(gt.dataset.goto);
        if (dest) { setOpen(dest, true); try { history.replaceState(null, "", "#" + dest.id); } catch (x) {} dest.scrollIntoView({ block: "start" }); }
        return;
      }
      var lb = e.target.closest(".lean-btn");
      if (lb) {
        var did = lb.dataset.decision, i = +lb.dataset.opt;
        if (state.lean[did] === i) delete state.lean[did]; else state.lean[did] = i;
        save();
        var tile2 = lb.closest(".tile"), y = lb.getBoundingClientRect().top;
        refreshDetail(tile2);
        var nb = $('.lean-btn[data-decision="' + did + '"][data-opt="' + i + '"]', tile2);
        if (nb) { nb.focus({ preventScroll: true }); window.scrollBy(0, nb.getBoundingClientRect().top - y); }
      }
    });
    main.addEventListener("input", function (e) {
      var n = e.target.closest("[data-note]");
      if (n) { state.notes[n.dataset.note] = n.value; save(); }
    });

    $("#toggle-all").addEventListener("click", function () {
      var btn = this, expand = btn.getAttribute("aria-pressed") !== "true";
      $$(".tile").forEach(function (t) { setOpen(t, expand); });
      btn.setAttribute("aria-pressed", expand ? "true" : "false");
      btn.innerHTML = ic(expand ? "shrink" : "expand") + (expand ? "Collapse all topics" : "Expand all topics");
    });

    $("#open-summary").addEventListener("click", openSummary);
    $("#copy-summary").addEventListener("click", function () {
      var txt = summaryPlain();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { status("Copied."); }, function () { status("Could not copy. Select the text and copy it by hand."); });
      } else status("Could not copy. Select the text and copy it by hand.");
    });
    $("#print-summary").addEventListener("click", function () {
      $$(".tile").forEach(function (t) { setOpen(t, true); });
      var dlg = $("#summary-dialog"); if (dlg.close) dlg.close();
      setTimeout(function () { window.print(); }, 50);
    });
    var armed = false, clr = $("#clear-all");
    clr.addEventListener("click", function () {
      if (!armed) { armed = true; clr.textContent = "Click again to confirm"; status("This removes all your marks and notes from this browser."); return; }
      state = { lean: {}, notes: {} }; armed = false;
      clr.textContent = "Clear my marks and notes";
      render(); openSummary(); status("Cleared.");
    });
    $("#summary-dialog").addEventListener("close", function () { armed = false; clr.textContent = "Clear my marks and notes"; });

    function fromHash() {
      var id = location.hash.slice(1), tile = id && document.getElementById(id);
      if (tile && tile.classList.contains("tile")) { setOpen(tile, true); tile.scrollIntoView({ block: "start" }); }
    }
    window.addEventListener("hashchange", fromHash);
    fromHash();
  }

  document.addEventListener("DOMContentLoaded", init);
})();

// Simple RNG
function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

/*
  SECTION IMAGES
*/
const sectionImages = {
  inside_run_1: "images/inside_run_1.png",
  draw_play_1: "images/draw_play_1.png",
  outside_run_1: "images/outside_run_1.png",
  draw_play_2: "images/draw_play_2.png",
  outside_run_2: "images/outside_run_2.png",
  inside_run_2: "images/inside_run_2.png",
  draw_play_3: "images/draw_play_3.png",
  outside_run_3: "images/outside_run_3.png",
  inside_run_3: "images/inside_run_3.png",
  draw_play_4: "images/draw_play_4.png",
  outside_run_4: "images/outside_run_4.png",
  inside_run_4: "images/inside_run_4.png",
  outside_run_5: "images/outside_run_5.png",
  short_pass_1: "images/short_pass_1.png",
  draw_play_5: "images/draw_play_5.png",
  short_pass_2: "images/short_pass_2.png",
  screen_pass_1: "images/screen_pass_1.png",
  medium_pass_1: "images/medium_pass_1.png",
  long_pass_1: "images/long_pass_1.png",
  short_pass_3: "images/short_pass_3.png",
  screen_pass_2: "images/screen_pass_2.png",
  medium_pass_2: "images/medium_pass_2.png",
  long_pass_2: "images/long_pass_2.png",
  short_pass_4: "images/short_pass_4.png",
  medium_pass_3: "images/medium_pass_3.png",
  long_pass_3: "images/long_pass_3.png",
  medium_pass_4: "images/medium_pass_4.png",
  short_pass_5: "images/short_pass_5.png",
  long_pass_4: "images/long_pass_4.png",
  medium_pass_5: "images/medium_pass_5.png",
  long_pass_5: "images/long_pass_5.png",
  medium_pass_6: "images/medium_pass_6.png",
  long_pass_6: "images/long_pass_6.png",
  medium_pass_7: "images/medium_pass_7.png"
};

/*
  RESULT TO SECTION MAP
  Ranges up to 184 for use with modifiers.
*/
const resultToSection = {};

// Inside Run 1: 1-18
for (let n = 1; n <= 18; n++) resultToSection[n] = "inside_run_1";

// Draw Play 1: 19-21
for (let n = 19; n <= 21; n++) resultToSection[n] = "draw_play_1";

// Outside Run 1: 22-26
for (let n = 22; n <= 26; n++) resultToSection[n] = "outside_run_1";

// Draw Play 2: 27-31
for (let n = 27; n <= 31; n++) resultToSection[n] = "draw_play_2";

// Outside Run 2: 32-33
for (let n = 32; n <= 33; n++) resultToSection[n] = "outside_run_2";

// Inside Run 2: 34-44
for (let n = 34; n <= 44; n++) resultToSection[n] = "inside_run_2";

// Draw Play 3: 45-46
for (let n = 45; n <= 46; n++) resultToSection[n] = "draw_play_3";

// Outside Run 3: 47-49
for (let n = 47; n <= 49; n++) resultToSection[n] = "outside_run_3";

// Inside Run 3: 50-52
for (let n = 50; n <= 52; n++) resultToSection[n] = "inside_run_3";

// Draw Play 4: 53-56
for (let n = 53; n <= 56; n++) resultToSection[n] = "draw_play_4";

// Outside Run 4: 57-63
for (let n = 57; n <= 63; n++) resultToSection[n] = "outside_run_4";

// Inside Run 4: 64-68
for (let n = 64; n <= 68; n++) resultToSection[n] = "inside_run_4";

// Outside Run 5: 69-73
for (let n = 69; n <= 73; n++) resultToSection[n] = "outside_run_5";

// Short Pass 1: 74-80
for (let n = 74; n <= 80; n++) resultToSection[n] = "short_pass_1";

// Draw Play 5: 81-83
for (let n = 81; n <= 83; n++) resultToSection[n] = "draw_play_5";

// Short Pass 2: 84-87
for (let n = 84; n <= 87; n++) resultToSection[n] = "short_pass_2";

// Screen Pass 1: 88-92
for (let n = 88; n <= 92; n++) resultToSection[n] = "screen_pass_1";

// Medium Pass 1: 93-97
for (let n = 93; n <= 97; n++) resultToSection[n] = "medium_pass_1";

// Long Pass 1: 98-100
for (let n = 98; n <= 100; n++) resultToSection[n] = "long_pass_1";

// Short Pass 3: 101-103
for (let n = 101; n <= 103; n++) resultToSection[n] = "short_pass_3";

// Screen Pass 2: 104-106
for (let n = 104; n <= 106; n++) resultToSection[n] = "screen_pass_2";

// Medium Pass 2: 107-111
for (let n = 107; n <= 111; n++) resultToSection[n] = "medium_pass_2";

// Long Pass 2: 112-113
for (let n = 112; n <= 113; n++) resultToSection[n] = "long_pass_2";

// Short Pass 4: 114-121
for (let n = 114; n <= 121; n++) resultToSection[n] = "short_pass_4";

// Medium Pass 3: 123-125 (122 intentionally unmapped)
for (let n = 123; n <= 125; n++) resultToSection[n] = "medium_pass_3";

// Long Pass 3: 126-128
for (let n = 126; n <= 128; n++) resultToSection[n] = "long_pass_3";

// Medium Pass 4: 129-132
for (let n = 129; n <= 132; n++) resultToSection[n] = "medium_pass_4";

// Short Pass 5: 133-134
for (let n = 133; n <= 134; n++) resultToSection[n] = "short_pass_5";

// Long Pass 4: 135-137
for (let n = 135; n <= 137; n++) resultToSection[n] = "long_pass_4";

// Medium Pass 5: 138-140
for (let n = 138; n <= 140; n++) resultToSection[n] = "medium_pass_5";

// Long Pass 5: 141-160
for (let n = 141; n <= 160; n++) resultToSection[n] = "long_pass_5";

// Medium Pass 6: 161-167
for (let n = 161; n <= 167; n++) resultToSection[n] = "medium_pass_6";

// Long Pass 6: 168-171
for (let n = 168; n <= 171; n++) resultToSection[n] = "long_pass_6";

// Medium Pass 7: 172-184
for (let n = 172; n <= 184; n++) resultToSection[n] = "medium_pass_7";

/*
  Show a section image by section ID.
*/
function showSectionImage(sectionId) {
  const wrapper = document.getElementById("sectionImageWrapper");
  const img = document.getElementById("sectionImage");
  const noMsg = document.getElementById("noSectionMessage");

  if (!wrapper || !img || !noMsg) {
    console.error("Section image elements missing in HTML.");
    return;
  }

  if (!sectionId || !sectionImages[sectionId]) {
    wrapper.classList.add("section-image-wrapper--hidden");
    img.removeAttribute("src");
    noMsg.textContent = "No section is selected yet.";
    return;
  }

  const src = sectionImages[sectionId];

  img.onload = function () {
    wrapper.classList.remove("section-image-wrapper--hidden");
    noMsg.textContent = "";
  };

  img.onerror = function () {
    wrapper.classList.add("section-image-wrapper--hidden");
    img.removeAttribute("src");
    noMsg.textContent = "Could not load " + src + ". Check the file name and images folder.";
    console.error("Image failed to load:", src);
  };

  img.src = src;
}

/*
  Perform the main roll and update the UI.
*/
function doRoll() {
  // 2d6 for tens
  const d6a = rollDie(6);
  const d6b = rollDie(6);
  const twoD6 = d6a + d6b;

  // Main d10 for ones
  const mainD10 = rollDie(10);

  // Extra rolls not used in mapping
  const extraD10 = rollDie(10);
  const d20 = rollDie(20);

  const baseTotal = twoD6 * 10 + mainD10;

  // DOM elements
  const twoD6Display = document.getElementById("twoD6Display");
  const mainD10Display = document.getElementById("mainD10Display");
  const mainTotal = document.getElementById("mainTotal");
  const extraD10Span = document.getElementById("extraD10");
  const d20Span = document.getElementById("d20");
  const chartDescription = document.getElementById("chartDescription");
  const modifierInput = document.getElementById("manualModifier");
  const modRadios = document.querySelectorAll('input[name="modType"]');

  if (
    !twoD6Display ||
    !mainD10Display ||
    !mainTotal ||
    !extraD10Span ||
    !d20Span ||
    !chartDescription
  ) {
    console.error("One or more result elements missing in HTML.");
    return;
  }

  // Update basic roll display
  twoD6Display.textContent = `${d6a} + ${d6b} = ${twoD6}`;
  mainD10Display.textContent = mainD10;
  extraD10Span.textContent = extraD10;
  d20Span.textContent = d20;

  // Read modifier controls
  let modType = "none";
  if (modRadios && modRadios.length) {
    modRadios.forEach(radio => {
      if (radio.checked) modType = radio.value;
    });
  }

  let modValue = 0;
  if (modifierInput) {
    const raw = parseInt(modifierInput.value, 10);
    if (!isNaN(raw)) {
      modValue = raw;
    }
  }

  let finalTotal = baseTotal;
  if (modType === "add") {
    finalTotal = baseTotal + modValue;
  } else if (modType === "sub") {
    finalTotal = baseTotal - modValue;
  }

  mainTotal.textContent = finalTotal;

  const sectionId = resultToSection[finalTotal];

  if (sectionId && sectionImages[sectionId]) {
    let modText = "";
    if (modType === "add" && modValue !== 0) {
      modText = ` (base ${baseTotal} plus ${modValue})`;
    } else if (modType === "sub" && modValue !== 0) {
      modText = ` (base ${baseTotal} minus ${modValue})`;
    } else {
      modText = ` (base ${baseTotal}, no modifier)`;
    }

    const coverageNote =
      finalTotal === 122
        ? "122 is not mapped yet."
        : "Mappings currently cover 1 to 184 except 122.";

    chartDescription.textContent =
      `Result ${finalTotal}${modText} maps to section "${sectionId}". ${coverageNote}`;
  } else {
    chartDescription.textContent =
      `Result ${finalTotal} is not mapped yet. Mappings currently cover 1 to 184 except 122.`;
  }

  // Show image if there is a section for this total
  showSectionImage(sectionId);
}

/*
  Setup on DOM ready
*/
document.addEventListener("DOMContentLoaded", function () {
  const rollButton = document.getElementById("rollButton");
  const previewSelect = document.getElementById("sectionPreview");

  const pressureButton = document.getElementById("showPressureButton");
  const pressureOverlay = document.getElementById("pressureOverlay");
  const pressureClose = document.getElementById("pressureClose");

  const kickoffButton = document.getElementById("showKickoffButton");
  const kickoffOverlay = document.getElementById("kickoffOverlay");
  const kickoffClose = document.getElementById("kickoffClose");

  const fieldGoalButton = document.getElementById("showFieldGoalButton");
  const fieldGoalOverlay = document.getElementById("fieldGoalOverlay");
  const fieldGoalClose = document.getElementById("fieldGoalClose");

  const puntButton = document.getElementById("showPuntButton");
  const puntOverlay = document.getElementById("puntOverlay");
  const puntClose = document.getElementById("puntClose");

  const poochButton = document.getElementById("showPoochButton");
  const poochOverlay = document.getElementById("poochOverlay");
  const poochClose = document.getElementById("poochClose");

  const breakawayButton = document.getElementById("showBreakawayButton");
  const breakawayOverlay = document.getElementById("breakawayOverlay");
  const breakawayClose = document.getElementById("breakawayClose");

  const puntReturnButton = document.getElementById("showPuntReturnButton");
  const puntReturnOverlay = document.getElementById("puntReturnOverlay");
  const puntReturnClose = document.getElementById("puntReturnClose");

  const fumbleButton = document.getElementById("showFumbleButton");
  const fumbleOverlay = document.getElementById("fumbleOverlay");
  const fumbleClose = document.getElementById("fumbleClose");

  const intReturnButton = document.getElementById("showIntReturnButton");
  const intReturnOverlay = document.getElementById("intReturnOverlay");
  const intReturnClose = document.getElementById("intReturnClose");

  if (rollButton) {
    rollButton.addEventListener("click", function () {
      rollButton.classList.add("rolling");
      setTimeout(() => {
        rollButton.classList.remove("rolling");
      }, 120);

      doRoll();
    });
  }

  if (previewSelect) {
    previewSelect.addEventListener("change", function () {
      const value = previewSelect.value || "";
      if (value) {
        showSectionImage(value);
      } else {
        showSectionImage(null);
      }
    });
  }

  // helper so button toggles overlay open or close
  function wireOverlay(button, overlay, closeBtn) {
    if (!button || !overlay || !closeBtn) return;

    button.addEventListener("click", function () {
      if (overlay.classList.contains("open")) {
        overlay.classList.remove("open");
      } else {
        overlay.classList.add("open");
      }
    });

    closeBtn.addEventListener("click", function () {
      overlay.classList.remove("open");
    });

    overlay.addEventListener("click", function (evt) {
      if (evt.target === overlay) {
        overlay.classList.remove("open");
      }
    });
  }

  wireOverlay(pressureButton, pressureOverlay, pressureClose);
  wireOverlay(kickoffButton, kickoffOverlay, kickoffClose);
  wireOverlay(fieldGoalButton, fieldGoalOverlay, fieldGoalClose);
  wireOverlay(puntButton, puntOverlay, puntClose);
  wireOverlay(poochButton, poochOverlay, poochClose);
  wireOverlay(breakawayButton, breakawayOverlay, breakawayClose);
  wireOverlay(puntReturnButton, puntReturnOverlay, puntReturnClose);
  wireOverlay(fumbleButton, fumbleOverlay, fumbleClose);
  wireOverlay(intReturnButton, intReturnOverlay, intReturnClose);

  // Start with no section image
  showSectionImage(null);
});

















// Simple RNG
function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

/*
  SECTION IMAGES

  Images folder is "images" in your project.

  Expected files:
    images/inside_run_1.png
    images/draw_play_1.png
    images/outside_run_1.png
    images/draw_play_2.png
    images/outside_run_2.png
    images/inside_run_2.png
    images/draw_play_3.png
    images/outside_run_3.png
    images/inside_run_3.png
    images/draw_play_4.png
    images/outside_run_4.png
    images/inside_run_4.png
    images/outside_run_5.png
    images/short_pass_1.png
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
  short_pass_1: "images/short_pass_1.png"
};

/*
  RESULT TO SECTION MAP

  Mapping from main total (from (1d6 + 1d6) * 10 + 1d10) to chart section.

  So far:

  Inside Run 1:   1-18
  Draw Play 1:    19-21
  Outside Run 1:  22-26
  Draw Play 2:    27-31
  Outside Run 2:  32-33
  Inside Run 2:   34-44
  Draw Play 3:    45-46
  Outside Run 3:  47-49
  Inside Run 3:   50-52
  Draw Play 4:    53-56
  Outside Run 4:  57-63
  Inside Run 4:   64-68
  Outside Run 5:  69-73
  Short Pass 1:   74-80
*/
const resultToSection = {};

// Inside Run 1: 1-18
for (let n = 1; n <= 18; n++) {
  resultToSection[n] = "inside_run_1";
}

// Draw Play 1: 19-21
for (let n = 19; n <= 21; n++) {
  resultToSection[n] = "draw_play_1";
}

// Outside Run 1: 22-26
for (let n = 22; n <= 26; n++) {
  resultToSection[n] = "outside_run_1";
}

// Draw Play 2: 27-31
for (let n = 27; n <= 31; n++) {
  resultToSection[n] = "draw_play_2";
}

// Outside Run 2: 32-33
for (let n = 32; n <= 33; n++) {
  resultToSection[n] = "outside_run_2";
}

// Inside Run 2: 34-44
for (let n = 34; n <= 44; n++) {
  resultToSection[n] = "inside_run_2";
}

// Draw Play 3: 45-46
for (let n = 45; n <= 46; n++) {
  resultToSection[n] = "draw_play_3";
}

// Outside Run 3: 47-49
for (let n = 47; n <= 49; n++) {
  resultToSection[n] = "outside_run_3";
}

// Inside Run 3: 50-52
for (let n = 50; n <= 52; n++) {
  resultToSection[n] = "inside_run_3";
}

// Draw Play 4: 53-56
for (let n = 53; n <= 56; n++) {
  resultToSection[n] = "draw_play_4";
}

// Outside Run 4: 57-63
for (let n = 57; n <= 63; n++) {
  resultToSection[n] = "outside_run_4";
}

// Inside Run 4: 64-68
for (let n = 64; n <= 68; n++) {
  resultToSection[n] = "inside_run_4";
}

// Outside Run 5: 69-73
for (let n = 69; n <= 73; n++) {
  resultToSection[n] = "outside_run_5";
}

// Short Pass 1: 74-80
for (let n = 74; n <= 80; n++) {
  resultToSection[n] = "short_pass_1";
}

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

  // Main d10 for ones (1-10)
  const mainD10 = rollDie(10);

  // Extra rolls not used in main total
  const extraD10 = rollDie(10);
  const d20 = rollDie(20);

  const total = twoD6 * 10 + mainD10; // (1d6 + 1d6) * 10 + 1d10

  // DOM elements
  const twoD6Display = document.getElementById("twoD6Display");
  const mainD10Display = document.getElementById("mainD10Display");
  const mainTotal = document.getElementById("mainTotal");
  const extraD10Span = document.getElementById("extraD10");
  const d20Span = document.getElementById("d20");
  const chartDescription = document.getElementById("chartDescription");

  if (!twoD6Display || !mainD10Display || !mainTotal || !extraD10Span || !d20Span || !chartDescription) {
    console.error("One or more result elements missing in HTML.");
    return;
  }

  // Update text fields
  twoD6Display.textContent = `${d6a} + ${d6b} = ${twoD6}`;
  mainD10Display.textContent = mainD10;
  mainTotal.textContent = total;
  extraD10Span.textContent = extraD10;
  d20Span.textContent = d20;

  const sectionId = resultToSection[total];

  if (sectionId && sectionImages[sectionId]) {
    chartDescription.textContent = `Result ${total} maps to section "${sectionId}".`;
  } else {
    chartDescription.textContent =
      `Result ${total} is not mapped yet. Current mappings cover 1-80.`;
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

  if (!rollButton) {
    console.error("Roll button not found.");
    return;
  }

  rollButton.addEventListener("click", function () {
    rollButton.classList.add("rolling");
    setTimeout(() => {
      rollButton.classList.remove("rolling");
    }, 120);

    doRoll();
  });

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

  // Start with no image shown
  showSectionImage(null);
});








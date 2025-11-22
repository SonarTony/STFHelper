// Full main-chart lookup from STF One Roll card
// min/max are inclusive. null = open ended on that side.
const STF_RESULTS = [
  { min: null, max: 4, label: "< 5", desc: "Inside Run OL Power 2 + U * E1 *" },
  { min: 5, max: 13, label: "5-13", desc: "QB Rush 1 + U - 1" },
  { min: 14, max: 15, label: "14-15", desc: "RB1 Power 1 + U - 1" },
  { min: 16, max: 18, label: "16-18", desc: "S1 Tackle E- 1 * E7 *" },
  { min: 19, max: 19, label: "19", desc: "Draw Play LB4 Tackle E4 * EB! *" },
  { min: 20, max: 21, label: "20-21", desc: "DL3 Tackle E1 * E11 *" },
  { min: 22, max: 23, label: "22-23", desc: "Outside Run LB1 Tackle E- 3 * E5 *" },
  { min: 24, max: 24, label: "24", desc: "LB3 Tackle E1 * E7 *" },
  { min: 25, max: 25, label: "25", desc: "S2 Tackle E3 * E13 *." },
  { min: 26, max: 26, label: "26", desc: "OL Rush E5 * E0 *" },
  { min: 27, max: 29, label: "27-29", desc: "Draw Play QB Rush 3 + U - 2" },
  { min: 30, max: 30, label: "30", desc: "RB4 Rush 4 + U - 1" },
  { min: 31, max: 31, label: "31", desc: "LB2 Strip EFF 5 * E9 *" },
  { min: 32, max: 32, label: "32", desc: "Outside Run LB1 Strip EFF 2 * E4 *" },
  { min: 33, max: 33, label: "33", desc: "LB2 Tackle E2 * E 6 *." },
  { min: 34, max: 36, label: "34-36", desc: "Inside Run OL Power E4 * E0 *" },
  { min: 37, max: 37, label: "37", desc: "RB2 Power 3 + U 1" },
  { min: 38, max: 38, label: "38", desc: "RB3 Power 5 + U - 1" },
  { min: 39, max: 39, label: "39", desc: "LB3 Tackle E3 * E11 *" },
  { min: 40, max: 41, label: "40-41", desc: "5 (Red Zone = 0) *" },
  { min: 42, max: 42, label: "42", desc: "OL Rush EB! * . E3 *" },
  { min: 43, max: 44, label: "43-44", desc: "RB1 Power 2 + U 0" },
  { min: 45, max: 45, label: "45", desc: "Draw Play RB2 Rush 3 + U - 1" },
  { min: 46, max: 46, label: "46", desc: "LB2 Tackle E3 * E12 *." },
  { min: 47, max: 47, label: "47", desc: "Outside Run DL1 Tackle E2 * B! *." },
  { min: 48, max: 49, label: "48-49", desc: "LB4 Tackle E1 * E 7 * ." },
  { min: 50, max: 50, label: "50", desc: "Inside Run Home = 8 * / Away = 0 *" },
  { min: 51, max: 52, label: "51-52", desc: "OL Rush Eaa8 * . E2 *" },
  { min: 53, max: 54, label: "53-54", desc: "Draw Play DL2 Tackle E- 3 * 7 *" },
  { min: 55, max: 55, label: "55", desc: "S1 Tackle E2 * E10 *" },
  { min: 56, max: 56, label: "56", desc: "LB1 Tackle E- 4 * E4 *" },
  { min: 57, max: 57, label: "57", desc: "Outside Run DL3 Tackle E1 * B! * ." },
  { min: 58, max: 59, label: "58-59", desc: "DL4 Tackle E0 * 6 * ." },
  { min: 60, max: 61, label: "60-61", desc: "6 (Red Zone = - 1) *" },
  { min: 62, max: 62, label: "62", desc: "RB3 Rush 3 + U 2" },
  { min: 63, max: 63, label: "63", desc: "LB3 Tackle E3 * 10 * ." },
  { min: 64, max: 64, label: "64", desc: "Inside Run RB1 Rush 2 + U 1" },
  { min: 65, max: 65, label: "65", desc: "LB1 Tackle E2 * E B! * ." },
  { min: 66, max: 66, label: "66", desc: "DL3 Tackle E- 1 * E6 *" },
  { min: 67, max: 68, label: "67-68", desc: "DL1 Tackle E- 2 * E4 *" },
  { min: 69, max: 69, label: "69", desc: "Outside Run DL2 Tackle E1 * B! * ." },
  { min: 70, max: 70, label: "70", desc: "LB2 Tackle E3 * B! * ." },
  { min: 71, max: 72, label: "71-72", desc: "OL Rush 9 * . E3 *" },
  { min: 73, max: 73, label: "73", desc: "False Start (Off 5)" },
  { min: 74, max: 76, label: "74-76", desc: "Short Pass QB Accy. E4 + UC. INC." },
  { min: 77, max: 77, label: "77", desc: "TE1 Rec. . 7 + U . INC." },
  { min: 78, max: 78, label: "78", desc: "CB2 Cover INC. . 14 C ." },
  { min: 79, max: 79, label: "79", desc: "7 C (Red Zone = Pressure )" },
  { min: 80, max: 80, label: "80", desc: "CB1 Cover INC. B! C ." },
  { min: 81, max: 82, label: "81-82", desc: "Draw Play RB1 Rush 6 + U - 2" },
  { min: 83, max: 83, label: "83", desc: "RB2 Rush 5 + U 0" },
  { min: 84, max: 84, label: "84", desc: "Short Pass WR2 Rec. . 7 + U . INC." },
  { min: 85, max: 85, label: "85", desc: "QB Ctrl INC. INT 7" },
  { min: 86, max: 87, label: "86-87", desc: "OL Protect 8 C . Pressure" },
  { min: 88, max: 88, label: "88", desc: "Screen Pass OL Pass 9 C . - 1 C" },
  { min: 89, max: 89, label: "89", desc: "E 5 C (Red Zone = INC. )" },
  { min: 90, max: 90, label: "90", desc: "WR1 Rec. . 6 + U . INC." },
  { min: 91, max: 91, label: "91", desc: "RB1 Rec. 4 + U INC." },
  { min: 92, max: 92, label: "92", desc: "CB1 Tackle E- 2 C . 8 C ." },
  { min: 93, max: 93, label: "93", desc: "Medium Pass LB3 Cover INC. 10 P" },
  { min: 94, max: 96, label: "94-96", desc: "OL Protect 12 P Pressure" },
  { min: 97, max: 97, label: "97", desc: "LB2 Cover INC. . 13 P ." },
  { min: 98, max: 98, label: "98", desc: "Long Pass S1 Cover INC. . 20 + B! P ." },
  { min: 99, max: 99, label: "99", desc: "S2 Cover INC. . 20 + B! P ." },
  { min: 100, max: 100, label: "100", desc: "QB Deep . 22 P . INC." },
  { min: 101, max: 101, label: "101", desc: "Short Pass DL1 Sack SK 6 . 9 C ." },
  { min: 102, max: 103, label: "102-3", desc: "QB Accy. 7 C . INC." },
  { min: 104, max: 104, label: "104", desc: "Screen Pass S1 Tackle E6 C .B! C ." },
  { min: 105, max: 105, label: "105", desc: "S2 Tackle E5 C . 15 C ." },
  { min: 106, max: 106, label: "106", desc: "CB2 Tackle E- 3 C . 11 C ." },
  { min: 107, max: 107, label: "107", desc: "Medium Pass OL Protect INC. Pressure" },
  { min: 108, max: 109, label: "108-9", desc: "E13 P (Red Zone = Pressure )" },
  { min: 110, max: 110, label: "110", desc: "WR1 Deep 17 INC." },
  { min: 111, max: 111, label: "111", desc: "DL3 Sack SK 9 INC." },
  { min: 112, max: 112, label: "112", desc: "Long Pass LB1 Sack SK 8 INC." },
  { min: 113, max: 113, label: "113", desc: "LB4 Cover INC. . 19 P ." },
  { min: 114, max: 114, label: "114", desc: "Short Pass TE2 Rec. . 7 + U . INC." },
  { min: 115, max: 115, label: "115", desc: "WR3 Rec. . 8 + U . INC." },
  { min: 116, max: 116, label: "116", desc: "WR1 Rec. . 9 + U . INC." },
  { min: 117, max: 117, label: "117", desc: "LB1 Cover INC. . 7 C ." },
  { min: 118, max: 118, label: "118", desc: "WR2 Rec. . 8 + U . INC." },
  { min: 119, max: 119, label: "119", desc: "WR4 Rec. . 9 + U . INC." },
  { min: 120, max: 120, label: "120", desc: "E 10 P (Red Zone = 0 )" },
  { min: 121, max: 121, label: "121", desc: "Home = 9 C / Away = Pressure" },
  { min: 122, max: 122, label: "122", desc: "Medium Pass TE1 Deep 18 INC." },
  { min: 123, max: 123, label: "123", desc: "CB1 Int INT 12 INC." },
  { min: 124, max: 124, label: "124", desc: "WR1 Rec. .13 + U . INC." },
  { min: 125, max: 125, label: "125", desc: "LB2 Sack SK 6 14 P" },
  { min: 126, max: 126, label: "126", desc: "Long Pass WR2 Deep 31 INC." },
  { min: 127, max: 127, label: "127", desc: "DL4 Sack SK 10 INC." },
  { min: 128, max: 128, label: "128", desc: "QB Ctrl INC. INT 20" },
  { min: 129, max: 129, label: "129", desc: "Medium Pass 16 P (Red Zone = Pressure )" },
  { min: 130, max: 131, label: "130-1", desc: "DL2 Sack SK 7 E18 P ." },
  { min: 132, max: 132, label: "132", desc: "TE2 Deep 16 INC." },
  { min: 133, max: 133, label: "133", desc: "Short Pass RB4 Rec. . 4 + U . INC." },
  { min: 134, max: 134, label: "134", desc: "WR4 Rec. . 8 + U . INC." },
  { min: 135, max: 135, label: "135", desc: "Long Pass WR3 Deep 33 INC." },
  { min: 136, max: 136, label: "136", desc: "QB Rush 9 SK 3 ." },
  { min: 137, max: 137, label: "137", desc: "S2 Cover INC. . 20 + B! P ." },
  { min: 138, max: 138, label: "138", desc: "Medium Pass CB2 Int INT 10 INC." },
  { min: 139, max: 139, label: "139", desc: "Home = 15 P / Away = Pressure" },
  { min: 140, max: 140, label: "140", desc: "PASS INTERFERENCE (DEF 12+U)" },
  { min: 141, max: 141, label: "141", desc: "Long Pass WR4 Deep 30 INC." },
  { min: 142, max: 142, label: "142", desc: "QB Deep 34 P INC." },
  { min: 143, max: 143, label: "143", desc: "QB Evade INC. SK 9" },
  { min: 144, max: 144, label: "144", desc: "CB2 Int INT 22 INC." },
  { min: 145, max: 145, label: "145", desc: "S1 Sack SK 8 INC." },
  { min: 146, max: 147, label: "146-7", desc: "CB1 Cover INC. 20 P" },
  { min: 148, max: 148, label: "148", desc: "LB3 Int INT 17 INC." },
  { min: 149, max: 149, label: "149", desc: "S2 Int INT 27 INC." },
  { min: 150, max: 150, label: "150", desc: "PASS INTERFERENCE (DEF 22+U)" },
  { min: 151, max: 152, label: "151-2", desc: "CB2 Cover INC. . 10 + B! P ." },
  { min: 153, max: 154, label: "153-4", desc: "QB Deep 20 + B! P INC." },
  { min: 155, max: 155, label: "155", desc: "QB Ctrl INC. INT 35" },
  { min: 156, max: 156, label: "156", desc: "OL Protect . 20 + U . Pressure" },
  { min: 157, max: 157, label: "157", desc: "LB2 Cover INC. 18 P" },
  { min: 158, max: 159, label: "158-9", desc: "S1 Cover INC. . 20 + B! P ." },
  { min: 160, max: 160, label: "160", desc: "PASS INTERFERENCE (DEF 32+U)" },
  { min: 161, max: 161, label: "161", desc: "Medium Pass WR4 Rec. .13 + U . INC." },
  { min: 162, max: 163, label: "162-3", desc: "S1 Int INT 16 INC." },
  { min: 164, max: 164, label: "164", desc: "CB2 Cover INC. 21 P" },
  { min: 165, max: 166, label: "165-6", desc: "LB3 Sack SK 6 INC." },
  { min: 167, max: 167, label: "167", desc: "LB4 Sack SK 7 INC." },
  { min: 168, max: 168, label: "168", desc: "Long Pass CB1 Cover INC. 27 P" },
  { min: 169, max: 169, label: "169", desc: "CB2 Cover INC. 28 P" },
  { min: 170, max: 170, label: "170", desc: "Home = INC. / Away = INT 40" },
  { min: 171, max: 171, label: "171", desc: "WR1 Deep 35 INC." },
  { min: 172, max: 176, label: "172-6", desc: "Medium Pass QB Ctrl . B! P . INT 3" },
  { min: 177, max: 179, label: "177-9", desc: "Home = 16 P / Away = Pressure" },
  { min: 180, max: 183, label: "180-3", desc: "LB2 Int INT 14 INC." }
];

// Simple dice roller
function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Lookup helper
function findChartResult(total) {
  for (const row of STF_RESULTS) {
    const lo = row.min;
    const hi = row.max;
    if (lo === null && hi !== null) {
      if (total <= hi) return row;
    } else if (hi === null && lo !== null) {
      if (total >= lo) return row;
    } else if (lo !== null && hi !== null) {
      if (total >= lo && total <= hi) return row;
    }
  }
  return null;
}

// DOM hooks
const rollButton    = document.getElementById("rollButton");
const d6aEl         = document.getElementById("d6aValue");
const d6bEl         = document.getElementById("d6bValue");
const d10El         = document.getElementById("d10Value");
const extraD10El    = document.getElementById("extraD10Value");
const d20El         = document.getElementById("d20Value");
const totalEl       = document.getElementById("totalValue");
const chartResultEl = document.getElementById("chartResult");
const historyList   = document.getElementById("historyList");

const maxHistory = 12;

function addToHistory(text) {
  const div = document.createElement("div");
  div.textContent = text;
  historyList.prepend(div);

  while (historyList.children.length > maxHistory) {
    historyList.removeChild(historyList.lastChild);
  }
}

rollButton.addEventListener("click", () => {
  rollButton.classList.add("rolling");

  setTimeout(() => {
    // Main roll
    const d6a = rollDie(6);
    const d6b = rollDie(6);
    const mainD10 = rollDie(10);
    const total = (d6a + d6b) * 10 + mainD10;

    // Extra independent dice
    const extraD10 = rollDie(10);
    const d20 = rollDie(20);

    // Update UI
    d6aEl.textContent = d6a;
    d6bEl.textContent = d6b;
    d10El.textContent = mainD10;
    extraD10El.textContent = extraD10;
    d20El.textContent = d20;
    totalEl.textContent = total;

    // Chart lookup
    const chartRow = findChartResult(total);
    if (chartRow) {
      chartResultEl.textContent = chartRow.label + ": " + chartRow.desc;
    } else {
      chartResultEl.textContent =
        "No entry on the chart for a total of " + total + ".";
    }

    // History
    addToHistory(
      "Total " + total +
      " (D6 A: " + d6a +
      ", D6 B: " + d6b +
      ", Main D10: " + mainD10 +
      ", Extra D10: " + extraD10 +
      ", D20: " + d20 + ")"
    );

    rollButton.classList.remove("rolling");
  }, 180);
});


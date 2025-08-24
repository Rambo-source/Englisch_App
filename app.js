// Navigation
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  document.getElementById('menu').style.display = 'none';
}

function goHome() {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.getElementById('menu').style.display = 'block';
}

// Conversation check
function checkConversation() {
  const input = document.getElementById("convInput").value.toLowerCase();
  let feedback = "";
  if (input.includes("coffee") || input.includes("tea")) {
    feedback = "✅ Good! That’s a natural order.";
  } else {
    feedback = "ℹ Try something like: ‘I’d like a coffee and a sandwich, please.’";
  }
  document.getElementById("convFeedback").innerText = feedback;
}

// Grammar check
function checkGrammar() {
  const answer = document.getElementById("gramInput").value.trim().toLowerCase();
  document.getElementById("gramFeedback").innerText =
    (answer === "went") ? "✅ Correct!" : "❌ The correct answer is: went.";
}

// Vocabulary check
function checkVocabulary() {
  const answer = document.getElementById("vocabInput").value.trim().toLowerCase();
  document.getElementById("vocabFeedback").innerText =
    (answer === "date") ? "✅ Correct!" : "❌ The correct answer is: date.";
}

// Mixed mode (random section)
function mixedMode() {
  const sections = ["conversation", "grammar", "vocabulary"];
  const choice = sections[Math.floor(Math.random() * sections.length)];
  showSection(choice);
}

// Units (placeholder)
const units = {
  GL1: ["Unit 1: Back at school", "Unit 2: At home", "Unit 3: Free time"],
  GL2: ["Unit 1: Getting to know each other", "Unit 2: Welcome to London"],
  GL3: ["Unit 1: London is amazing", "Unit 2: I love London"],
  GL4: ["Unit 1: A nation invents itself", "Unit 2: The good life?"],
  GL5: ["Unit 1: Growing up", "Unit 2: The world of work"]
};

function chooseBook(book) {
  const list = document.getElementById("unitList");
  list.innerHTML = "<h3>" + book + " Units:</h3>";
  units[book].forEach(u => {
    const btn = document.createElement("button");
    btn.textContent = u;
    btn.onclick = () => alert("Übungen für " + u + " kommen hier!");
    list.appendChild(btn);
  });
}

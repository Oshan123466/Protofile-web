
function showInfo(type) {
  const box = document.getElementById("content");

  if (type === "details") {
    box.innerHTML = `
      <p><strong>Name:</strong> FIXO XD</p>
      <p><strong>Real Name:</strong> Oshan Nethsara</p>
      <p><strong>From:</strong> Urubokka</p>
      <p><strong>Age:</strong> 16+</p>
    `;
  } else if (type === "skills") {
    box.innerHTML = `
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Graphic Design</li>
      </ul>
    `;
  } else if (type === "projects") {
    box.innerHTML = `
      <ul>
        <li>Bot Developing</li>
        <li>WhatsApp Grid Maker</li>
      </ul>
    `;
  }
}

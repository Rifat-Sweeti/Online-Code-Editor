const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const runButton = document.getElementById("run-button");
const tabs = document.querySelectorAll(".tab");
const codeAreas = document.querySelectorAll(".code-area");

// Tab switching functionality
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    
    const targetId = tab.getAttribute("data-target");
    codeAreas.forEach(area => {
      area.classList.remove("active");
      if (area.id === targetId) {
        area.classList.add("active");
      }
    });
  });
});

// Function to open the preview in a new tab
function openInNewTab() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}<\/script>`;
  
  const fullCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        ${css}
      </head>
      <body>
        ${html}
        ${js}
      </body>
    </html>
  `;
  
  const newTab = window.open();
  newTab.document.open();
  newTab.document.write(fullCode);
  newTab.document.close();
}

runButton.addEventListener("click", openInNewTab);

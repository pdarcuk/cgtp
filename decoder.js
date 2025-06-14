+// Simple pigpen mapping represented with ASCII placeholders
+const pigpenMap = {
+    "/-": "A", // placeholder for pigpen symbol of A
+    "-|": "B",
+    "/|": "C",
+    "\\-": "D",
+    "-\\": "E",
+    "|/": "F",
+    "-|/": "G",
+    "|\\": "H",
+    "-": "I",
+    "--": "J",
+    "|": "K",
+    "||": "L",
+    "/": "M",
+    "\\": "N",
+    "//": "O",
+    "\\\\": "P",
+    "<>": "Q",
+    "{}": "R",
+    "[]": "S",
+    "()": "T",
+    "^": "U",
+    "v": "V",
+    "<": "W",
+    ">": "X",
+    "?": "Y",
+    "!": "Z"
+};
+
+function decodeCipher(text) {
+    return text.split(/\s+/).map(token => pigpenMap[token] || '?').join('');
+}
+
+document.getElementById('decode-btn').addEventListener('click', () => {
+    const cipherText = document.getElementById('cipher-text').value;
+    const decoded = decodeCipher(cipherText.trim());
+    document.getElementById('decoded-output').textContent = decoded;
+});
+
+// Display mapping image if provided
+const mappingInput = document.getElementById('mapping-input');
+const mappingImage = document.getElementById('mapping-image');
+if (mappingInput && mappingImage) {
+    mappingInput.addEventListener('change', (e) => {
+        const file = e.target.files[0];
+        if (!file) return;
+        const url = URL.createObjectURL(file);
+        mappingImage.src = url;
+        mappingImage.style.display = 'block';
+    });
+}

function copyContract() {
  const text = document.getElementById("contractAddress").innerText;

  navigator.clipboard.writeText(text).then(() => {
    alert("Contract address copied!");
  }).catch(err => {
    alert("Failed to copy address: " + err);
  });
}

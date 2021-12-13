// Convert characters (& < > " ') into HTML entities
function convertHTML(str) {
  let holder = str.split("");

  for (let i = 0; i < holder.length; i++) {
    switch (holder[i]) {
      case "<":
        holder[i] = "&lt;";
        break;
      case ">":
        holder[i] = "&gt;";
        break;
      case "&":
        holder[i] = "&amp;";
        break;
      case '"':
        holder[i] = "&quot;";
        break;
      case "'":
        holder[i] = "&apos;";
        break;
    }
  }
  holder = holder.join("");
  return holder;
}

convertHTML("Dolce & Gabbana");

function clean_and_clear() {
  var removals = ["body > .header", "body > .w980", "body > .gg_728", "body > .sub-btn", "body > .gg_950", "body > .ra-4x1", "body > .footer"];
  for (let selector of removals) {
    document.querySelectorAll(selector).forEach((el) => {
      el?.remove();
    })
  }

  document.body.insertAdjacentHTML("beforeend", "<style>body>div.clearfix img{max-height:100vh;} body>div:has(iframe){display:none;}</style>")

  alert("Clean and clear!")
}

clean_and_clear()
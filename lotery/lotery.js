// https://www.random.org/integers/?num=КОРИСТУВАЧ&min=1&max=КОРИСТУВАЧ&col=2&base=10&format=plain&rnd=yes&quot

const btn = document.querySelector("button")

btn.addEventListener("click", async () => {
  const quantity = Number(document.querySelector("#n-user").value)
  const winQuantity = Number(document.querySelector("#n-win").value)

  const data = await fetch(
    `http://www.random.org/integers/?num=${winQuantity}&min=1&max=${quantity}&col=5&base=10&format=plain&rnd=new&unique=on`
  )

  const text = await data.text()
  const divResult = document.querySelector(".result")
  divResult.textContent = text
})

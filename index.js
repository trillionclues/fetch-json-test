async function insertItems(url, table) {
  const tHead = table.querySelector('thead')
  const tBody = table.querySelector('tbody')
  const response = await fetch(url)
  const { headers, rows } = await response.json()

  // clear the table
  tHead.innerHTML = '<tr></tr>'
  tBody.innerHTML = ''

  // populate table headers
  for (const headerText of headers) {
    const headerElement = document.createElement('th')

    // console.log(headerElement)
    headerElement.textContent = headerText
    tHead.querySelector('tr').appendChild(headerElement)
  }

  // populate the rows
  for (const row of rows) {
    const rowElement = document.createElement('tr')
    // console.log(rowElement)

    // loop the nested rows
    for (const cellText of row) {
      const cellElement = document.createElement('td')

      cellElement.textContent = cellText
      rowElement.appendChild(cellElement)
    }

    tBody.appendChild(rowElement)
  }
}

insertItems('./data.json', document.querySelector('table'))

async function getNames(url, table) {
  const tableHead = table.querySelector('thead')
  const tableBody = table.querySelector('tbody')
  const response = await fetch(url)
  const { headers, rows } = await response.json()

  // clear tables
  tableHead.innerHTML = '<tr></tr>'
  tableBody.innerHTML = ''

  // populate table header
  headers.forEach(async (headerText) => {
    const headerElement = document.createElement('th')
    // console.log(headerElement)
    headerElement.textContent = headerText
    tableHead.querySelector('tr').appendChild(headerElement)
  })

  // populate the rows
  rows.forEach((row) => {
    const rowElement = document.createElement('tr')
    // console.log(rowElement)
    for (const cellText of row) {
      const cellElement = document.createElement('td')
      cellElement.textContent = cellText
      rowElement.appendChild(cellElement)
      tableBody.appendChild(rowElement)
    }
  })
}

getNames('./source/data.json', document.querySelector('table'))

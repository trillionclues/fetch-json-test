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

// insertTables('./data.json', document.querySelector('table'))

// const movies = 'https://api.themoviedb.org/3/movie/550?api_key=2f8da33e128ebdd160d821befd533b56'

// function movieRequest() {
//   fetch(
//     'https://api.themoviedb.org/3/movie/550?api_key=2f8da33e128ebdd160d821befd533b56'
//   )
//     .then((res) => {
//       return res.json()
//     })
//     .then((data) => {
//       return console.log(data)
//     })
//     .catch((err) => {
//       return err
//     })
// }

// async function movieList() {
//   const response = await movieRequest('Fight Club')
//   console.log(response)
// }

class Api {
  async getData() {
    let data
    let response = await fetch('./data.json')
    if (response.status !== 200) {
      console.log(
        'Looks like there was a problem. Status Code: ' + response.status
      )
    } else {
      data = await response.json()
    }

    return data
  }
}

export default Api

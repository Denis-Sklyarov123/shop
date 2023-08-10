class Fetch {
  async getCustomerId(store) {
    let data
    let response = await fetch('./data.json')
    if (response.status !== 200) {
      console.log(
        'Looks like there was a problem. Status Code: ' + response.status
      )
    } else {
      data = await response.json()
      store.setState('data', data)
    }

    return data
  }
}

export default Fetch

const fetchProductInformation = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error (`HTTP error: Status ${response.status}`)
    }
}

export default fetchProductInformation;
const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#container')

const formatPrice = (price) => {
    const  newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: 'USD'
    }).format(price)

    return newPrice
}

// fetch
async function getData(url) {
    const response = await fetch(`${url}/api/avo `)
    const data = await response.json()

    const allItems = []
    data.data.forEach(item => {
        const wrapperCard = document.createElement('div');
        const containerImg = document.createElement('figure')
        const img = document.createElement('img');
        const footerImg = document.createElement('figcaption')
        const title = document.createElement('h2');
        const price = document.createElement('p');
        const description = document.createElement('p');
        const containerBtn = document.createElement('div');
        const button = document.createElement('button');

        img.src = `${baseUrl}${item.image}`
        title.textContent = item.name
        price.textContent = formatPrice(item.price)
        description.textContent = item.attributes.description
        button.textContent = 'Order now'

        appNode.className = 'text-center'
        wrapperCard.className = 'w-72 inline-block m-4 shadow p-2 rounded hover:shadow-xl hover:border text-left'
        title.className = 'text-lg font-bold text-green-700'
        price.className = 'font-semibold text-gray-900'
        description.className= 'text-sm text-gray-700 text-ellipsis overflow-hidden h-40 my-4 '
        button.className = 'font-medium py-2 text-green-700'

        footerImg.append(title, price)
        containerImg.append(img, footerImg)
        containerBtn.append(button)
        wrapperCard.append(containerImg, description, containerBtn)

        allItems.push(wrapperCard)
    })
    appNode.append(...allItems)

}

getData(baseUrl)
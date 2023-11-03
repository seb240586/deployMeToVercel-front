

fetch('https://deploy-me-to-vercel-xi.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year
    })


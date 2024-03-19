function showDetails(title, description,imageUrl) {
    document.getElementById('product-title').innerHTML = title;
    document.getElementById('product-description').innerHTML = description;
    // document.getElementById('product-price').innerHTML = price;
    document.getElementById('product-popup-img').src = imageUrl;

    document.getElementById('overlay').style.display = 'flex';
}

function hideDetails() {
    document.getElementById('overlay').style.display = 'none';
}

const cafeList = document.querySelector('#cafe-list')   // Grab our <ul> to populate data

// 1. Create element and render cafe
// 2. Create some data, and render to the DOM
function renderCafe(doc) {
  let li = document.createElement('li')         // Create our <li> tag
  let name = document.createElement('span')     // Create a <span> tag for name field in database
  let city = document.createElement('span')     // Create a <span> tag for city field in database
  
  // Set attributes to our newly <li> elements
  li.setAttribute('data-id', doc.id)            // <li> tag, will have the unique id from our document unique ID from our database
  
  // Set the text content for our created <span> element
  name.textContent = doc.data().name            // Get data from our database field names
  city.textContent = doc.data().city

  // Append our <span> element to the <li>
  li.appendChild(name)
  li.appendChild(city)

  // Append <li> to our <ul> element, with the id of 'cafe-list'
  cafeList.appendChild(li)
}


// Grab the collection from our database from firestore 
db.collection('cafes').get().then((snapshot) => {   // snapshot -- is a representation of the data in the database at that time
  snapshot.docs.forEach(doc => {                    // forEach() to cycle to each item in the docs which is an array
    renderCafe(doc)                 // Call our function to create the HTML element
  })
})
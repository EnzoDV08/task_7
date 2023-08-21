$(document).ready(function() {
    // Add hover effect using jQuery
    $('.img-zoom').hover(function() {
        $(this).addClass('img-zoom');
    }, function() {
        $(this).removeClass('img-zoom');
    });
});

const tripItems = [
    {
      destination: "Paris",
      description: "Explore the romantic city of Paris.",
      image: "paris.jpg"
    },
    {
      destination: "New York",
      description: "Experience the hustle and bustle of New York City.",
      image: "new-york.jpg"
    },
    {
      destination: "Tokyo",
      description: "Discover the unique blend of tradition and modernity in Tokyo.",
      image: "tokyo.jpg"
    }
  ];
  
  const tripContainer = document.getElementById("tripContainer");
  

  tripItems.forEach(tripItem => {
    const tripItemDiv = document.createElement("div");
    tripItemDiv.classList.add("trip-item");
  
    const tripItemImage = document.createElement("img");
    tripItemImage.src = tripItem.image;
    tripItemImage.alt = tripItem.destination;
  
    const tripItemContent = document.createElement("div");
    tripItemContent.classList.add("trip-item-content");
  
    const destinationHeading = document.createElement("h2");
    destinationHeading.textContent = tripItem.destination;
  
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = tripItem.description;
  
    tripItemContent.appendChild(destinationHeading);
    tripItemContent.appendChild(descriptionParagraph);
  
    tripItemDiv.appendChild(tripItemImage);
    tripItemDiv.appendChild(tripItemContent);
  
    tripContainer.appendChild(tripItemDiv);
  });

  
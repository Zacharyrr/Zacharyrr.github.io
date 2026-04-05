const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

//creating images constant 
const images = [
    {filename: "pic1.jpg", alt: "Close up of a human eye"},
    {filename: "pic2.jpg", alt: "Rock that looks like a w3ave"},
    {filename: "pic3.jpg", alt: "Purple and white pansies"},
    {filename: "pic4.jpg", alt: "section of a wall from a pharaoh's tomb"},
    {filename: "pic5.jpg", alt: "Large moth on a leaf "},
]
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

//for loop for go through each image
for (const image of images){
    const newImage = document.createElement("img");
    // image source
    newImage.src = baseURL + image.filename;
    //alt tect
    newImage.alt = image.alt;
    //adding image keyboard focasable attribute 
    newImage.tabIndex="0";
    //adding image to page by appending it 
    thumbBar.appendChild(newImage);
    //CLICKING EVENT 
      newImage.addEventListener("click",updateDisplayedImage);
      //if the user clicks the enter key on their keyboard then 
      // the image will be show in full size if the key is pressed after focus 
        newImage.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      updateDisplayedImage(e);
    }
  });
}
  //creating the update displayed image function
  function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;

}
// DARK/LIGHT BUTTON
// Adding a click event listener to the button
btn.addEventListener("click", () =>{
    //checking if the button currenlty has the dark class
  if (btn.classList.contains("dark"))
    // Changing the  button text to "Lighten" to indicate the next action 
{
    btn.textContent = "Lighten";
    //// Applying a dark overlay to the image (50% opacity)
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    // Changing the button text back to "Darken"
    btn.textContent = "Darken";
    //// Remove the dark overlay 
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }

  // // Toggle the "dark" class on the button 
  btn.classList.toggle("dark");
});
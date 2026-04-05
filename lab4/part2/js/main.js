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
const baseURL = "https://mdn.github.io/shared-assests/images/examples/learn/gallery/";

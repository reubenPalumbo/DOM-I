const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
const container = document.querySelector(".container");
const navLoc = container.querySelector("nav");
const navItem1 = container.querySelector("a:nth-of-type(1)");
const navItem2 = container.querySelector("a:nth-of-type(2)");
const navItem3 = container.querySelector("a:nth-of-type(3)");
const navItem4 = container.querySelector("a:nth-of-type(4)");
const navItem5 = container.querySelector("a:nth-of-type(5)");
const navItem6 = container.querySelector("a:nth-of-type(6)");

const a1 = document.createElement("a");
const a2 = document.createElement("a");

const navNew1 = navLoc.appendChild(a1);
const navNew2 = navLoc.appendChild(a2);
navNew1.textContent = "New 1";
navNew1.href = "#";
navNew2.textContent = "New 2";
navNew2.href = "#";

const navA = container.querySelectorAll("a");
navA.forEach((a) => {
  a.style.color = "green";
});
navItem1.textContent = siteContent["nav"]["nav-item-1"];
navItem2.textContent = siteContent["nav"]["nav-item-2"];
navItem3.textContent = siteContent["nav"]["nav-item-3"];
navItem4.textContent = siteContent["nav"]["nav-item-4"];
navItem5.textContent = siteContent["nav"]["nav-item-5"];
navItem6.textContent = siteContent["nav"]["nav-item-6"];

const ctaText = document.querySelector(".cta-text");

const ctaH1 = ctaText.querySelector("h1");
const ctaButton = ctaText.querySelector("button");
const ctaIMG = document.querySelector("#cta-img");

ctaH1.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
ctaIMG.src = siteContent["cta"]["img-src"];

const mainCont = document.querySelector(".main-content");
const bottomCont = document.querySelector(".bottom-content");

const featuresHead = mainCont.querySelector(".text-content:nth-of-type(1) h4");
const aboutHead = mainCont.querySelector(".text-content:nth-of-type(2) h4");
const servicesHead = bottomCont.querySelector(
  ".text-content:nth-of-type(1) h4"
);
const productHead = bottomCont.querySelector(".text-content:nth-of-type(2) h4");
const visionHead = bottomCont.querySelector(".text-content:nth-of-type(3) h4");

const featuresP = mainCont.querySelector(".text-content:nth-of-type(1) p");
const aboutP = mainCont.querySelector(".text-content:nth-of-type(2) p");
const servicesP = bottomCont.querySelector(".text-content:nth-of-type(1) p");
const productP = bottomCont.querySelector(".text-content:nth-of-type(2) p");
const visionP = bottomCont.querySelector(".text-content:nth-of-type(3) p");

featuresHead.textContent = siteContent["main-content"]["features-h4"];
aboutHead.textContent = siteContent["main-content"]["about-h4"];
servicesHead.textContent = siteContent["main-content"]["services-h4"];
productHead.textContent = siteContent["main-content"]["product-h4"];
visionHead.textContent = siteContent["main-content"]["vision-h4"];

featuresP.textContent = siteContent["main-content"]["features-content"];
aboutP.textContent = siteContent["main-content"]["about-content"];
servicesP.textContent = siteContent["main-content"]["services-content"];
productP.textContent = siteContent["main-content"]["product-content"];
visionP.textContent = siteContent["main-content"]["vision-content"];

const middleIMG = mainCont.querySelector("img");

middleIMG.src = siteContent["main-content"]["middle-img-src"];

const contact = document.querySelector(".contact");
const contactHead = contact.querySelector("h4");
const contactP1 = contact.querySelector("p:nth-of-type(1)");
const contactP2 = contact.querySelector("p:nth-of-type(2)");
const contactP3 = contact.querySelector("p:nth-of-type(3)");

contactHead.textContent = siteContent["contact"]["contact-h4"];
contactP1.textContent = siteContent["contact"]["address"];
contactP2.textContent = siteContent["contact"]["phone"];
contactP3.textContent = siteContent["contact"]["email"];

const foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"];

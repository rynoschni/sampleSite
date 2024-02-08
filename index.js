const introButton = document.getElementById('intro');
const phishingButton = document.getElementById('phishing');
const fakerButton = document.getElementById("faker");
const pretextButton = document.getElementById("pretext");
const preventionButton = document.getElementById("prevention");
const reportButton = document.getElementById("reporting");
const divContainer = document.getElementById('container');
const divStart = document.getElementById('start');

const phishingContent = `
  <img src="images/image-what-is-phishing-hero.jpg" alt="Phishing Hero Image" style=" height: 30%; width: 30%">
  <h2>Phishing</h2>
  <p>Phishing is the most common type of social engineering attack, typically using spoofed email addresses and links to trick people into providing login credentials, credit card numbers, or other personal information. Variations of phishing attacks include:
<ul style="list-style-type: none" >
<li>Angler phishing – using spoofed customer service accounts on social media
</li>
<li>
Spear phishing – phishing attacks that target specific organizations or individuals
</li>
</ul>
</p>
<button id='previous' onclick='reloadStart()'>Previous Topic</button>    
<button id='next' onclick='fakerClick()'>Next Topic</button>
  `

  const fakerContent = `
  <img src="images/water-hole.webp" alt="Water Hole Image" style=" height: 30%; width: 30%">
  <h2>Water Hole</h2>
  <p>In a watering hole attack, a hacker infects a legitimate website that their targets are known to visit. Then, when their chosen victims log into the site, the hacker either captures their credentials and uses them to breach the target’s network, or they install a backdoor trojan to access the network.
</p>
<button id='previous' onclick='phishingClick()'>Previous Topic</button>    
<button id='next' onclick='console.log("nothing yet")'>Next Topic</button>
  `;


const body = document.getElementById('body');

//reload page event
function reloadStart() {
  location.reload();
}
//phishing button Event
function phishingClick() {

  divStart.innerHTML = phishingContent;
  
}

//faker button Event
function fakerClick() {
  
  divStart.innerHTML = fakerContent;
  
  
}
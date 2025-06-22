// script.js
document.addEventListener("DOMContentLoaded", () => {
  const houses = [
    {
      name: "House Stark",
      description: "Winter is Coming. Lords of Winterfell and Wardens of the North.",
      image: "images/stark.jpg",
      banners: [
        { name: "House Mormont" },
        { name: "House Reed" },
        { name: "House Bolton" },
        { name: "House Karstark" },
        { name: "House Umber" },
        { name: "House Glover" },
        { name: "House Tallhart" },
        { name: "House Hornwood" },
        { name: "House Manderly" },
        { name: "House Dustin" }
      ]
    },
    {
      name: "House Martell",
      description: "Unbowed, Unbent, Unbroken. Rulers of Dorne.",
      image: "images/martell.jpg",
      banners: [
        { name: "House Yronwood" },
        { name: "House Dayne" },
        { name: "House Jordayne" },
        { name: "House Manwoody" },
        { name: "House Blackmont" },
        { name: "House Uller" },
        { name: "House Santagar" },
        { name: "House Allyrion" },
        { name: "House Fowler" },
        { name: "House Qorgyle" }
      ]
    },
    {
      name: "House Lannister",
      description: "Hear Me Roar! Richest house in Westeros, rulers of the Westerlands.",
      image: "images/lannister.jpg",
      banners: [
        { name: "House Clegane" },
        { name: "House Swyft" },
        { name: "House Crakehall" },
        { name: "House Lefford" },
        { name: "House Reyne" },
        { name: "House Marbrand" },
        { name: "House Greenfield" },
        { name: "House Brax" },
        { name: "House Sarsfield" },
        { name: "House Tarbeck" }
      ]
    },
    {
      name: "House Targaryen",
      description: "Fire and Blood. Dragonlords of old Valyria.",
      image: "images/targaryen.jpg",
      banners: [
        { name: "House Velaryon" },
        { name: "House Celtigar" },
        { name: "House Massey" },
        { name: "House Blackfyre" },
        { name: "House Sunglass" },
        { name: "House Bar Emmon" },
        { name: "House Staunton" },
        { name: "House Hollard" },
        { name: "House Morrigen" },
        { name: "House Hightide" }
      ]
    },
    {
      name: "House Baratheon",
      description: "Ours is the Fury. Lords of Storm's End and the Stormlands.",
      image: "images/baratheon.jpg",
      banners: [
        { name: "House Estermont" },
        { name: "House Connington" },
        { name: "House Dondarrion" },
        { name: "House Tarth" },
        { name: "House Caron" },
        { name: "House Selmy" },
        { name: "House Swann" },
        { name: "House Errol" },
        { name: "House Penrose" },
        { name: "House Buckler" }
      ]
    },
    {
      name: "House Greyjoy",
      description: "We Do Not Sow. Lords of the Iron Islands.",
      image: "images/greyjoy.jpg",
      banners: [
        { name: "House Harlaw" },
        { name: "House Blacktyde" },
        { name: "House Saltcliffe" },
        { name: "House Botley" },
        { name: "House Goodbrother" },
        { name: "House Myre" },
        { name: "House Kenning" },
        { name: "House Stonehouse" },
        { name: "House Sparr" },
        { name: "House Sunderly" }
      ]
    },
    {
      name: "House Arryn",
      description: "As High as Honor. Lords of the Eyrie and the Vale.",
      image: "images/arryn.jpg",
      banners: [
        { name: "House Royce" },
        { name: "House Corbray" },
        { name: "House Waynwood" },
        { name: "House Redfort" },
        { name: "House Belmore" },
        { name: "House Templeton" },
        { name: "House Grafton" },
        { name: "House Hunter" },
        { name: "House Melcolm" },
        { name: "House Tollett" }
      ]
    },
    {
      name: "House Tully",
      description: "Family, Duty, Honor. Lords of Riverrun and the Riverlands.",
      image: "images/tully.jpg",
      banners: [
        { name: "House Blackwood" },
        { name: "House Bracken" },
        { name: "House Mallister" },
        { name: "House Frey" },
        { name: "House Piper" },
        { name: "House Vance" },
        { name: "House Whent" },
        { name: "House Smallwood" },
        { name: "House Mooton" },
        { name: "House Ryger" }
      ]
    }
  ];

  const list = document.getElementById("house-list");

  houses.forEach(house => {
    const div = document.createElement("div");
    div.className = "house";

    const img = document.createElement("img");
    img.src = house.image;
    img.alt = house.name;

    const name = document.createElement("div");
    name.textContent = house.name;

    div.appendChild(img);
    div.appendChild(name);

    div.addEventListener("click", () => showModal(house));
    list.appendChild(div);
  });

  const modal = document.getElementById("house-modal");
  const closeBtn = document.querySelector(".close");

  function showModal(house) {
    document.getElementById("house-name").textContent = house.name;
    document.getElementById("house-description").textContent = house.description;
    document.getElementById("house-image").src = house.image;
    document.getElementById("house-image").alt = house.name;

    const bannerList = document.getElementById("house-banners");
    bannerList.innerHTML = "";

    house.banners.forEach(banner => {
      const li = document.createElement("li");
      li.textContent = banner.name;
      bannerList.appendChild(li);
    });

    modal.style.display = "block";
  }

  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
  };
});

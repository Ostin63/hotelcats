
const map = L.map('map')
  .setView({
    lat: 59.938667,
    lng: 30.323073,
  }, 17);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/map-cat.png',
  iconSize: [57, 79],
  iconAnchor: [27.5, 79],
});

const mainPinMarker = L.marker(
  {
    lat: 59.938667,
    lng: 30.323073,
  },
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

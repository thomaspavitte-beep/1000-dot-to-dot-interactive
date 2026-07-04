// Featured drawings shown in the "Drawings" switcher on both pages.
// To feature a new drawing:
//   1. Convert its SVG with tools/convert.html into art/<id>.js
//   2. Add an entry below (order here = order in the switcher)
//   3. Drop the book cover image into covers/ — `cover` is optional; a lettered
//      tile is shown while the image file is missing. `buy` (optional) adds a
//      "Get the book" link to the completion card.
window.ART_MANIFEST = [
  {
    id: "elvis",
    title: "Elvis",
    book: "The 1000 Dot-to-Dot Book: Icons",
    cover: "covers/icons.jpg",
    buy: ""
  },
  {
    id: "taj-mahal",
    title: "Taj Mahal",
    book: "The 1000 Dot-to-Dot Book: Cityscapes",
    cover: "covers/cityscapes.jpg",
    buy: ""
  }
];

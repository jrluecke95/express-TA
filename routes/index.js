const express = require('express');
const router = express.Router();

const arr = [1, 2, 3, 4, 5];
let pictures = [
  "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
  "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg"
];

router.get('/', (req, res) => {

  res.render('index', {
    pageTitle: "something",
    content: "this is a content header",
    arrNums: arr,
    isValid: true,
    pictures: pictures,
  })


  // <% for( let i = 0; i < pictures.length; i++ ) { %>
  //   <img height="200" width="200" src="<%= pictures[i] %>">
  // <% } %>
})

router.get('/:id', (req, res) => {
  let id = req.params.id;
  res.render('index', {
    pageTitle: "something",
    content: "this is a content header",
    arrNums: arr,
    isValid: true,
    picture: pictures[id],
  })
})

module.exports = router;
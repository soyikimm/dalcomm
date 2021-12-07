const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Product } = require("../models/Product");

//=================================
//             Product
//=================================

const storage = multer.diskStorage({
    destination: function (req, file, cb) { // 어디애 파일이 저장되는지 설정
      cb(null, 'uploads/') // uploads에 모든 이미지파일이 저장됨
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
  
const upload = multer({ storage: storage }).single("file")


router.post('/image', (req, res) => {

  //가져온 이미지를 저장을 해주면 된다.
  upload(req, res, err => {
      if (err) {
          return req.json({ success: false, err })
      }
      return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
  })

})


router.post('/', (req, res) => {

  //받아온 정보들을 DB에 넣어 준다.
  const product = new Product(req.body)

  product.save((err) => {
      if (err) return res.status(400).json({ success: false, err })
      return res.status(200).json({ success: true })
  })

})

router.post('/products', (req, res) => {

  // product collection에 들어있는 모든 상품정보를 가져옴

      let limit = req.body.limit ? parseInt(req.body.limit) : 100;
      let skip = req.body.skip ? parseInt(req.body.skip) : 0;

      let findArgs = {};

      for (let key in req.body.filters) {
        
          if (req.body.filters[key].length > 0) {

          findArgs[key] = req.body.filters[key];

        }

      }

      console.log('findArgs', findArgs)


      Product.find(findArgs)
      .populate("writer")
      .skip(skip)
      .limit(limit)
      .exec((err, productInfo) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true, productInfo })
      })
  

})

module.exports = router;

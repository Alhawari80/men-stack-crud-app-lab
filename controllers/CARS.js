const CARS = require('../models/car');

const router = require('express').Router();

router.get("/cars/new",async (req , res)=>{
    res.render("cars/new.ejs");
} )



router.post("/cars", async (req,res)=>{
    if(req.body.isLuxury === "on"){
        req.body.isLuxury = true;
    } else {
        req.body.isLuxury = false;
    }

    await CARS.create(req.body);
    res.redirect("/cars/new");
})

//read all - index
router.get("/cars",async (req,res)=>{
    const car = await CARS.find();
    res.render("cars/index.ejs", {car});
})

//Real one -show
router.get("/cars/:carId", async (req,res)=>{
    const car = await CARS.findById(req.params.carId);
    res.render('cars/show.ejs', {car});

})

//Edit -GET
router.get("/cars/:carId/edit", async(req,res)=>{
    const car = await CARS.findById(req.params.carId);
    res.render('cars/edit.ejs',{car});
})


//Update -this.put
router.put("/cars/:carId",async(req,res)=>{
    if (req.body.isLuxury ==="on"){
        req.body.isLuxury = true;
    }else{
req.body.isLuxury = false;
    }
    await CARS.findByIdAndUpdate(req.params.carId, req.body);
    res.redirect(`/cars/${req.params.carId}`);
    })

    router.delete('/cars/:carId', async (req,res)=>{
        await CARS.findByIdAndDelete(req.params.carId);
        res.redirect("/cars");
    })

module.exports = router;


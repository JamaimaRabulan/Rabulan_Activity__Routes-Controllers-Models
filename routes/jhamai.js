import express from "express";


const router = express.Router();

router.get("/", (req, res)=>{
    res.send("hello Jamai");
});
export default router;

router.get("user/:id", (req, res)=>{
     const id = req.params.id;
     res.send(`hello id: ${id}`);
});



    // getProduct: async (req, res) => {
    //   res.send("product");
    // },


    // showProduct: (req, res) => {
      
   // showProduct: (req, res) => {
    //  
    //   
    // }
//   }
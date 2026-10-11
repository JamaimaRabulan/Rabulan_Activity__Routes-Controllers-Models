import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello Jamai");
});

router.get("/about", (req, res) => {
    res.send("About Jamaima");
});

router.get("/profile", (req, res) => {
    res.send("This is Jamaima's Profile");
});

router.get("/contact", (req, res) => {
    res.send("Contact Jamaima");
});

router.get("/school", (req, res) => {
    res.send("Jamaima's School Page");
});

// Product ID
router.get("/:id", (req, res) => {
    res.send(`Product ID: ${req.params.id}`);
});

export default router;
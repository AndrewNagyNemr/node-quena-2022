const express = require("express");
const { Plan } = require("../model/plan");

const router = express.Router()

router.get("/", async (req, res) => {
    const plans = await Plan.find()
        .populate("users", "name email -_id")
    res.json(plans)
})

router.get("/:id", async (req, res) => {
    const plan = await Plan.findById(req.params.id);
    res.json(plan)
})

router.post("/", async (req, res) => {
    const newPlan = new Plan(req.body)
    const result = await newPlan.save()
    res.json(result)
});

router.put("/:id", async (req, res) => {
    const plan = await Plan.findById(req.params.id);
    plan.name = req.body.name
    plan.price = req.body.price
    await plan.save();
    res.json(plan)
})

router.delete("/:id", async (req, res) => {
    const result = await Plan.findByIdAndDelete(req.params.id);
    res.json(result)
})

module.exports = router
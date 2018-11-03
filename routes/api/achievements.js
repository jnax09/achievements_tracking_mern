const express = require('express')
const router = express.Router()

const Achievement = require('../../models/Achievement')

router.get('/', async (req, res) => {
    const achievements = await Achievement.find({}).sort({ date: -1 })
    res.send(achievements).status(200)
})

router.post('/', async (req, res) => {
    const newAchievement = new Achievement({
        name: req.body.name
    })

    try {
        const achievement = await newAchievement.save()
        res.send(achievement).status(200)   
    } catch (error) {
        res.send({err: error.message})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const achievement = await Achievement.findOneAndDelete({_id: req.params.id})
        res.send(achievement).status(200)
    } catch (error) {
        res.status(404).send({success: false})
    }
})

module.exports = router
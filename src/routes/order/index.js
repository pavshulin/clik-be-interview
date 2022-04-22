import express from 'express';

import { OrderService } from '../../modules/order/order.service';

const router = express.Router();

// GET orders/:id
router.get('/getById/:id', async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const order = await OrderService.getById(orderId);
        return res.json({ order });
    } catch (err) {
        return next(err);
    }
});

// POST orders/:id/courier
// POST orders/:id/assign-courier
router.post('/courier/assign/:id', async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const courierId = await OrderService.assignNearestCourier(orderId);

        return res.json({ status: Boolean(courierId), courierId });
    } catch (err) {
        return next(err);
    }
});

// GET orders/:id/integration-check
// route with some integration logic
router.post('/integration/check/:id', async (req, res, next) => {
    try {
        const orderId = req.params.id;
        const statusesArr = await OrderService.checkIntegrationStatus(orderId);

        return res.json({ res: statusesArr });
    } catch (err) {
        return next(err);
    }
});

export default router;

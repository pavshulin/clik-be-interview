import express from 'express';

import { CourierService } from '../../modules/courier/courier.service';

const router = express.Router();

router.get('/current/order/:id', async (req, res, next) => {
    try {
        const courierId = req.params.id;
        const order = await CourierService.getCurrentOrderByCourierId(courierId);
        return res.json({ order });
    } catch (err) {
        return next(err);
    }
});

router.post('/change/profile/picture/:id', async (req, res, next) => {
    try {
        const courierId = req.params.id;

        // ...
        // after somehow getting file buffer
        const buffer = req.fileBuffer;

        await CourierService.uploadPhotoToS3(courierId, buffer);
        
        return res.json({ status: true });
    } catch (err) {
        return next(err);
    }
});

export default router;

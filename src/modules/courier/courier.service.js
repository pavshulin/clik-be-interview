import { OrderDao } from '../../db/dao/';
import { CourierDao } from '../../db/dao/courier.dao';

// no circular dependencies
// import { OrderService } from '../order/order.service'; // can't import it now?

class CourierService {
    /**
     * Returns courier data
     * @param courierId
     */
    async getCurrentOrderByCourierId(courierId) {
        const courier = CourierDao.findById(courierId);

        // some dummy check
        // should be a function in courier model
        if(courier.status === 'BLOCKED') {
            throw new ForbiddenError('Courier is blocked now.');
        }

        // let's get and return order (service-to-service communication?).
        return await OrderDao.findById(courierId);
    }

    // ...
    // + 500 lines of business logic
    // ...

    /**
     * @param courierId
     * @param buffer
     */
    async uploadPhotoToS3(courierId, buffer) {
        // should not be here i think
        await S3Service.putObjectToBucket('some/folder', 'some-unique-name.png', buffer);
    }
}

const CourierServiceSingleton = new CourierService();
export { CourierServiceSingleton as CourierService }

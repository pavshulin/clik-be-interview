import { Courier } from '#/sequilize/models';

class CourierDao {
    findById(courierId) {
        return Courier.findOne({
            where: { id: courierId },
            // ...
        });
    }
}

const CourierDaoSingleton = new CourierDao();
export { CourierDaoSingleton as CourierDao }

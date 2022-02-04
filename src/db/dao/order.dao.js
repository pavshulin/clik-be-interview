import { Order } from '#/sequilize/models';

class OrderDao {
    findById(orderId) {
        return Order.findOne({
            where: { id: orderId },
            // ...
        });
    }
}

const OrderDaoSingleton = new OrderDao();
export { OrderDaoSingleton, OrderDaoSingleton as OrderDao }

import App from "../App";
import {Purchase} from "../containers/Purchase";
import {CreditCard} from "../containers/CreditCard";
import {Finish} from "../containers/Finish/Finish";

const routes = [
    {
        component: App,
        routes: [
            {
                name: '商品訂單',
                path: '/',
                exact: true,
                component: Purchase
            },
            {
                name: '付款資訊',
                path: '/credit-card',
                exact: true,
                component: CreditCard
            },
            {
                name: '確認訂單',
                path: '/finish',
                exact: true,
                component: Finish
            }
        ]
    }
]

export {routes}
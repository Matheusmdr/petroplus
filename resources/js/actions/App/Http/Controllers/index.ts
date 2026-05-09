import HomeController from './HomeController'
import ContactController from './ContactController'
import ProductController from './ProductController'
import Admin from './Admin'
import Settings from './Settings'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    ContactController: Object.assign(ContactController, ContactController),
    ProductController: Object.assign(ProductController, ProductController),
    Admin: Object.assign(Admin, Admin),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers
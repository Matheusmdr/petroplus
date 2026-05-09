import CategoryController from './CategoryController'
import BrandController from './BrandController'
import ProductAdminController from './ProductAdminController'
import TestimonialController from './TestimonialController'
import PartnerLogoController from './PartnerLogoController'
import BannerController from './BannerController'
import UserController from './UserController'
import SiteSettingController from './SiteSettingController'

const Admin = {
    CategoryController: Object.assign(CategoryController, CategoryController),
    BrandController: Object.assign(BrandController, BrandController),
    ProductAdminController: Object.assign(ProductAdminController, ProductAdminController),
    TestimonialController: Object.assign(TestimonialController, TestimonialController),
    PartnerLogoController: Object.assign(PartnerLogoController, PartnerLogoController),
    BannerController: Object.assign(BannerController, BannerController),
    UserController: Object.assign(UserController, UserController),
    SiteSettingController: Object.assign(SiteSettingController, SiteSettingController),
}

export default Admin
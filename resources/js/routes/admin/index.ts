import categories from './categories'
import brands from './brands'
import products from './products'
import productDocuments from './product-documents'
import testimonials from './testimonials'
import partnerLogos from './partner-logos'
import banners from './banners'
import users from './users'
import siteSettings from './site-settings'
const admin = {
    categories: Object.assign(categories, categories),
brands: Object.assign(brands, brands),
products: Object.assign(products, products),
productDocuments: Object.assign(productDocuments, productDocuments),
testimonials: Object.assign(testimonials, testimonials),
partnerLogos: Object.assign(partnerLogos, partnerLogos),
banners: Object.assign(banners, banners),
users: Object.assign(users, users),
siteSettings: Object.assign(siteSettings, siteSettings),
}

export default admin
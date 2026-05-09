import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SiteSettingController::index
* @see app/Http/Controllers/Admin/SiteSettingController.php:14
* @route '/admin/site-settings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/site-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SiteSettingController::index
* @see app/Http/Controllers/Admin/SiteSettingController.php:14
* @route '/admin/site-settings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SiteSettingController::index
* @see app/Http/Controllers/Admin/SiteSettingController.php:14
* @route '/admin/site-settings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SiteSettingController::index
* @see app/Http/Controllers/Admin/SiteSettingController.php:14
* @route '/admin/site-settings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SiteSettingController::index
* @see app/Http/Controllers/Admin/SiteSettingController.php:14
* @route '/admin/site-settings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SiteSettingController::index
* @see app/Http/Controllers/Admin/SiteSettingController.php:14
* @route '/admin/site-settings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SiteSettingController::index
* @see app/Http/Controllers/Admin/SiteSettingController.php:14
* @route '/admin/site-settings'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Admin\SiteSettingController::update
* @see app/Http/Controllers/Admin/SiteSettingController.php:23
* @route '/admin/site-settings'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/site-settings',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\SiteSettingController::update
* @see app/Http/Controllers/Admin/SiteSettingController.php:23
* @route '/admin/site-settings'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SiteSettingController::update
* @see app/Http/Controllers/Admin/SiteSettingController.php:23
* @route '/admin/site-settings'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\SiteSettingController::update
* @see app/Http/Controllers/Admin/SiteSettingController.php:23
* @route '/admin/site-settings'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\SiteSettingController::update
* @see app/Http/Controllers/Admin/SiteSettingController.php:23
* @route '/admin/site-settings'
*/
updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const siteSettings = {
    index: Object.assign(index, index),
    update: Object.assign(update, update),
}

export default siteSettings
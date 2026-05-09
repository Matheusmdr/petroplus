import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ProductController::categories
* @see app/Http/Controllers/ProductController.php:16
* @route '/produtos'
*/
export const categories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

categories.definition = {
    methods: ["get","head"],
    url: '/produtos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::categories
* @see app/Http/Controllers/ProductController.php:16
* @route '/produtos'
*/
categories.url = (options?: RouteQueryOptions) => {
    return categories.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::categories
* @see app/Http/Controllers/ProductController.php:16
* @route '/produtos'
*/
categories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::categories
* @see app/Http/Controllers/ProductController.php:16
* @route '/produtos'
*/
categories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categories.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProductController::categories
* @see app/Http/Controllers/ProductController.php:16
* @route '/produtos'
*/
const categoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::categories
* @see app/Http/Controllers/ProductController.php:16
* @route '/produtos'
*/
categoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::categories
* @see app/Http/Controllers/ProductController.php:16
* @route '/produtos'
*/
categoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categories.form = categoriesForm

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:30
* @route '/produtos/{categorySlug}'
*/
export const index = (args: { categorySlug: string | number } | [categorySlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/produtos/{categorySlug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:30
* @route '/produtos/{categorySlug}'
*/
index.url = (args: { categorySlug: string | number } | [categorySlug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { categorySlug: args }
    }

    if (Array.isArray(args)) {
        args = {
            categorySlug: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        categorySlug: args.categorySlug,
    }

    return index.definition.url
            .replace('{categorySlug}', parsedArgs.categorySlug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:30
* @route '/produtos/{categorySlug}'
*/
index.get = (args: { categorySlug: string | number } | [categorySlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:30
* @route '/produtos/{categorySlug}'
*/
index.head = (args: { categorySlug: string | number } | [categorySlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:30
* @route '/produtos/{categorySlug}'
*/
const indexForm = (args: { categorySlug: string | number } | [categorySlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:30
* @route '/produtos/{categorySlug}'
*/
indexForm.get = (args: { categorySlug: string | number } | [categorySlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::index
* @see app/Http/Controllers/ProductController.php:30
* @route '/produtos/{categorySlug}'
*/
indexForm.head = (args: { categorySlug: string | number } | [categorySlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:59
* @route '/produtos/{categorySlug}/{productSlug}'
*/
export const show = (args: { categorySlug: string | number, productSlug: string | number } | [categorySlug: string | number, productSlug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/produtos/{categorySlug}/{productSlug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:59
* @route '/produtos/{categorySlug}/{productSlug}'
*/
show.url = (args: { categorySlug: string | number, productSlug: string | number } | [categorySlug: string | number, productSlug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            categorySlug: args[0],
            productSlug: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        categorySlug: args.categorySlug,
        productSlug: args.productSlug,
    }

    return show.definition.url
            .replace('{categorySlug}', parsedArgs.categorySlug.toString())
            .replace('{productSlug}', parsedArgs.productSlug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:59
* @route '/produtos/{categorySlug}/{productSlug}'
*/
show.get = (args: { categorySlug: string | number, productSlug: string | number } | [categorySlug: string | number, productSlug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:59
* @route '/produtos/{categorySlug}/{productSlug}'
*/
show.head = (args: { categorySlug: string | number, productSlug: string | number } | [categorySlug: string | number, productSlug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:59
* @route '/produtos/{categorySlug}/{productSlug}'
*/
const showForm = (args: { categorySlug: string | number, productSlug: string | number } | [categorySlug: string | number, productSlug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:59
* @route '/produtos/{categorySlug}/{productSlug}'
*/
showForm.get = (args: { categorySlug: string | number, productSlug: string | number } | [categorySlug: string | number, productSlug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ProductController::show
* @see app/Http/Controllers/ProductController.php:59
* @route '/produtos/{categorySlug}/{productSlug}'
*/
showForm.head = (args: { categorySlug: string | number, productSlug: string | number } | [categorySlug: string | number, productSlug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const produtos = {
    categories: Object.assign(categories, categories),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default produtos
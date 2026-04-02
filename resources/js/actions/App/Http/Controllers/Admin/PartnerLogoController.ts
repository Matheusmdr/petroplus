import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::index
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:15
 * @route '/admin/partner-logos'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/partner-logos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::index
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:15
 * @route '/admin/partner-logos'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::index
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:15
 * @route '/admin/partner-logos'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::index
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:15
 * @route '/admin/partner-logos'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::index
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:15
 * @route '/admin/partner-logos'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::index
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:15
 * @route '/admin/partner-logos'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::index
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:15
 * @route '/admin/partner-logos'
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
* @see \App\Http\Controllers\Admin\PartnerLogoController::create
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:24
 * @route '/admin/partner-logos/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/partner-logos/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::create
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:24
 * @route '/admin/partner-logos/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::create
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:24
 * @route '/admin/partner-logos/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::create
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:24
 * @route '/admin/partner-logos/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::create
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:24
 * @route '/admin/partner-logos/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::create
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:24
 * @route '/admin/partner-logos/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::create
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:24
 * @route '/admin/partner-logos/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::store
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:29
 * @route '/admin/partner-logos'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/partner-logos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::store
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:29
 * @route '/admin/partner-logos'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::store
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:29
 * @route '/admin/partner-logos'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::store
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:29
 * @route '/admin/partner-logos'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::store
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:29
 * @route '/admin/partner-logos'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::show
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:0
 * @route '/admin/partner-logos/{partner_logo}'
 */
export const show = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/partner-logos/{partner_logo}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::show
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:0
 * @route '/admin/partner-logos/{partner_logo}'
 */
show.url = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { partner_logo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    partner_logo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        partner_logo: args.partner_logo,
                }

    return show.definition.url
            .replace('{partner_logo}', parsedArgs.partner_logo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::show
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:0
 * @route '/admin/partner-logos/{partner_logo}'
 */
show.get = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::show
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:0
 * @route '/admin/partner-logos/{partner_logo}'
 */
show.head = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::show
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:0
 * @route '/admin/partner-logos/{partner_logo}'
 */
    const showForm = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::show
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:0
 * @route '/admin/partner-logos/{partner_logo}'
 */
        showForm.get = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::show
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:0
 * @route '/admin/partner-logos/{partner_logo}'
 */
        showForm.head = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::edit
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:48
 * @route '/admin/partner-logos/{partner_logo}/edit'
 */
export const edit = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/partner-logos/{partner_logo}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::edit
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:48
 * @route '/admin/partner-logos/{partner_logo}/edit'
 */
edit.url = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { partner_logo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    partner_logo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        partner_logo: args.partner_logo,
                }

    return edit.definition.url
            .replace('{partner_logo}', parsedArgs.partner_logo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::edit
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:48
 * @route '/admin/partner-logos/{partner_logo}/edit'
 */
edit.get = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::edit
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:48
 * @route '/admin/partner-logos/{partner_logo}/edit'
 */
edit.head = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::edit
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:48
 * @route '/admin/partner-logos/{partner_logo}/edit'
 */
    const editForm = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::edit
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:48
 * @route '/admin/partner-logos/{partner_logo}/edit'
 */
        editForm.get = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::edit
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:48
 * @route '/admin/partner-logos/{partner_logo}/edit'
 */
        editForm.head = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::update
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:55
 * @route '/admin/partner-logos/{partner_logo}'
 */
export const update = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/partner-logos/{partner_logo}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::update
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:55
 * @route '/admin/partner-logos/{partner_logo}'
 */
update.url = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { partner_logo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    partner_logo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        partner_logo: args.partner_logo,
                }

    return update.definition.url
            .replace('{partner_logo}', parsedArgs.partner_logo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::update
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:55
 * @route '/admin/partner-logos/{partner_logo}'
 */
update.put = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::update
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:55
 * @route '/admin/partner-logos/{partner_logo}'
 */
update.patch = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::update
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:55
 * @route '/admin/partner-logos/{partner_logo}'
 */
    const updateForm = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::update
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:55
 * @route '/admin/partner-logos/{partner_logo}'
 */
        updateForm.put = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::update
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:55
 * @route '/admin/partner-logos/{partner_logo}'
 */
        updateForm.patch = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::destroy
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:77
 * @route '/admin/partner-logos/{partner_logo}'
 */
export const destroy = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/partner-logos/{partner_logo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::destroy
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:77
 * @route '/admin/partner-logos/{partner_logo}'
 */
destroy.url = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { partner_logo: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    partner_logo: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        partner_logo: args.partner_logo,
                }

    return destroy.definition.url
            .replace('{partner_logo}', parsedArgs.partner_logo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PartnerLogoController::destroy
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:77
 * @route '/admin/partner-logos/{partner_logo}'
 */
destroy.delete = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::destroy
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:77
 * @route '/admin/partner-logos/{partner_logo}'
 */
    const destroyForm = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PartnerLogoController::destroy
 * @see app/Http/Controllers/Admin/PartnerLogoController.php:77
 * @route '/admin/partner-logos/{partner_logo}'
 */
        destroyForm.delete = (args: { partner_logo: string | number } | [partner_logo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const PartnerLogoController = { index, create, store, show, edit, update, destroy }

export default PartnerLogoController
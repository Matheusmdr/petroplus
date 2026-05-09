import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
const Controlleree4f6b6c5996ace4f8e46adc93bf35d6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controlleree4f6b6c5996ace4f8e46adc93bf35d6.url(options),
    method: 'get',
})

Controlleree4f6b6c5996ace4f8e46adc93bf35d6.definition = {
    methods: ["get","head"],
    url: '/sobre',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
Controlleree4f6b6c5996ace4f8e46adc93bf35d6.url = (options?: RouteQueryOptions) => {
    return Controlleree4f6b6c5996ace4f8e46adc93bf35d6.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
Controlleree4f6b6c5996ace4f8e46adc93bf35d6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controlleree4f6b6c5996ace4f8e46adc93bf35d6.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
Controlleree4f6b6c5996ace4f8e46adc93bf35d6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controlleree4f6b6c5996ace4f8e46adc93bf35d6.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
const Controlleree4f6b6c5996ace4f8e46adc93bf35d6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controlleree4f6b6c5996ace4f8e46adc93bf35d6.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
Controlleree4f6b6c5996ace4f8e46adc93bf35d6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controlleree4f6b6c5996ace4f8e46adc93bf35d6.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
Controlleree4f6b6c5996ace4f8e46adc93bf35d6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controlleree4f6b6c5996ace4f8e46adc93bf35d6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controlleree4f6b6c5996ace4f8e46adc93bf35d6.form = Controlleree4f6b6c5996ace4f8e46adc93bf35d6Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
const Controller1c975247dece6664083dbdb674390436 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller1c975247dece6664083dbdb674390436.url(options),
    method: 'get',
})

Controller1c975247dece6664083dbdb674390436.definition = {
    methods: ["get","head"],
    url: '/contato',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
Controller1c975247dece6664083dbdb674390436.url = (options?: RouteQueryOptions) => {
    return Controller1c975247dece6664083dbdb674390436.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
Controller1c975247dece6664083dbdb674390436.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller1c975247dece6664083dbdb674390436.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
Controller1c975247dece6664083dbdb674390436.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller1c975247dece6664083dbdb674390436.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
const Controller1c975247dece6664083dbdb674390436Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller1c975247dece6664083dbdb674390436.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
Controller1c975247dece6664083dbdb674390436Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller1c975247dece6664083dbdb674390436.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
Controller1c975247dece6664083dbdb674390436Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller1c975247dece6664083dbdb674390436.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller1c975247dece6664083dbdb674390436.form = Controller1c975247dece6664083dbdb674390436Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
const Controller4dcb0c20ce0daa3565fac451619f64e5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller4dcb0c20ce0daa3565fac451619f64e5.url(options),
    method: 'get',
})

Controller4dcb0c20ce0daa3565fac451619f64e5.definition = {
    methods: ["get","head"],
    url: '/aviso-de-privacidade',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
Controller4dcb0c20ce0daa3565fac451619f64e5.url = (options?: RouteQueryOptions) => {
    return Controller4dcb0c20ce0daa3565fac451619f64e5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
Controller4dcb0c20ce0daa3565fac451619f64e5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller4dcb0c20ce0daa3565fac451619f64e5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
Controller4dcb0c20ce0daa3565fac451619f64e5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller4dcb0c20ce0daa3565fac451619f64e5.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
const Controller4dcb0c20ce0daa3565fac451619f64e5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller4dcb0c20ce0daa3565fac451619f64e5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
Controller4dcb0c20ce0daa3565fac451619f64e5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller4dcb0c20ce0daa3565fac451619f64e5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
Controller4dcb0c20ce0daa3565fac451619f64e5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller4dcb0c20ce0daa3565fac451619f64e5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller4dcb0c20ce0daa3565fac451619f64e5.form = Controller4dcb0c20ce0daa3565fac451619f64e5Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
const Controller2286f66b64d7b9420fbc4f8c6969ce66 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller2286f66b64d7b9420fbc4f8c6969ce66.url(options),
    method: 'get',
})

Controller2286f66b64d7b9420fbc4f8c6969ce66.definition = {
    methods: ["get","head"],
    url: '/politica-sgi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
Controller2286f66b64d7b9420fbc4f8c6969ce66.url = (options?: RouteQueryOptions) => {
    return Controller2286f66b64d7b9420fbc4f8c6969ce66.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
Controller2286f66b64d7b9420fbc4f8c6969ce66.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller2286f66b64d7b9420fbc4f8c6969ce66.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
Controller2286f66b64d7b9420fbc4f8c6969ce66.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller2286f66b64d7b9420fbc4f8c6969ce66.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
const Controller2286f66b64d7b9420fbc4f8c6969ce66Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller2286f66b64d7b9420fbc4f8c6969ce66.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
Controller2286f66b64d7b9420fbc4f8c6969ce66Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller2286f66b64d7b9420fbc4f8c6969ce66.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
Controller2286f66b64d7b9420fbc4f8c6969ce66Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller2286f66b64d7b9420fbc4f8c6969ce66.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller2286f66b64d7b9420fbc4f8c6969ce66.form = Controller2286f66b64d7b9420fbc4f8c6969ce66Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (options?: RouteQueryOptions) => {
    return Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/settings/appearance'
*/
Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form = Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form

const Controller = {
    '/sobre': Controlleree4f6b6c5996ace4f8e46adc93bf35d6,
    '/contato': Controller1c975247dece6664083dbdb674390436,
    '/aviso-de-privacidade': Controller4dcb0c20ce0daa3565fac451619f64e5,
    '/politica-sgi': Controller2286f66b64d7b9420fbc4f8c6969ce66,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
}

export default Controller
import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
* @route '/login'
*/
loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: login.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

login.form = loginForm

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:14
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:14
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:14
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:14
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:14
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:14
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HomeController::home
* @see app/Http/Controllers/HomeController.php:14
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
export const sobre = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sobre.url(options),
    method: 'get',
})

sobre.definition = {
    methods: ["get","head"],
    url: '/sobre',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
sobre.url = (options?: RouteQueryOptions) => {
    return sobre.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
sobre.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sobre.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
sobre.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sobre.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
const sobreForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sobre.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
sobreForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sobre.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/sobre'
*/
sobreForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: sobre.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

sobre.form = sobreForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
export const contato = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contato.url(options),
    method: 'get',
})

contato.definition = {
    methods: ["get","head"],
    url: '/contato',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
contato.url = (options?: RouteQueryOptions) => {
    return contato.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
contato.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contato.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
contato.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contato.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
const contatoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contato.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
contatoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contato.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/contato'
*/
contatoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: contato.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

contato.form = contatoForm

/**
* @see routes/web.php:22
* @route '/petroplay'
*/
export const petroplay = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: petroplay.url(options),
    method: 'get',
})

petroplay.definition = {
    methods: ["get","head"],
    url: '/petroplay',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:22
* @route '/petroplay'
*/
petroplay.url = (options?: RouteQueryOptions) => {
    return petroplay.definition.url + queryParams(options)
}

/**
* @see routes/web.php:22
* @route '/petroplay'
*/
petroplay.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: petroplay.url(options),
    method: 'get',
})

/**
* @see routes/web.php:22
* @route '/petroplay'
*/
petroplay.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: petroplay.url(options),
    method: 'head',
})

/**
* @see routes/web.php:22
* @route '/petroplay'
*/
const petroplayForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: petroplay.url(options),
    method: 'get',
})

/**
* @see routes/web.php:22
* @route '/petroplay'
*/
petroplayForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: petroplay.url(options),
    method: 'get',
})

/**
* @see routes/web.php:22
* @route '/petroplay'
*/
petroplayForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: petroplay.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

petroplay.form = petroplayForm

/**
* @see routes/web.php:29
* @route '/marcas'
*/
export const marcas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: marcas.url(options),
    method: 'get',
})

marcas.definition = {
    methods: ["get","head"],
    url: '/marcas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:29
* @route '/marcas'
*/
marcas.url = (options?: RouteQueryOptions) => {
    return marcas.definition.url + queryParams(options)
}

/**
* @see routes/web.php:29
* @route '/marcas'
*/
marcas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: marcas.url(options),
    method: 'get',
})

/**
* @see routes/web.php:29
* @route '/marcas'
*/
marcas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: marcas.url(options),
    method: 'head',
})

/**
* @see routes/web.php:29
* @route '/marcas'
*/
const marcasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: marcas.url(options),
    method: 'get',
})

/**
* @see routes/web.php:29
* @route '/marcas'
*/
marcasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: marcas.url(options),
    method: 'get',
})

/**
* @see routes/web.php:29
* @route '/marcas'
*/
marcasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: marcas.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

marcas.form = marcasForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
export const privacidade = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacidade.url(options),
    method: 'get',
})

privacidade.definition = {
    methods: ["get","head"],
    url: '/aviso-de-privacidade',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
privacidade.url = (options?: RouteQueryOptions) => {
    return privacidade.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
privacidade.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacidade.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
privacidade.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacidade.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
const privacidadeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: privacidade.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
privacidadeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: privacidade.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/aviso-de-privacidade'
*/
privacidadeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: privacidade.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

privacidade.form = privacidadeForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
export const politicasgi = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: politicasgi.url(options),
    method: 'get',
})

politicasgi.definition = {
    methods: ["get","head"],
    url: '/politica-sgi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
politicasgi.url = (options?: RouteQueryOptions) => {
    return politicasgi.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
politicasgi.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: politicasgi.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
politicasgi.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: politicasgi.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
const politicasgiForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: politicasgi.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
politicasgiForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: politicasgi.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/politica-sgi'
*/
politicasgiForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: politicasgi.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

politicasgi.form = politicasgiForm

/**
* @see routes/web.php:44
* @route '/admin/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/web.php:44
* @route '/admin/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see routes/web.php:44
* @route '/admin/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:44
* @route '/admin/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see routes/web.php:44
* @route '/admin/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:44
* @route '/admin/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see routes/web.php:44
* @route '/admin/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

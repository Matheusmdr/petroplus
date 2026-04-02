<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\PartnerLogo;
use App\Models\SiteSetting;
use App\Models\Testimonial;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $testimonials = Testimonial::where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        $partnerLogos = PartnerLogo::where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        $banner = Banner::where('page', 'home')
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->first();

        $homeVideoUrl = SiteSetting::getValue('home_video_url', 'https://www.youtube.com/embed/Svs1uLk3M78');

        return Inertia::render('home', [
            'testimonials' => $testimonials,
            'partnerLogos' => $partnerLogos,
            'banner' => $banner,
            'homeVideoUrl' => $homeVideoUrl,
        ]);
    }
}

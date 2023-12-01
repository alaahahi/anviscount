<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;


use Illuminate\Http\Request;

class LocaleController extends Controller
{
    public function changeLocale(Request $request, $locale)
    {

        // app()->setLocale($locale);
        session()->put('locale', $locale);
    
        if (in_array($locale, ['en', 'ar'])) {
            app()->setLocale($locale);

            App::setLocale($locale);
            setcookie('lang',$locale, time() + (60 * 24 * 30), '/'); 
            return response()->json(['success' => $locale]);
        }

        return response()->json(['success' => false]);
    }
}
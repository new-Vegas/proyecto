<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use Inertia\Inertia;
use App\Models\Survey;
use App\Models\Response;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function(){
    return Inertia::render('home');
});
*/

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/post/{post:slug}', [PageController::class, 'post'])->name('post');


Route::get('/survey/{survey:slug}', [PageController::class, 'survey'])->name('survey');
Route::get('/search/', [PageController::class, 'search'])->name('search');
Route::get('/subscription/', [PageController::class, 'subscription'])->name('subscription');
Route::get('/sugerencias/', [PageController::class, 'sugerencias'])->name('sugerencias'); 
Route::get('/Category/{category:slug}', [PageController::class, 'category'])->name('category');
// Admin panel

Route::post('/survey/{survey:slug}/response', [PageController::class, 'survey_response'])->name('survey_response');
Route::get('/survey/{survey:slug}/thanks', [PageController::class, 'survey_thanks'])->name('survey_thanks');
// Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function() {
//     return view('dashboard');
// });

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {

    $sessions = Tracker::sessions(60 * 24); // get sessions (visits) from the past day
    $paths = [];
    $langs = [];
    $jsResourceRG = "/(\.js|css|dashboard|livewire|_ignition)/";
    $spamNames = ['logout'];//, 'login'];
    $spamData = 0;
    $langsCount = 0;
    
    foreach ($sessions as $session)
    {
        $lg = $session->language->preference;

        if (array_key_exists($lg, $langs)) {
            $langs[$lg] += 1;
        } else {
            $langs[$lg] = 1;
        }

        foreach ($session->log as $log)
        {
            if (!is_null($log) && $log->path) {
                $currentPath = $log->path->path;
                if (preg_match($jsResourceRG, $currentPath) || in_array($currentPath, $spamNames)) {
                    $spamData += 1;
                    continue;
                }
                
                if (array_key_exists($currentPath, $paths)) {
                    $paths[$currentPath] += 1;
                } else {
                    $paths[$currentPath] = 1;
                }
            }
        }
    }

    return view('dashboard', [
        'today' => Tracker::pageViews(60 * 24 * 30),
        'paths' => $paths,
        'langs' => $langs,
    ]);
})->name('dashboard');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard/posts', function () {
    return view('admin-posts');
})->name('admin-posts');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard/surveys', function () {
    return view('admin-survey');
})->name('admin-survey');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard/survey/{survey:slug}', function (Survey $survey) {
    return view('admin-survey-responses', [
        'responses' => Response::where('survey_id', $survey->id)->get(),
        'questions' => $survey->config,
    ]);
})->name('admin-survey-responses');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard/categories', function () {
    return view('admin-categories');
})->name('admin-categories');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard/user-types', function () {
    return view('admin-user-types');
})->name('admin-user-types');

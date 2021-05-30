<?php
namespace App\Http\Controllers;

use Symfony\Component\Console\Output\ConsoleOutput;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Survey;
use App\Models\Response;
use App\Models\UserType;
use App\Models\Category;
use DateTime;
use Inertia\Inertia;
use App\Models\SurveyResponses;

class PageController extends Controller
{
    public function home() {
        $types = UserType::all();
        $posts = [];

        foreach ($types as $tp) {
            $posts[$tp->name] = Post::latest()->with('user')->where('usr_type_id', $tp->id)->take(8)->get();
        }

        return Inertia::render('home', [
            'posts' => $posts,
            'types' => $types,
            'categories' => Category::all(),
        ]);
        //return view('index');
    }

    public function post(Post $post) {
        $types = UserType::all();

        return Inertia::render('post', [
            'p' => compact('post'),
            'similar' => $post->sameCat(),
            'categories' => Category::all(),
            'types' => $types,
            'id' => $post->id,
            'views' => $post->views,
            'setViews' => $post->setviews(),
        ]);
    }


    public function category(Category $category) {
        $types = UserType::all();

        return Inertia::render('category', [
            'cat' => compact('category'),
            'posts' => $category->posts,
            'categories' => Category::all(),
            'types' => $types,
        ]);
    }


    public function survey_response(Survey $survey, Request $request) {
        $data = json_decode($request->getContent(), TRUE);
        // $a=json_decode('[{"Titulo":"Is this the only question of this survey?","Respuesta":[{"opcion":"Yes","checked":true}]}]');
        $output = new ConsoleOutput();
        //$output->writeln($request->getContent() == '[{"Titulo":"Is this the only question of this survey?","Respuesta":[{"opcion":"Yes","checked":true}]}]');
        //$output->writeln(Response::create([]));
        // var_dump($array[0]['Titulo']);
        return Response::create([
            'ip' => $request->ip(),
            'survey_id' => $survey->id,
            'data' => $request->getContent(),
            'survey_id' => $survey->id,
            'categories' => Category::all(),
        ]);
    }


    public function survey_thanks(Survey $survey) {
        $types = UserType::all();
        return Inertia::render('survey-thanks', [
            'srv' => compact('survey'),
            'categories' => Category::all(),
            'types' => $types,
            ]);
    }

    public function survey(Survey $survey) {
        $types = UserType::all();
        // if (!$survey->enabled) {
        // }
        // http://127.0.0.1:8000/survey/radom-title-4-1
        $start_date = new DateTime($survey->aviableFrom);
        $end_date = new DateTime($survey->aviableTo);
        $current_date = new DateTime();

        //echo 'start date: ' . $start_date->format('Y-m-d') . '<br>current date:' . $current_date->format('Y-m-d') . '<br>';
        //echo 'end date: ' . $end_date->format('Y-m-d');

        if ($start_date > $current_date) {
            return redirect('/');
        }

        return Inertia::render('Survey', [
            'surveyData' =>compact('survey'),
            'categories' => Category::all(),
            'types' => $types,
        ]);
    }
    
    public function search(Request $request){
        // Get the search value from the request
        $types = UserType::all();
        // Search in the title and body columns from the posts table
        $posts = [];

        foreach ($types as $tp) {
            $posts[$tp->name] = Post::latest()->with('user')->where('usr_type_id', $tp->id)->take(8)->get();
        }
        // Return the search view with the resluts compacted
        return Inertia::render('search',[
            'categories' => Category::all(),
            'types' => $types,
            'posts' => $posts
        ]);
    }
    
      public function sugerencias(Request $request){
        // Get the search value from the request
        $types = UserType::all();
        // Search in the title and body columns from the posts table
        $posts = [];

        foreach ($types as $tp) {
            $posts[$tp->name] = Post::latest()->with('user')->where('usr_type_id', $tp->id)->take(8)->get();
        }
        // Return the search view with the resluts compacted
        return Inertia::render('sugerencias',[
            'categories' => Category::all(),
            'types' => $types,
            'posts' => $posts
        ]);
    }

    public function subscription(Request $request){
        // Get the search value from the request
        $types = UserType::all();
        // Search in the title and body columns from the posts table
        $posts = [];

        foreach ($types as $tp) {
            $posts[$tp->name] = Post::latest()->with('user')->where('usr_type_id', $tp->id)->take(8)->get();
        }
        // Return the search view with the resluts compacted
        return Inertia::render('subscription',[
            'categories' => Category::all(),
            'types' => $types,
            'posts' => $posts
        ]);
    }
}

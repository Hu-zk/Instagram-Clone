<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Post;
use App\Models\User;
use App\Models\Like;

class PostsController extends Controller
{
    public function createPost(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // $uploadedImage = $request->file('image');
        // $base64Image = base64_encode(file_get_contents($uploadedImage->getRealPath()));

        // $imagePath = 'post_images/' . uniqid() . '.' . $uploadedImage->getClientOriginalExtension();
        // Storage::disk('public')->put($imagePath, base64_decode($base64Image));

        $imagePath = $request->file('image')->store('post_images', 'public');
        // echo asset('storage/post_images');


        $post = new Post([
            'user_id' => auth()->user()->id,
            'image_path' => $imagePath,
            'likes_count' => 0,
        ]);
        $post->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully',
            'post' => $post,
        ]);
    }

    public function like($post_id)
    {
        $user = auth()->user();
        $post = Post::find($post_id);

        if (!$user->likes->contains($post)) {
            $like = new Like([
                'user_id' => $user->id,
                'post_id' => $post->id,
            ]);
            $like->save();
            $post->increment('likes_count');
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Post liked successfully',
        ]);
    }

    public function unlike($post_id)
    {
        $user = auth()->user();
        $post = Post::find($post_id);

        if ($user->likes->contains($post)) {
            echo $user->likes;
            $user->likes->where('post_id', $post->id)->first()->delete($post);
            $post->decrement('likes_count');
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Post unliked successfully',
        ]);
    }
}

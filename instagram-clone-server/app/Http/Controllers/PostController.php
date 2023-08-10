<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Like;

class PostController extends Controller
{
    public function createPost(Request $request)
    {
        // $request->validate([
        //     'image' => 'required|string|max:2048',
        // ]);

        $base64Image = $request->input('image');
        $decodedImage = base64_decode($base64Image);

        $filename = 'post_' . time() . '.jpg';
        Storage::disk('public')->put('post_images/' . $filename, $decodedImage);
        $imagePath = 'post_images/' . $filename;

        $post = new Post([
            'user_id' => auth()->user()->id,
            'image_path' => $imagePath,
            'likes_count' => 0,
        ]);
        $post->save();

        $imageUrl = Storage::url('post_images/' . $filename);

        return response()->json([
            'status' => 'success',
            'message' => 'Post created successfully',
            'post' => $post,
            'image_url' => $imageUrl,
        ]);
    }

    public function toggleLike($postId)
    {
        $user = Auth::user();
        $post = Post::find($postId);
        $likeExists = $post->likes()->where('user_id', $user->id)->exists();

        if ($likeExists) {
            $post->likes()->where('user_id', $user->id)->delete();
            $post->decrement('likes_count');
        } else {
            $like = new Like(['user_id' => $user->id]);
            $post->likes()->save($like);
            $post->increment('likes_count');
        }

        return response()->json([
            'status' => 'success',
            'message' => 'post has been liked/disliked successfully'
        ]);
    }

    public function getFollowingPosts()
    {

        $user = Auth::user();
        $followingPosts = [];

        foreach ($user->following as $followedUser) {
            $followingPosts = $followedUser->posts()->with('likes')->with('user')->latest()->get();

            foreach ($followingPosts as $post) {
                $post->liked_by_me = $post->likes->contains('user_id', $user->id);
            }
        }

        return response()->json(['posts' => $followingPosts]);
    }
}

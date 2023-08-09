<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Follower;

class UserController extends Controller
{
    public function searchUsers($searchItem)
    {

        $auth_user = Auth::user();

        $users = User::where('username', 'LIKE', "%$searchItem%")->orWhere('name', 'LIKE', "%$searchItem%")->get();

        // foreach($users as $user) {
        //     $user->is_followed_by_me = $auth_user->isFollowedBy($user);
        // }

        return response()->json(['users' => $users]);
    }

    public function follow($userId)
    {
        $user = Auth::user();

        $isFollowed = Follower::where('follower_id', $user->id)->where('following_id', $userId)->first();

        if ($isFollowed) {
            Follower::where('follower_id', $user->id)->where('following_id', $userId)->first()->delete();
        } else {
            Follower::create([
                'follower_id' => $user->id,
                'following_id' => $userId,
            ]);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'User followed/unfollowed successfully'
        ]);
    }
}

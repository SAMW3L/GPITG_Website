<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        if (Auth::attempt(['username' => $credentials['username'], 'password' => $credentials['password']])) {
            $user = Auth::user();
            $token = $user->createToken('admin-token')->plainTextToken;

            return response()->json(
                [
                    'token' => $token,
                    'username' => $user->username,
                    'email' => $user->email,
                    'message' => 'Login successful'
                ], 200);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }
}
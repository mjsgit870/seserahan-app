<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login() {
        return Inertia::render('auth/Login');
    }

    public function login_post(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        return redirect()->intended('/seserahan');
        
        // if (Auth::attempt($credentials)) {
        //     $request->session()->regenerate();
        //     return redirect()->intended('/seserahan');
        // }
        
        // return back()->withErrors([
        //     'error' => 'Email atau password salah.',
        // ])->onlyInput('email');
    }

    public function register() {}

    public function register_post() {}

    public function logout() {
        // Auth::logout();
        return redirect()->route('login');
    }
}

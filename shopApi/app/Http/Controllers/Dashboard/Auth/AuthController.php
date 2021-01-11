<?php

namespace App\Http\Controllers\Dashboard\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;


class AuthController extends Controller
{
    public function login (Request $request){
//        return  response()->json($request,201);
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
             return response()->json( [ 'errors' => $validator->errors() ], 400 );
        }else{
            $user = User::where('email', $request->email)->first();
        }
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
        $token = $user->createToken($user->username)->plainTextToken;
        $response = [
            'user' =>  $user,
            'token' => $token
        ];

        return  response()->json($response,201);

/*----------------------> two way for that <-----------------------*/

//        $request->validate([
//            'email' => 'required|email',
//            'password' => 'required',
////            'device_name' => 'required',
//        ]);
//
//        $user = User::where('email', $request->email)->first();
//
//        if (! $user || ! Hash::check($request->password, $user->password)) {
//            throw ValidationException::withMessages([
//                'email' => ['The provided credentials are incorrect.'],
//            ]);
//        }
//        $token = $user->createToken($user->username)->plainTextToken;
//        $response = [
//            'user' =>  $user,
//            'token' => $token
//        ];
//        return  response()->json($response,201);

    }

    public function register (Request $request){
        $validator = Validator::make($request->all(), [
            'name'=>'required',
            'family'=>'string',
            'username'=>'required|unique:users',
            'email' => 'required|email|unique:users' ,
            'password' => 'required|min:8'
        ]);
        if ($validator->fails()) {
            return response()->json( [ 'errors' => $validator->errors() ], 400 );
        }else{
            User::create([
                'name'=>$request->name,
                'family'=>$request->family,
                'username'=>$request->username,
                'email' => $request->email,
                'password'=>Hash::make($request->password)
            ]);
        }
    }

    public function user ()
    {

    }

    public function logout (Request $request) {
       $request->user()->tokens()->delete();
       return response()->json('logout',201);
    }

}

import React from 'react';

const Login = () => {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className='text-center mt-5 text-3xl font-bold'>Login</h1>
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#d" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
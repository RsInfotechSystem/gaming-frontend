"use client"
import React, { useState } from 'react';
import '../style/admin.css';
import { useForm } from 'react-hook-form';
import { adminCommunication } from '@/services/admin-communication';
import Swal from 'sweetalert2';
import { setCookie } from "cookies-next";
import { useRouter } from 'next/navigation';
import Loader from '../common-component/Loader';



export default function Login({ isOpen, openSignUp, openForgotPassword }) {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  async function login(params) {
    try {
      setLoader(true);
      const serverResponse = await adminCommunication.login(params);
      if (serverResponse.data.status === "SUCCESS") {
        setCookie("rsisGamingAdmin", serverResponse?.data?.token);
        setCookie("gamingAdminDetails", serverResponse?.data?.userDetails);
        Swal.fire({ text: serverResponse?.data?.message, icon: "success", timer: 2000 });
        router.push("/admin/user-management");
      } else {
        Swal.fire({ text: serverResponse.data.message, icon: "warning" });
      }
      setLoader(false)
    } catch (error) {
      Swal.fire({ text: error?.response?.data?.message || error.message, icon: "warning", });
      setLoader(false)
    }
  }

  return (
    <>
      {loader === true ?
        <Loader />
        :
        <section className='bg_img_admin'>
          <div className="modal-overlay" >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="login_page_name">
                <p className="mb-0">LOG IN</p>
              </div>
              <hr className="modal-hr" />
              <div className="p-4">
                {/* Login Form */}
                <form onSubmit={handleSubmit(login)}>
                  <input
                    className="login_input"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}

                  <input
                    className="login_input"
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 8, message: "Password must be at least 8 characters" },
                    })}
                  />
                  {errors.password && <p className="text-danger">{errors.password.message}</p>}

                  <div className="login_main mt-5 mb-4">
                    <button className="popup_btn" type="submit">
                      Login
                    </button>
                  </div>
                </form>
                {/* {error && <p className="text-danger">{error}</p>} */}

                <div>
                  {/* <p className="mb-0">
                            <button className="text-link" onClick={() => { onClose(); setTimeout(openSignUp, 300); }}>
                                Create New Account
                            </button>
                        </p> */}
                  <p>
                    <button className="text-link" onClick={() => { onClose(); setTimeout(openForgotPassword, 300); }}>
                      Forgot password?
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>
      }
    </>
  );
}






"use client";

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import network from "../../../public/dashboard/network.png";
import cod_game from "../../../public/dashboard/cod_game.jpeg";
import { communication } from "@/services/communication";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { getCookie } from "cookies-next";
import { getUserDetails } from "@/utilities/get-user-details-from-cokies";

export default function Profile() {

  const [profile, setProfile] = useState([]);
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  //get Contest on initial load
  const getProfileDetails = async () => {
    try {
      setLoader(true);
      const userDetails = getUserDetails(router);
      const serverResponse = await communication.getProfileDetails(userDetails?.id);
      if (serverResponse?.data?.status === "SUCCESS") {
        setProfile(serverResponse?.data?.player);
        setLoader(false);
      } else if (serverResponse?.data?.status === "JWT_INVALID") {
        Swal.fire({ text: error?.serverResponse?.data?.message, icon: "error" });
        router.push("/");
        setLoader(false);
      } else {
        Swal.fire({ text: error?.serverResponse?.data?.message, icon: "error" });
      }
    } catch (error) {
      Swal.fire({ text: error?.serverResponse?.data?.message, icon: "error" });
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    const userDetails = getCookie("gamingUserDetails");
    if (!userDetails) {
      router.push("/");
    } else {
      getProfileDetails()
    }
  }, []);

  console.log("profile : ", profile)
  return (
    <div className="tournament_list container-fluid mt-5 pt-5">
      <p className="tournament_text d-flex align-items-center">
        MY PROFILE{" "}
        <Image className="ms-2" width={25} height={20} src={network} alt="network" />
      </p>
      <div className="card profile-card shadow-lg p-4">
        <div className="row align-items-center">
          {/* Profile Image Section */}
          <div className="col-md-4 d-flex justify-content-center">
            <Image
              src={cod_game}
              width={150}
              height={150}
              className="rounded-circle profile-img img-fluid"
              alt="Player Image"
            />
          </div>

          {/* Profile Details Section */}
          <div className="col-md-8 text-center text-md-start">
            <h3 className="fw-bold">{profile?.name}</h3>
            {/* <p className="rank-text fs-5">🏆 Rank: #1</p> */}
            {/* <p className="team-text fs-5">Team: Warriors</p> */}
            <p className="rank-text fs-5">{profile?.email}</p>
            <p className="rank-text fs-5">{profile?.mobile}</p>
            {/* <button className="btn btn-primary mt-3">View Profile</button> */}
          </div>
        </div>
      </div>
    </div>


  );
}

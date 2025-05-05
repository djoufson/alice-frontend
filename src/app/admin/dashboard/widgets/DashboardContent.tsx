"use client";

import AppLoader from "@/components/common/Loader";
import { GenderDistributionChart } from "@/app/admin/dashboard/widgets/GenderDistributionChart";
import {
  Gender,
  GetDashboardResponse,
} from "@/types/ApiResponses/GetDashboardResponse";
import { ConsultationModel } from "@/types/Models/Consultation";
import React, { useState } from "react";
import { AgeDistributionChart } from "./AgeDistributionChart";
import { Calendar, Star } from "lucide-react";

export default function DashboardContent() {
  const [isLoadingConsultations, setIsLoadingConsultations] = useState(false);
  const [consultations, setConsultations] = useState<ConsultationModel[]>([]);
  const [dashboardResponse, setDashboardResponse] =
    useState<GetDashboardResponse>({
      totalConsultations: 10,
      totalStars: 3,
      ageDistribution: [],
      genderDistribution: [
        {
          gender: Gender.Male,
          numberOfConsultations: 10,
          percentage: 90,
        },
        {
          gender: Gender.Female,
          numberOfConsultations: 10,
          percentage: 10,
        },
      ],
    });

  return (
    <div className="p-4">
      <h1 className="title">Dashboard</h1>
      <div className="max-w-[900px] w-full mt-3 flex flex-col gap-3">
        <section>
          <h2 className="font-bold text-xl mb-3">Statistics</h2>
          <div className="flex gap-6 bg-[#84A6E4] rounded-lg p-6">
            <div className="w-1/2 h-[100px] flex items-center bg-white gap-3 p-4 rounded-lg">
              <div className="h-full bg-[#BEEFC6] rounded-full aspect-square flex items-center justify-center">
                <Calendar className="w-1/2 h-1/2" />
              </div>
              <div>
                <span className="font-bold text-3xl">
                  {dashboardResponse.totalConsultations}
                </span>{" "}
                <br />
                <span>Consultations this month</span>
              </div>
            </div>
            <div className="w-1/2 h-[100px] flex items-center bg-white gap-3 p-4 rounded-lg">
              <div className="h-full bg-[#FFE3AC] rounded-full aspect-square flex items-center justify-center">
                <Star className="w-1/2 h-1/2" />
              </div>
              <div>
                <span className="font-bold text-3xl">
                  {dashboardResponse.totalStars}
                </span>{" "}
                <br />
                <span>Rate</span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex gap-6">
          <div className="w-1/3 flex flex-col gap-4">
            <div>
              <h2 className="font-bold text-xl mb-3">Age distribution</h2>
              <AgeDistributionChart />
            </div>

            {/* Gender */}
            <div>
              <h2 className="font-bold text-xl mb-3">Gender distribution</h2>
              <GenderDistributionChart
                data={dashboardResponse.genderDistribution}
              />
            </div>
          </div>

          {/* Latest requests */}
          <div className="w-2/3">
            <h2 className="font-bold text-xl mb-3">Latest pending requests</h2>
            <div>
              {isLoadingConsultations && (
                <div className="h-[calc(100%-80px)] flex items-center justify-center">
                  <AppLoader />
                </div>
              )}
              {consultations.length <= 0 && (
                <div className="h-[calc(100%-80px)] flex flex-col gap-5 items-center justify-center md:-translate-x-4">
                  <img
                    src="/assets/no-task.png"
                    alt="No task"
                    className="w-1/2 md:w-1/4 md:translate-x-8"
                  />
                  <p className="text-center text-sm md:text-xl">
                    You currently have no consultation request.
                  </p>
                </div>
              )}
              <div className="flex flex-col gap-4 w-full">
                {/* @foreach (var model in _consultations)
                    {
                      <ConsultationRequestCard Model="model" Consultations="_consultations"/>
                    } */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

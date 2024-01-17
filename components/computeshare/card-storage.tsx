"use client";
import { Card, CardBody } from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import { Community } from "../icons/community";
import {apiGatewaysCount, apiProvidersCount, apiStorageCount} from "@/components/api/computeshare";

export const CardStorage = () => {

  const [providers,setProviders] = useState(0)
  const [gatewayCount, setGatewayCount] = useState(0)
  useEffect( ()=>{
    apiStorageCount().then(data => {}).finally()
    apiProvidersCount().then(data => setProviders(data))
    apiGatewaysCount().then(data => setGatewayCount(data))
  },[])


  return (
    <Card className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-white">存储概览</span>
            <span className="text-white text-xs"> &nbsp;</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">
            &nbsp;
          </span>
          <span className="text-danger text-xs"> &nbsp;</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success-600 text-xs">
                {""}
              </span>
              <span className="text-lg">{providers}</span>
            </div>
            <span className="text-white text-xs">Providers</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{""}</span>
              <span className="text-lg">{gatewayCount}</span>
            </div>
            <span className="text-white text-xs">Gateways</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{""}</span>
              <span className="text-lg">150 T</span>
            </div>
            <span className="text-white text-xs">Storage</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

import { Card, CardBody } from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import { Community } from "../icons/community";
import {apiGatewayList, apiGatewaysCount} from "@/components/api/computeshare";

export const CardGateway = (props: { refreshTime: number; }) => {

  const { refreshTime } = props;

  const [gatewayCount,setGatewayCount] = useState(0)

  const [gateway,setGateway] = useState({
    "name": "",
    "ip": "",
    "totalPort": 0,
    "useIntranetPort": 0,
    "usePublicPort": 0
  })

  useEffect(() => {
    apiGatewayList().then(data => {
      setGateway(data[0])
    })
    apiGatewaysCount().then(data => {
      setGatewayCount(data)
    })
  },[refreshTime])

  return (
    <Card className="xl:max-w-sm bg-success rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-white">网关概览</span>
            <span className="text-white text-xs">{gatewayCount} 网关</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">{gateway.ip}</span>
          <span className="text-danger text-xs">{gateway.name}</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{""}</span>
              <span className="text-lg">{gateway.totalPort}</span>
            </div>
            <span className="text-white text-xs">总端口数</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{""}</span>
              <span className="text-lg">{gateway.useIntranetPort}</span>
            </div>
            <span className="text-white text-xs">内网端口数</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{""}</span>
              <span className="text-lg">{gateway.usePublicPort}</span>
            </div>
            <span className="text-white text-xs">公网端口数</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

"use client";
import { Card, CardBody } from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import { Community } from "../icons/community";
import {apiCycleCount} from "@/components/api/computeshare";

export const CardCycle = (props: { refreshTime: number; }) => {

  const { refreshTime } = props;

  const [cycleInfo, setCycleInfo] = useState({
    "grantTotal": "",
    "recoveryTotal": "",
    "grantVouchersTotal": "",
    "rechargedTotal": ""
  })

  useEffect(() => {

    apiCycleCount().then(data => {
      setCycleInfo(data)
    })

  },[refreshTime])

  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-default-900">积分概览</span>
            <span className="text-default-900 text-xs">{cycleInfo.grantTotal} 充值</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-default-900 text-xl font-semibold">
            &nbsp;
          </span>
          <span className="text-danger text-xs">&nbsp;</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success-600 text-xs">
                {""}
              </span>
              <span className="text-xs">{cycleInfo.grantTotal}</span>
            </div>
            <span className="text-default-900 text-xs">发放积分</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{""}</span>
              <span className="text-xs">{cycleInfo.recoveryTotal}</span>
            </div>
            <span className="text-default-900 text-xs">回收积分</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{""}</span>
              <span className="text-xs">{ cycleInfo.grantVouchersTotal==""?"0":cycleInfo.grantVouchersTotal } </span>
            </div>
            <span className="text-default-900 text-xs">发放代金券</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

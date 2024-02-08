"use client";
import { Card, CardBody } from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import { Community } from "../icons/community";
import {apiGatewaysCount, apiProvidersCount, apiS3KeyCallCount, apiStorageCount} from "@/components/api/computeshare";

export const CardS3Key = (props: { refreshTime: number; }) => {

  const { refreshTime } = props;

  const [s3KeyCallCount,sets3KeyCallCount] = useState({
    s3CallTotal: 0,
    s3WriteCallTotal: 0,
    s3ReadCallTotal: 0,
    s3KeyTotal: 0,
  })
  useEffect( ()=>{
    apiS3KeyCallCount().then(data => sets3KeyCallCount(data))
  },[refreshTime])


  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Community />
          <div className="flex flex-col">
            <span className="text-white">S3服务</span>
            <span className="text-white text-xs"> &nbsp;</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">
            {s3KeyCallCount.s3KeyTotal} 服务数
          </span>
          <span className="text-danger text-xs"> &nbsp; </span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success-600 text-xs">
                {""}
              </span>
              <span className="text-lg">{s3KeyCallCount.s3CallTotal}</span>
            </div>
            <span className="text-white text-xs">调用次数</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{""}</span>
              <span className="text-lg">{s3KeyCallCount.s3ReadCallTotal}</span>
            </div>
            <span className="text-white text-xs">读调用次数</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{""}</span>
              <span className="text-lg">{s3KeyCallCount.s3WriteCallTotal}</span>
            </div>
            <span className="text-white text-xs">写调用次数</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

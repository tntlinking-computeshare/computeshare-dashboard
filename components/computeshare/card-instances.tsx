import {Card, CardBody} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import {apiInstancesCount} from "@/components/api/computeshare";

export const CardInstances = (props: { refreshTime: number; }) => {
  const { refreshTime } = props;
  const [instancesCount, setInstancesCount] = useState([
    {
      id: "",
      name: "",
      specs: "",
      owner: "",
      createTime: "",
    }
  ])
  useEffect(() => {
    apiInstancesCount().then(data => {
      const formattedData = data.map((instance: { createTime: number; }) => {
        const formattedCreateTime = instance.createTime / 1000;
        return {
          ...instance,
          createTime: formattedCreateTime,
        };
      });

      setInstancesCount(formattedData);
    });
  }, [refreshTime]);

  return (
    <Card className=" bg-default-50 rounded-xl shadow-md px-3">
      <CardBody className="py-5 gap-4">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">
              最新创建虚拟机
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          {instancesCount.map((item) => (
            <div key={item.id} className="grid grid-cols-4 w-full">
              <div className="w-full">
                {item.name}
              </div>

              <span className="text-default-900  font-semibold">
                {item.specs}
              </span>
              <div>
                <span className="text-default-900 text-xs">{item.owner}</span>
              </div>
              <div>
                <span className="text-default-500 text-xs">
                  <Moment  format="DD/MM/YYYY" unix >{item.createTime}</Moment>
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

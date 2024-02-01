import { Avatar, Card, CardBody } from "@nextui-org/react";
import React from "react";

const items = [
  {
    id: "1",
    name: "Instance1",
    sepc: "2C4G",
    user: "张三",
    date: "9/20/2021",
  }
];

export const CardInstances = (props: { refreshTime: number; }) => {
  const { refreshTime } = props;

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
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-4 w-full">
              <div className="w-full">
                {item.name}
              </div>

              <span className="text-default-900  font-semibold">
                {item.sepc}
              </span>
              <div>
                <span className="text-default-900 text-xs">{item.user}</span>
              </div>
              <div>
                <span className="text-default-500 text-xs">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

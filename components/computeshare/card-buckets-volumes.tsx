import {Card, CardBody} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import {apiBucketsVolumesList, apiInstancesCount, apiProvidersVolumesList} from "@/components/api/computeshare";

export const CardBucketsVolumes = (props: { refreshTime: number; }) => {
  const { refreshTime } = props;
  const [bucketsVolumesList, setBucketsVolumesList] = useState([
    {
      id: 0,
      name: "",
      volumeNum: 0,
    }
  ])
  useEffect(() => {
    apiBucketsVolumesList().then(data => {
      setBucketsVolumesList(data);
    });
  }, [refreshTime]);

  return (
    <Card className=" bg-default-50 rounded-xl shadow-md px-3">
      <CardBody className="py-5 gap-4">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">
              BucketsVolumes
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 ">
          {bucketsVolumesList.map((item) => (
            <div key={item.id} className="grid grid-cols-2 w-full">
              <div className="w-full">
                {item.name}
              </div>
              <div>
                <span className="text-default-600 text-xs">{item.volumeNum}</span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

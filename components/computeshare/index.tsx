"use client";
import React from "react";
import {CardStorage} from "@/components/computeshare/card-storage";
import {CardGateway} from "@/components/computeshare/card-gateway";
import {Link} from "@nextui-org/react";
import NextLink from "next/link";
import {CardInstances} from "@/components/computeshare/card-instances";
import {CardCycle} from "@/components/computeshare/card-cycle";
import ProvidersTable from "@/components/computeshare/providers-table";

export const ComputeShare = () => {
    return (
        <div className="h-full lg:px-6">
            <div className="flex justify-center gap-4 xl:gap-6 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
                <div className="mt-6 gap-6 flex flex-col w-full">
                    {/* Card Section Top */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">共享算力数据大屏</h3>
                        <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-5  justify-center w-full">
                            <CardStorage />
                            <CardGateway />
                            <CardCycle/>
                        </div>
                    </div>
                </div>

                {/* Left Section */}
                <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
                    <h3 className="text-xl font-semibold">Section</h3>
                    <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
                        <CardInstances />
                    </div>
                </div>
            </div>

            {/* Table Latest Users */}
            <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[90rem] mx-auto gap-3">
                <div className="flex  flex-wrap justify-between">
                    <h3 className="text-center text-xl font-semibold">Provider 列表</h3>
                    <Link
                        href="/accounts"
                        as={NextLink}
                        color="primary"
                        className="cursor-pointer"
                    >
                        View All
                    </Link>
                </div>
                <ProvidersTable />
            </div>
        </div>
    )
}


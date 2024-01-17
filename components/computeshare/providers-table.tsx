import React, {useEffect, useState} from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";
import {apiProvidersList} from "@/components/api/computeshare";

const columns = [
    {
        key: "ip",
        label: "ip地址",
    },
    {
        key: "type",
        label: "类型",
    },
    {
        key: "mac",
        label: "mac",
    },
    {
        key: "totalCpu",
        label: "cpu核数",
    },
    {
        key: "totalMemory",
        label: "内存",
    },
    {
        key: "active",
        label: "状态"
    }
];

export default function ProvidersTable() {

    const [rows, setRows] = useState([
        {
            mac: "sss"
        }
    ])

    useEffect(()=> {
        apiProvidersList().then(data => {
            console.log(data)
            setRows(data)
        })
    },[])

    const renderCell = React.useCallback((item:any, columnKey:any) => {
        const cellValue = item[columnKey];
        switch (columnKey) {
            case "active":
                if(cellValue) {
                    return (<div className="text-default-500">在线</div>)
                }else {
                    return (<div className="text-red-500">离线</div>)
                }
            default:
                return (cellValue);
        }
    },[])

    return (
        <div className=" w-full flex flex-col gap-4">
            <Table aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.mac}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {/*<div className="w-full flex justify-center">*/}
            {/*    <Pagination total={10} initialPage={1} />*/}
            {/*</div>*/}

        </div>
    );
}

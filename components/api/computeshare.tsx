export const agentList = async () => {
    try{
        const res = await fetch("/api/v1/agent/instance/2e07eb09-b2c7-4929-b1b4-207e1a2ca9de",
            {
                cache:'no-store',
                mode: 'no-cors'
            }
        )
        const data = await res.json();
        return data.data

    }catch (err) {
        console.log(err)
        return []
    }
};

export const apiCycleCount = async ()=> {
    try{
        const res = await fetch("/api/v1/dashboard/cycles/count",
            {
                cache:'no-store',
                mode: 'no-cors'
            }
        )
        const data = await res.json();
        return data.data

    }catch (err) {
        console.log(err)
        return {
            grantTotal: 0,
            recoveryTotal: 0,
            grantVouchersTotal: 0,
            rechargedTotal: 0,
        }
    }
}


export const apiGatewaysCount = async ()=> {
    try{
        const res = await fetch("/api/v1/dashboard/gateways/count",
            {
                cache:'no-store',
                mode: 'no-cors'
            }
        )
        const data = await res.json();
        return data.data

    }catch (err) {
        console.log(err)
        return 0
    }
}

export const apiGatewayList = async function () {
    try{
        const res = await fetch("/api/v1/dashboard/gateways/list",
            {
                mode: 'no-cors'
            }
        )
        const data = await res.json();
        console.log(data.data)
        return data.data

    }catch (err) {
        console.log(err)
        return []
    }
}


export const apiProvidersCount = async ()=> {
    try{
        const res = await fetch("/api/v1/dashboard/providers/count",
            {
                cache:'no-store',
                mode: 'no-cors'
            }
        )
        const data = await res.json();
        return data.data

    }catch (err) {
        console.log(err)
        return 0
    }
}

export const apiProvidersList = async function () {
    try{
        const res = await fetch("/api/v1/dashboard/providers/list",
            {
                cache:'no-store',
                mode: 'no-cors'
            }
        )
        const data = await res.json();
        return data.data

    }catch (err) {
        console.log(err)
        return []
    }
}

export const apiSandboxCount = async ()=> {
    try{
        const res = await fetch("/api/v1/dashboard/sandbox/count",
            {
                cache:'no-store',
                mode: 'no-cors'
            }
        )
        const data = await res.json();
        return data.data

    }catch (err) {
        console.log(err)
        return 0
    }
}

export const apiStorageCount = async ()=> {
    try{
        const res = await fetch("/api/v1/dashboard/storages/count",
            {
                cache:'no-store',
                mode: 'no-cors'
            }
        )
        const data = await res.json();
        return data.data

    }catch (err) {
        console.log(err)
        return 0
    }
}

export const apiInstancesCount = async ()=> {
    try{
        const res = await fetch("/api/v1/dashboard/instances/count",
            {
                cache:'no-store',
                mode: 'no-cors'
            }
        )
        const data = await res.json();
        return data.data

    }catch (err) {
        console.log(err)
        return 0
    }
}

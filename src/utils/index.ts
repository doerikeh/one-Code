export const EmptyData = (data: any) => {
    return (
        data === null || data === "" || (Array.isArray(data) && data.length === 0) ||
        (data.constructor === Object && Object.keys(data).length === 0) || data.length === 0
    )
}
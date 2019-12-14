
// 年化收益率 = (投资内收益 / 本金) ×（365 / 投资天数）×100 %

// export const  = () => {

// }

export const computer = ({ day, aror, principal } ) => {
    let result = (principal * aror) / 365 * day
    return result.toFixed(2)
}
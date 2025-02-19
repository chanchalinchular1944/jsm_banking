import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox=({accounts=[], totalBanks, totalCurrentBalance}:TotalBalanceBoxProps)=>{
    return (
        <section className='total-balance'>
            <div className='total-balance-chart'>
                <DoughnutChart accounts={accounts}></DoughnutChart>
            </div>
            <div className='fle flex-col gap-6'>
                <h2 className='header-2'>
                     Bank Accounts : {totalBanks}
                </h2>
                <div className='flex flex-col gap2'>
                    <p className='total-balance-lable'>Total Current Balance</p>
                    <div className='total-balance-amount flex-center gap-2'>
                        <AnimatedCounter amount={totalCurrentBalance}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TotalBalanceBox
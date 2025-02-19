'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BankCard from '../components/BankCard';

const RightSideBar = ({ 
    user, 
    banks = []  // Default empty array to avoid errors
}: { 
    user: { firstName: string; lastName:string; email: string }; 
    banks?: { name: string; id: number }[]; // Adjust type as per your Bank data structure
}) => {
    return (
        <aside className="right-sidebar">
            <section className="flex flex-col pb-8 relative">
                {/* Gradient Banner */}
                <div className="profile-banner relative" />
                
                {/* Profile Section */}
                <div className="profile flex flex-col items-start p-4 relative">
                    {/* Profile Image at Top Left */}
                    <div className="profile-img absolute left-4 -top-8 flex items-center justify-center">
                        <span className="text-5xl font-bold text-blue-500">
                            {user.firstName[0]}
                        </span>
                    </div>
                    
                    {/* Profile Details Below Image */}
                    <div className="profile-details pt-10 pl-4">
                        <h1 className="profile-name">{user.firstName}</h1>
                        <p className="profile-email text-gray-500 text-sm">{user.email}</p>
                    </div>
                </div>
            </section>

            <section className="banks">
                <div className='flex w-full justify-between'>
                    <h2 className='header-2'>My Banks</h2>
                    <Link href="/" className="flex gap-2">
                        <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
                        <h2 className='text-14 font-semibold text-gray-600'>Add Bank</h2>
                    </Link>
                </div>

                {banks.length > 0 && (
                    <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                        <div className='relative z-10'>
                            <BankCard
                            key={banks[0].$id}
                            account={banks[0]}
                            userName={`${user.firstName} ${user.lastName}`}
                            showBalance={false}></BankCard>
                        </div>
                        {banks[1] && (
                            <div className='absolute right-0 top-8 z-0 w-[90%]'>
                                <BankCard
                            key={banks[1].$id}
                            account={banks[1]}
                            userName={`${user.firstName} ${user.lastName}`}
                            showBalance={false}></BankCard>
                            </div>
                        )}
                    </div>
                )}
            </section>
        </aside>
    );
};

export default RightSideBar;

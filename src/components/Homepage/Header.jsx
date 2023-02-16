import React from 'react'
import {
    ArrowRightOutlined
} from '@ant-design/icons/lib/icons'

const Header = () => {
    return (
        <>
            <div class="content-3-7 overflow-hidden" style={{ fontFamily: 'Poppins' }}>
                <div class="mx-auto">
                    <div class="flex flex-wrap">
                        <div class="w-[640px] h-[240px] mx-12 my-12 card py-8 px-11 shadow-2xl rounded-2xl bg-white card-outline flex flex-col relative overflow-hidden">
                            {/* <h2 class="text-xl tracking-wide mb-3 font-medium price-title">Startup</h2> */}
                            <h2 class="text-2xl tracking-wide flex items-center mb-3 font-medium text-medium-black">
                                <span>Solusi, </span>
                                <span class="ml-1.5 font-bold">Kesehatan Anda</span>
                            </h2>

                            <p class="font-normal text-base tracking-wide mb-10 text-medium-white">Update informasi seputar kesehatan<br />
                                semua bisa disini !</p>

                            <button type="button" class="text-[#EFF1FB] bg-[#002060] w-[160px] hover:bg-[#06193d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Selengkapnya</button>

                            {/* <button
                                class="btn-outline font-medium rounded-lg flex justify-center items-center tracking-wide py-4 w-full focus:outline-none">Choose
                                Plan
                            </button> */}
                        </div>
                        <div class="w-[500px] h-[240px] mx-12 my-12 card py-8 px-11 shadow-2xl rounded-2xl bg-white card-outline flex flex-col relative overflow-hidden">
                            {/* <h2 class="text-xl tracking-wide mb-3 font-medium price-title">Startup</h2> */}
                            <h2 class="text-2xl tracking-wide flex items-center mb-3 font-medium text-medium-black">
                                Layanan Khusus
                            </h2>

                            <p class="font-normal text-base tracking-wide mb-10 text-medium-white">Tes Covid 19, Cegah <br />
                                Corona Sedini Mungkin</p>

                            {/* <button type="button" class="text-[#EFF1FB] bg-[#002060] w-[160px] hover:bg-[#06193d] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Selengkapnya</button> */}
                            <button type="button" class="text-[#002060] bg-transparent w-[160px] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-start mr-3 md:mr-0">
                                Daftar Tes
                                <span className='ml-2'><ArrowRightOutlined /></span>
                            </button>


                            {/* <button
                                class="btn-outline font-medium rounded-lg flex justify-center items-center tracking-wide py-4 w-full focus:outline-none">Choose
                                Plan
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
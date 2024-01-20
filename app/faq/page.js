import React from 'react'

export default function FAndQ() {
    return (
        <div className="flex flex-col w-full mb-24 border border-solid border-gray-300 p-6"> 
            <div className='text-xl'>
            Fequently Asked Question
            </div> 
            <ol className='p-4' style={{ listStyleType: 'decimal', paddingInlineStart: '1em' }}>
                <li>
                    <a  href="#goto247-0">
                        How do I create an account on Displate
                    </a>
             </li>
                <li >
                    <a  href="#goto247-1">
                        Is my personal information safe?
                    </a>
                </li>
                <li >
                    <a  href="#goto247-2">
                        How do I change my password?
                    </a>
                </li>
                <li>
                    <a  href="#goto247-3">
                        I forgot my password. How can I log in?
                    </a>
                </li>
                <li>
                    <a href="#goto247-4">
                        Can I change my login e-mail address?
                    </a>
                </li>
                <li>
                    <a href="#goto247-5">
                        How can I sell artworks if I have a customer's account?
                    </a>
                </li>
                <li>
                    <a href="#goto247-6">
                        How do I delete customer account?
                    </a>
                </li>
            </ol>
        </div>

    )
}

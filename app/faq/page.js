
import React from 'react'

export default function FAndQ() {
    const faqs = [{'question':'How do I create an account on Displate?',
'answer':"To create a customer's account, please go here. Fill in the required information: your username, e-mail address, first and last name, and then set a password. Finally, please select the 'Create an account' button located below the registration form."}]
    return (
        
<div className="flex flex-col w-full mb-24 border border-solid border-gray-300 p-6"> 
            <div className='text-2xl'>
            Fequently Asked Question
            </div> 
            <div className='text-xl p-4 pb-0'>
            Account
            </div> 

            <ol className='p-4' style={{ listStyleType: 'decimal', paddingInlineStart: '1em' }}>
                {
                    faqs.map( (faq,index)=>
                    <li key={index}>
                        <a  href="#goto247-0">
                            {faq.question}
                        </a>
                    </li>)
                }   
            </ol>

            <div className='text-2xl'>
            Answers
            </div> 
            <div className='text-xl p-4 pb-0'>
            Account
            </div> 
            <ol className='p-4'>
                {
                    faqs.map((faq,index)=>
                    <li key={index}>
                        <p>
                        {faq.question} 
                        </p>
                    <p className='pt-2'>
                        {faq.answer}
                    </p></li>)
                }
            </ol>
        </div>
        

    )
}

import React, { createRef } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "https://raskin.us19.list-manage.com/subscribe/post?u=215db57bccd5e8ac098d96353&amp;id=51e8db47ba";

const Subscribe = ({ buttonText, keepLeft }) => {
  const emailRef = createRef(undefined)

  return (
    <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => {
              switch (status) {
                case "sending":
                  return <div>Sending...</div>
                case "success":
                  return <div>Awesome, you're subscribed!</div>
                case "error":
                  return <div dangerouslySetInnerHTML={{ __html: message }} />
                default:
                  return (
                    <form
                      className="flex-none sm:flex-1 md:flex-auto lg:flex-initial xl:flex-1"
                      onSubmit={() => {
                        event.preventDefault()

                        subscribe({
                          EMAIL: emailRef.current.value,
                        })
                      }}
                    >
                      <div className="mt-4">
                        <div className={`${keepLeft} mx-auto max-w-lg sm:flex sm:overflow-hidden`}>
                        <input id="email-input" placeholder="me@email.com" ref={emailRef}
                            type="email" name="email" 
                            className="sm:flex-1 sm:min-w-0 text-lg px-6 py-3 md:px-8 md:py-5 bg-white 
                            rounded-lg sm:rounded-r-none w-full sm:w-auto block border-2 
                            border-gray-300 sm:border-r-0 bg-gray-100 focus:bg-white 
                            focus:border-blue-300 placeholder-gray-500 focus:outline-none
                            dark:bg-gray-800 dark:border-gray-500"></input>
                            <button className="mt-3 sm:mt-0 text-md
                              font-semibold bg-blue-600 w-full text-white
                              rounded-lg sm:rounded-l-none sm:w-auto px-6
                            py-3 md:px-8 md:py-5 block shadow-xl
                            sm:shadow-none hover:bg-blue-500" 
                            type="submit" value="subscribe">
                            {buttonText}
                            </button>
                        </div>
                      </div>
                    </form>
                  )
              }
            }}
          />
  )
}

export default Subscribe;